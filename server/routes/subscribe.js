import express from 'express';
import Email from '../models/Email.js';
import requestLimiter from '../utils/rateLimit.js';

const router = express.Router();

router.post('/', requestLimiter, async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ error: 'Email is required!' });
    }

    const existingEmail = await Email.findOne({ email });
    if (existingEmail) {
      return res.status(400).json({ error: 'Email already subscribed!' });
    }

    const newEmail = new Email({ email });
    await newEmail.save();

    return res.status(201).json({ message: 'Email subscribed successfully!' });
  } catch (error) {
    console.error('Error saving email:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
});

export default router;
