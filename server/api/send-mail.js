import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS
  }
})

export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  const mailOptions = {
    from: process.env.GMAIL_USER,
    to: body.to,
    subject: body.subject,
    text: body.text,
    html: body.html
  }

  try {
    await transporter.sendMail(mailOptions)
    return { message: 'Email successfully sent' }
  } catch (error) {
    console.error('Fehler beim Mailversand:', error)
    return createError({ statusCode: 500, statusMessage: 'Email sending failed' })
  }
})
