import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8095;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the dist directory
app.use(express.static(path.join(__dirname, 'dist')));

// API endpoint for enquiry
app.post('/api/enquiry', async (req, res) => {
  const { name, mobile, email, message, company, subject } = req.body;
  const resendApiKey = process.env.RESEND_API_KEY;

  if (!resendApiKey) {
    console.error("RESEND_API_KEY is not set in environment variables!");
    return res.status(500).json({ error: "Server email configuration error" });
  }

  // Determine what fields to send based on what form sent the data
  let htmlContent = `
    <h2>New Website Enquiry Received</h2>
    <table style="border-collapse: collapse; width: 100%; max-width: 600px; font-family: sans-serif; font-size: 14px;">
      <tr style="background-color: #f2f2f2;">
        <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold; width: 150px;">Name</td>
        <td style="padding: 8px; border: 1px solid #ddd;">${name || 'N/A'}</td>
      </tr>
      <tr>
        <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Mobile</td>
        <td style="padding: 8px; border: 1px solid #ddd;">${mobile || 'N/A'}</td>
      </tr>
      <tr style="background-color: #f2f2f2;">
        <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Email</td>
        <td style="padding: 8px; border: 1px solid #ddd;"><a href="mailto:${email}">${email || 'N/A'}</a></td>
      </tr>
  `;

  if (company) {
    htmlContent += `
      <tr>
        <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Company</td>
        <td style="padding: 8px; border: 1px solid #ddd;">${company}</td>
      </tr>
    `;
  }
  if (subject) {
    htmlContent += `
      <tr style="background-color: #f2f2f2;">
        <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Subject</td>
        <td style="padding: 8px; border: 1px solid #ddd;">${subject}</td>
      </tr>
    `;
  }

  htmlContent += `
    <tr>
      <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold; vertical-align: top;">Message</td>
      <td style="padding: 8px; border: 1px solid #ddd; white-space: pre-wrap;">${message || 'N/A'}</td>
    </tr>
  </table>
  `;

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${resendApiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        from: process.env.FROM_EMAIL || "ANDE Enquiry <onboarding@resend.dev>",
        to: process.env.TO_EMAIL || "karamit819@gmail.com",
        subject: subject ? `Contact Form: ${subject}` : "New Website Enquiry",
        html: htmlContent
      })
    });

    const data = await response.json();

    if (response.ok) {
      return res.status(200).json({ success: true, messageId: data.id });
    } else {
      console.error("Resend API Error Response:", data);
      return res.status(response.status).json({ error: data.message || "Failed to send email via Resend" });
    }
  } catch (error) {
    console.error("Resend connection error:", error);
    return res.status(500).json({ error: "Failed to connect to email provider" });
  }
});

// For any other routes, serve index.html (supports SPA routing in React Router)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
