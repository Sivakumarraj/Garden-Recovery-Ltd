import { Resend } from 'resend'

export const sendContactEmail = async (contactData) => {
  // Use the API key provided in the environment variables
  const resend = new Resend(process.env.RESEND_API_KEY)
  
  const adminEmail = 'Gardenrecovery95@gmail.com'
  
  // Use the verified domain email from environment variables (e.g. info@yourdomain.com)
  // If not set, it will safely fallback to the resend testing email.
  const senderEmail = process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev'

  try {
    // 1. Send email to Admin
    const adminResponse = await resend.emails.send({
      from: `Website Lead <${senderEmail}>`,
      to: adminEmail,
      subject: `New Lead: ${contactData.name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${contactData.name}</p>
        <p><strong>Email:</strong> ${contactData.email}</p>
        <p><strong>Phone:</strong> ${contactData.phone}</p>
        <p><strong>Message:</strong></p>
        <p>${contactData.message}</p>
        <hr>
        <p><small>Submitted: ${new Date().toLocaleString()}</small></p>
      `
    })
    console.log('Admin email sent:', adminResponse)

    // 2. Send confirmation email to the Client
    const clientResponse = await resend.emails.send({
      from: `Garden Recovery Ltd <${senderEmail}>`,
      to: contactData.email,
      subject: `Thank you for contacting Garden Recovery Ltd!`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #247A4D;">Hello ${contactData.name},</h2>
          <p>Thank you for reaching out to Garden Recovery Ltd! This is an automated message to confirm that we have successfully received your inquiry.</p>
          <p>One of our team members will review your message and get back to you shortly.</p>
          
          <div style="background-color: #f8f9fa; padding: 15px; border-left: 4px solid #247A4D; margin: 20px 0;">
            <p style="margin-top: 0;"><strong>Your Message:</strong></p>
            <p style="font-style: italic; color: #555;">"${contactData.message}"</p>
          </div>
          
          <p>If you need immediate assistance, please call us at <strong>07562 240691</strong>.</p>
          <br>
          <p>Best regards,</p>
          <p><strong>The Garden Recovery Team</strong></p>
        </div>
      `
    })
    console.log('Client confirmation email sent:', clientResponse)

    return { adminResponse, clientResponse }
  } catch (error) {
    console.error('Resend email error:', error)
    throw new Error('Failed to send email via Resend')
  }
}