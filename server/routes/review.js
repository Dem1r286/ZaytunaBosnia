import express from 'express';
import { Resend } from 'resend';
import dotenv from 'dotenv';
import requestLimiter from '../utils/rateLimit.js';

dotenv.config(); 
const resend = new Resend(process.env.RESEND_API_KEY);

const router = express.Router();

router.post('/', requestLimiter, async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    const { error } = await resend.emails.send({
      from: 'Zaytuna Bosnia Travel <booking@zaytunabosnia.com>',
      to: process.env.EMAIL_USER,
      subject: "New Review",
      html: `
        <h2>Review</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    });

    if (error) {
      console.error('Error sending review:', error);
      return res.status(500).json({ error: 'Failed to send review' });
    }

    res.status(201).json({ message: 'Review sent successfully!' });
  } catch (error) {
    console.error('Error sending review:', error);
    res.status(500).json({ error: 'Failed to send review' });
  }
});

export default router;
