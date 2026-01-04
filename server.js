const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3003;

// Middleware
app.use(cors());
app.use(express.json());

// Create transporter with Gmail SMTP
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD
  },
  tls: {
    rejectUnauthorized: false
  }
});

// Email sending endpoint
app.post('http://localhost:3003/api/send-email', async (req, res) => {
  try {
    const { name, email, service, message, organization } = req.body;

    // Email options
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: email, // Send to the person who submitted
      subject: 'Thank you for contacting Tempest!',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="utf-8">
            <title>Thank you for contacting Tempest!</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    line-height: 1.6;
                    color: #333;
                    max-width: 600px;
                    margin: 0 auto;
                    padding: 20px;
                }
                .header {
                    background: linear-gradient(135deg, #00AEC7, #0E4D8D);
                    color: white;
                    padding: 30px;
                    text-align: center;
                    border-radius: 10px 10px 0 0;
                }
                .content {
                    background: #f9f9f9;
                    padding: 30px;
                    border-radius: 0 0 10px 10px;
                }
                .highlight {
                    color: #00AEC7;
                    font-weight: bold;
                }
                .footer {
                    text-align: center;
                    margin-top: 20px;
                    color: #666;
                    font-size: 14px;
                }
                .message-box {
                    background: white;
                    border-left: 4px solid #00AEC7;
                    padding: 15px;
                    margin: 20px 0;
                    border-radius: 5px;
                }
            </style>
        </head>
        <body>
            <div class="header">
                <h1>Thank You for Contacting Tempest!</h1>
                <p>We appreciate your interest in our services</p>
            </div>

            <div class="content">
                <p>Dear <strong>${name}</strong>,</p>

                <p>Thank you for reaching out to <span class="highlight">Tempest</span>! We've received your inquiry about <strong>${service}</strong>.</p>

                ${organization ? `<p><strong>Organization:</strong> ${organization}</p>` : ''}

                <div class="message-box">
                    <strong>Your Message:</strong><br>
                    ${message}
                </div>

                <p>Our team will review your request and get back to you within 24 hours. We're excited about the possibility of working together!</p>

                <p>If you have any additional information or questions in the meantime, feel free to reply to this email.</p>

                <p>Best regards,<br>
                <strong>The Tempest Team</strong><br>
                <span class="highlight">Empowering Institutions with AI Solutions</span></p>
            </div>

            <div class="footer">
                <p>This email was sent to ${email} | © 2025 Tempest. All rights reserved.</p>
            </div>
        </body>
        </html>
      `
    };

    // Send email
    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send email' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});