import { defineEventHandler, readBody, createError } from 'file://C:/Users/lucas/Desktop/Studium/8.%20Semester/Web-Engineering/Abgabe_Web/node_modules/h3/dist/index.mjs';
import nodemailer from 'file://C:/Users/lucas/Desktop/Studium/8.%20Semester/Web-Engineering/Abgabe_Web/node_modules/nodemailer/lib/nodemailer.js';

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS
  }
});
const sendMail = defineEventHandler(async (event) => {
  const body = await readBody(event);
  const mailOptions = {
    from: process.env.GMAIL_USER,
    to: body.to,
    subject: body.subject,
    text: body.text,
    html: body.html
  };
  try {
    await transporter.sendMail(mailOptions);
    return { message: "Email successfully sent" };
  } catch (error) {
    console.error("Fehler beim Mailversand:", error);
    return createError({ statusCode: 500, statusMessage: "Email sending failed" });
  }
});

export { sendMail as default };
//# sourceMappingURL=send-mail.mjs.map
