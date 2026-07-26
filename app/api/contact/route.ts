import { NextRequest, NextResponse } from 'next/server'
import { sendContactEmail } from '@/lib/send-email'

// Email validation regex
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

// Phone validation (basic, accepts international formats)
const PHONE_REGEX = /^[\d\s\+\-\(\)]+$/

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email, phone, comment, context } = body

    // Validate required fields
    if (!email || !phone) {
      return NextResponse.json(
        { error: 'Email en telefoonnummer zijn verplicht' },
        { status: 400 }
      )
    }

    // Validate email format
    if (!EMAIL_REGEX.test(email)) {
      return NextResponse.json(
        { error: 'Ongeldig email-adres' },
        { status: 400 }
      )
    }

    // Validate phone format
    if (!PHONE_REGEX.test(phone)) {
      return NextResponse.json(
        { error: 'Ongeldig telefoonnummer' },
        { status: 400 }
      )
    }

    // Check if Resend is configured
    if (!process.env.RESEND_API_KEY || process.env.RESEND_API_KEY === 're_your_api_key_here') {
      console.error('RESEND_API_KEY is not configured')
      return NextResponse.json(
        { error: 'Email service niet geconfigureerd' },
        { status: 500 }
      )
    }

    // Build email HTML content with better styling
    let emailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background-color: #2563eb; color: white; padding: 20px; border-radius: 8px 8px 0 0; }
            .content { background-color: #f9fafb; padding: 30px; border-radius: 0 0 8px 8px; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #4b5563; }
            .value { color: #111827; margin-top: 5px; }
            .context { background-color: white; padding: 20px; border-radius: 8px; margin-top: 20px; }
            .footer { margin-top: 20px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 14px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1 style="margin: 0;">Nieuwe Contactaanvraag</h1>
              <p style="margin: 5px 0 0 0; opacity: 0.9;">via ElveonTech Website</p>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">Email:</div>
                <div class="value">${email}</div>
              </div>
              <div class="field">
                <div class="label">Telefoonnummer:</div>
                <div class="value">${phone}</div>
              </div>
    `

    if (comment) {
      emailHtml += `
              <div class="field">
                <div class="label">Opmerking:</div>
                <div class="value">${comment.replace(/\n/g, '<br>')}</div>
              </div>
      `
    }

    // Add context if available
    if (context && (context.category || context.hoursPerDay || context.numberOfPeople)) {
      emailHtml += `
              <div class="context">
                <h3 style="margin-top: 0; color: #2563eb;">Context Informatie</h3>
      `
      if (context.category) {
        emailHtml += `
                <div class="field">
                  <div class="label">Categorie:</div>
                  <div class="value">${context.category}</div>
                </div>
        `
      }
      if (context.hoursPerDay) {
        emailHtml += `
                <div class="field">
                  <div class="label">Uren per dag:</div>
                  <div class="value">${context.hoursPerDay}</div>
                </div>
        `
      }
      if (context.numberOfPeople) {
        emailHtml += `
                <div class="field">
                  <div class="label">Aantal personen:</div>
                  <div class="value">${context.numberOfPeople}</div>
                </div>
        `
      }
      emailHtml += `
              </div>
      `
    }

    emailHtml += `
              <div class="footer">
                <p>Deze aanvraag is ingediend via het contactformulier op elveontech.nl</p>
                <p>Ontvangen op: ${new Date().toLocaleString('nl-NL', { timeZone: 'Europe/Amsterdam' })}</p>
              </div>
            </div>
          </div>
        </body>
      </html>
    `

    // Get email configuration from environment
    const fromEmail = process.env.RESEND_FROM_EMAIL || 'ElveonTech <noreply@elveontech.nl>'
    const toEmail = process.env.RESEND_TO_EMAIL || 'contact@elveontech.nl'

    // Send email using Resend
    const { data, error } = await sendContactEmail({
      from: fromEmail,
      to: toEmail,
      subject: `🔔 Nieuwe contactaanvraag${context?.category ? ` - ${context.category}` : ''}`,
      html: emailHtml,
      replyTo: email,
    })

    if (error) {
      console.error('Resend API error:', error)

      if (error.message?.includes('domain is not verified')) {
        return NextResponse.json(
          { error: 'Email domein is nog niet geverifieerd. Wacht tot DNS records zijn goedgekeurd in Resend.' },
          { status: 500 }
        )
      }

      return NextResponse.json(
        { error: error.message || 'Fout bij verzenden van aanvraag' },
        { status: 500 }
      )
    }

    if (!data?.id) {
      console.error('Resend returned no email id:', { data, error })
      return NextResponse.json(
        { error: 'Email kon niet worden verzonden' },
        { status: 500 }
      )
    }

    // Log success (remove in production or use proper logging service)
    console.log('Contact email sent successfully:', {
      id: data.id,
      to: toEmail,
      from: email
    })

    return NextResponse.json(
      { 
        message: 'Contact request sent successfully', 
        id: data.id 
      },
      { status: 200 }
    )
  } catch (error: any) {
    // Enhanced error logging
    console.error('Error processing contact request:', {
      error: error.message,
      stack: error.stack,
      name: error.name
    })

    // Check for specific Resend errors
    if (error.message?.includes('API key')) {
      return NextResponse.json(
        { error: 'Email configuratiefout - neem contact op met support' },
        { status: 500 }
      )
    }

    if (error.message?.includes('domain')) {
      return NextResponse.json(
        { error: 'Email domein niet geverifieerd - neem contact op met support' },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { error: 'Fout bij verzenden van aanvraag - probeer het later opnieuw' },
      { status: 500 }
    )
  }
}
