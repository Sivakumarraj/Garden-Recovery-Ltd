import { Resend } from 'resend'

export const sendContactEmail = async (contactData) => {
  // Use the API key provided in the environment variables
  const resend = new Resend(process.env.RESEND_API_KEY)
  
  const adminEmail = 'Gardenrecovery95@gmail.com'
  
  // Use the verified domain email from environment variables (e.g. info@gardenrecovery.co.uk)
  // Ensure this is set in your Render environment variables!
  const senderEmail = process.env.RESEND_FROM_EMAIL || 'info@gardenrecovery.co.uk'

  try {
    // 1. Send Booking Alert to Admin
    const adminResponse = await resend.emails.send({
      from: `Garden Recovery Booking <${senderEmail}>`,
      to: adminEmail,
      subject: `NEW BOOKING REQUEST - ${contactData.name}`,
      html: `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; color: #333; max-width: 600px; border: 1px solid #eee; padding: 20px;">
          <h2 style="color: #247A4D; border-bottom: 2px solid #247A4D; padding-pb: 10px;">New Booking Inquiry</h2>
          <p>You have received a new service request from the website.</p>
          
          <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; width: 30%;">Customer Name:</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${contactData.name}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Email:</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${contactData.email}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Phone:</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${contactData.phone}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Service Needed:</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${contactData.service || 'General Inquiry'}</td>
            </tr>
          </table>

          <div style="background: #f9f9f9; padding: 15px; border-radius: 5px;">
            <h4 style="margin-top: 0;">Customer Message:</h4>
            <p style="white-space: pre-wrap;">${contactData.message}</p>
          </div>
          
          <p style="margin-top: 30px; font-size: 12px; color: #999;">
            Submitted on: ${new Date().toLocaleString('en-GB', { timeZone: 'Europe/London' })}
          </p>
        </div>
      `
    })
    console.log('Admin alert sent:', adminResponse)

    // 2. Send Booking Confirmation to the Customer
    const clientResponse = await resend.emails.send({
      from: `Garden Recovery Ltd <${senderEmail}>`,
      to: contactData.email,
      subject: `Booking Confirmation - Garden Recovery Ltd`,
      html: `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;">
          <div style="background-color: #247A4D; padding: 30px; text-align: center; color: white;">
            <h1 style="margin: 0; font-size: 24px;">Booking Received</h1>
          </div>
          
          <div style="padding: 30px;">
            <p>Dear <strong>${contactData.name}</strong>,</p>
            <p>Thank you for choosing <strong>Garden Recovery Ltd</strong>. We have successfully received your booking request and our team is currently reviewing the details.</p>
            
            <p>We will contact you shortly via phone or email to confirm the schedule and provide a finalized quote.</p>
            
            <div style="margin: 30px 0; padding: 20px; background-color: #f4fbf7; border-radius: 6px;">
              <h3 style="margin-top: 0; color: #247A4D; font-size: 18px;">Summary of Request:</h3>
              <ul style="list-style: none; padding: 0;">
                <li style="margin-bottom: 8px;"><strong>Service:</strong> ${contactData.service || 'General Garden Care'}</li>
                <li style="margin-bottom: 8px;"><strong>Status:</strong> Pending Confirmation</li>
              </ul>
            </div>
            
            <p>If you have any urgent questions, feel free to call us directly:</p>
            <p style="font-size: 18px; font-weight: bold; color: #247A4D;">07562 240691</p>
            
            <hr style="border: 0; border-top: 1px solid #eee; margin: 30px 0;">
            
            <p style="font-size: 14px; color: #666;">
              Best regards,<br>
              <strong>The Garden Recovery Team</strong><br>
              Chelmsford, Essex
            </p>
          </div>
          
          <div style="background-color: #f9f9f9; padding: 20px; text-align: center; font-size: 12px; color: #999;">
            &copy; ${new Date().getFullYear()} Garden Recovery Ltd. All rights reserved.
          </div>
        </div>
      `
    })
    console.log('Customer confirmation sent:', clientResponse)

    return { adminResponse, clientResponse }
  } catch (error) {
    console.error('Resend email error:', error)
    throw new Error('Failed to send email via Resend')
  }
}