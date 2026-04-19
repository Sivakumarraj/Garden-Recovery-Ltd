import nodemailer from 'nodemailer'

const createTransporter = () => {
  return nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  })
}

export const sendContactEmail = async (contactData) => {
  const transporter = createTransporter()

  const mailOptions = {
    from: `"Garden Recovery Ltd" <${process.env.EMAIL_FROM}>`,
    to: process.env.EMAIL_TO,
    subject: `New Contact Form - ${contactData.name}`,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${contactData.name}</p>
      <p><strong>Email:</strong> ${contactData.email}</p>
      <p><strong>Phone:</strong> ${contactData.phone}</p>
      <p><strong>Service:</strong> ${contactData.service}</p>
      <p><strong>Message:</strong></p>
      <p>${contactData.message}</p>
      <hr>
      <p><small>Submitted: ${new Date().toLocaleString()}</small></p>
    `,
  }

  const info = await transporter.sendMail(mailOptions)
  console.log('Email sent:', info.messageId)
  return info
}