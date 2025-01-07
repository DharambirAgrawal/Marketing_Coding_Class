// Import nodemailer
import nodemailer, { Transporter } from "nodemailer";

// Type definitions for message object
interface EmailMessage {
  subject: string;
  html: string;
}

// Email configuration
const configNodeMailer = {
  service: "gmail", // Set service based on environment
  auth: {
    user: process.env.EMAIL_USER as string, // Type assertion to handle possible undefined
    pass: process.env.EMAIL_PASSWORD as string, // Type assertion to handle possible undefined
  },
  tls: {
    rejectUnauthorized: false, // Ignore certificate errors (if any)
  },
};

const transporter: Transporter = nodemailer.createTransport(configNodeMailer);

// Function to send email
export const sendEmail = async (TO: string, message: EmailMessage): Promise<{
  success: boolean;
  message: string;
}> => {
  try {
   
    const mailOptions = {
      from: process.env.EMAIL_USER, // Sender address
      to: TO, // List of recipients
      subject: message.subject, // Subject line
      html: message.html, // HTML body content
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);

    console.log("Email sent: " + info.response);
    return {
      success: true,
      message: "Email sent successfully",
    }
  } catch (error) {
    return {
      success: false,
      message: "Error sending email"
    }
  }
};
