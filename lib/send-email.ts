import https from 'node:https'

type SendEmailParams = {
  from: string
  to: string
  subject: string
  html: string
  replyTo: string
}

type SendEmailResult =
  | { data: { id: string }; error: null }
  | { data: null; error: { message: string } }

function shouldSkipTlsVerification(): boolean {
  return (
    process.env.NODE_ENV === 'development' &&
    process.env.RESEND_DEV_SKIP_TLS === 'true'
  )
}

function postToResend(body: string, apiKey: string): Promise<{ status: number; body: string }> {
  return new Promise((resolve, reject) => {
    const request = https.request(
      {
        hostname: 'api.resend.com',
        path: '/emails',
        method: 'POST',
        headers: {
          Authorization: `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
          'Content-Length': Buffer.byteLength(body),
        },
        rejectUnauthorized: !shouldSkipTlsVerification(),
      },
      (response) => {
        let data = ''
        response.on('data', (chunk) => {
          data += chunk
        })
        response.on('end', () => {
          resolve({ status: response.statusCode ?? 500, body: data })
        })
      }
    )

    request.on('error', reject)
    request.write(body)
    request.end()
  })
}

function getNetworkErrorMessage(error: unknown): string {
  const message = error instanceof Error ? error.message : 'Unknown network error'

  if (
    message.includes('certificate') ||
    message.includes('UNABLE_TO_VERIFY')
  ) {
    return 'Local SSL certificate issue. Set RESEND_DEV_SKIP_TLS=true in .env.local and restart the dev server.'
  }

  return `Network error contacting Resend: ${message}`
}

export async function sendContactEmail(params: SendEmailParams): Promise<SendEmailResult> {
  const apiKey = process.env.RESEND_API_KEY

  if (!apiKey) {
    return { data: null, error: { message: 'Email service not configured' } }
  }

  const payload = JSON.stringify({
    from: params.from,
    to: [params.to],
    subject: params.subject,
    html: params.html,
    reply_to: params.replyTo,
    tags: [
      { name: 'category', value: 'contact-form' },
      { name: 'source', value: 'website' },
    ],
  })

  let response: { status: number; body: string }

  try {
    response = await postToResend(payload, apiKey)
  } catch (error) {
    console.error('Resend network error:', error)
    return { data: null, error: { message: getNetworkErrorMessage(error) } }
  }

  if (response.status >= 400) {
    try {
      const parsed = JSON.parse(response.body) as { message?: string }
      return {
        data: null,
        error: { message: parsed.message || 'Error sending request' },
      }
    } catch {
      return {
        data: null,
        error: { message: `Resend API error (${response.status})` },
      }
    }
  }

  try {
    const parsed = JSON.parse(response.body) as { id?: string }
    if (!parsed.id) {
      return { data: null, error: { message: 'Email could not be sent' } }
    }
    return { data: { id: parsed.id }, error: null }
  } catch {
    return { data: null, error: { message: 'Invalid response from Resend' } }
  }
}
