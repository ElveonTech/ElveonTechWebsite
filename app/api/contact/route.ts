import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

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

    // Build email HTML content
    let emailHtml = `
      <h2>Nieuwe contactaanvraag via website</h2>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Telefoonnummer:</strong> ${phone}</p>
    `

    if (comment) {
      emailHtml += `
        <p><strong>Opmerking:</strong></p>
        <p>${comment}</p>
      `
    }

    // Add context if available
    if (context) {
      emailHtml += `<h3>Context informatie</h3><ul>`
      if (context.category) emailHtml += `<li><strong>Categorie:</strong> ${context.category}</li>`
      if (context.hoursPerDay) emailHtml += `<li><strong>Uren per dag:</strong> ${context.hoursPerDay}</li>`
      if (context.numberOfPeople) emailHtml += `<li><strong>Aantal personen:</strong> ${context.numberOfPeople}</li>`
      emailHtml += `</ul>`
    }

    // Send email using Resend
    const data = await resend.emails.send({
      from: 'ElveonTech Website <onboarding@resend.dev>', // Use verified domain in production
      to: ['contact@elveontech.nl'],
      subject: 'Nieuwe contactaanvraag',
      html: emailHtml,
      replyTo: email,
    })

    return NextResponse.json(
      { message: 'Contact request sent successfully', id: data.id },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error processing contact request:', error)
    return NextResponse.json(
      { error: 'Failed to send contact request' },
      { status: 500 }
    )
  }
}
