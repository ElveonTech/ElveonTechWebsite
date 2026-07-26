import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email, phone, comment, context } = body

    // Validate required fields
    if (!email || !phone) {
      return NextResponse.json(
        { error: 'Email and phone are required' },
        { status: 400 }
      )
    }

    // Build email content
    let emailContent = `
Nieuwe contactaanvraag via website

Email: ${email}
Telefoonnummer: ${phone}
${comment ? `\nOpmerking:\n${comment}` : ''}
`

    // Add context if available
    if (context) {
      emailContent += `\n\nContext informatie:`
      if (context.category) emailContent += `\nCategorie: ${context.category}`
      if (context.hoursPerDay) emailContent += `\nUren per dag: ${context.hoursPerDay}`
      if (context.numberOfPeople) emailContent += `\nAantal personen: ${context.numberOfPeople}`
    }

    // For now, log the email content
    // TODO: Implement actual email sending with a service like SendGrid, Resend, or Nodemailer
    console.log('Email to send:', {
      to: 'contact@elveontech.nl',
      subject: 'Nieuwe contactaanvraag',
      content: emailContent
    })

    // Simulate email sending
    // In production, replace this with actual email sending logic
    
    return NextResponse.json(
      { message: 'Contact request received successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error processing contact request:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
