import express from 'express';
import { Resend } from 'resend';
import dotenv from 'dotenv';
import pendingBookings from '../models/pendingBookings.js';
import requestLimiter from '../utils/rateLimit.js';


dotenv.config(); 
const resend = new Resend(process.env.RESEND_API_KEY);

const router = express.Router();

router.post("/", requestLimiter, async (req, res) => {
  const bookingData = req.body;

   if (
    !bookingData.name ||
    !bookingData.email ||
    !bookingData.phoneNumber ||
    !bookingData.numOfAdults ||
    bookingData.numOfAdults < 1 ||
    bookingData.numOfChildren === undefined ||
    !Array.isArray(bookingData.childrenAges) ||
    bookingData.childrenAges.length !== bookingData.numOfChildren ||
    bookingData.childrenAges.some(age => age === "" || age === null || age === undefined) ||
    !bookingData.travelPackage ||
    !bookingData.tripDuration ||
    !bookingData.arrivalDate ||
    !bookingData.departureDate ||
    !bookingData.totalPrice
  ) {
    return res.status(400).json({ error: "All fields are required and must be valid" });
  }

  // Store data temporarily using email as key
  pendingBookings.set(bookingData.email, bookingData);

  const confirmationLink = `http://localhost:5000/confirm?email=${encodeURIComponent(bookingData.email)}`;

  try {
    const { error } = await resend.emails.send({
      from: 'Zaytuna Bosnia Travel <booking@zaytunabosnia.com>',
      to: bookingData.email,
      subject: "Please Confirm Your Booking",
      html: `
      <div style="
  width: 100%;
  padding: 40px 0;
  background: url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e') center/cover no-repeat;
  background-color: #f0f0f0; /* fallback color */
">
  <div style="
    width: 80%;
    margin: auto;
    padding: 20px;
    font-family: Arial, sans-serif;
    background-color: rgba(255, 255, 255, 0.95);
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  ">
    <h2 style="color: rgb(0, 0, 0);">Hello ${bookingData.name},</h2>
    <p style="font-size: 16px; color: rgb(0, 0, 0);">
      Thank you for choosing <strong>Zaytuna Bosnia Travel Agency</strong>! To confirm your booking, please click the button below:
    </p>

    <div style="text-align: center; margin: 30px 0;">
      <a href="${confirmationLink}" style="
        background-color: rgb(0, 0, 0);
        color: #ffffff;
        padding: 14px 24px;
        text-decoration: none;
        border-radius: 6px;
        font-size: 16px;
        font-weight: bold;
        display: inline-block;
      ">
        Confirm My Booking
      </a>
    </div>

    <p style="font-size: 14px; color: rgb(0, 0, 0);">
  Once you click the confirmation button, your booking request will be verified and reviewed by our team. You will receive a follow-up email shortly with all the necessary information regarding your itinerary and payment instructions.
</p>


    <p style="font-size: 14px; color: rgb(0, 0, 0);">
      If the button above doesn't work, you can copy and paste this link into your browser:<br />
      <a href="${confirmationLink}" style="color: rgb(4, 36, 179);">${confirmationLink}</a>
    </p>

    <hr style="border: none; border-top: 1px solid #eee; margin: 30px 0;" />
    <p style="font-size: 12px; color: rgb(0, 0, 0); text-align: center;">
      © ${new Date().getFullYear()} Zaytuna Bosnia — All rights reserved
    </p>
  </div>
</div>
    `
    });

    if (error) {
      console.error("Resend error:", error);
      return res.status(500).json({ error: "Failed to send confirmation email" });
    }

    res.status(200).json({ message: "Confirmation email sent" });
  } catch (err) {
    console.error("Unexpected error:", err);
    res.status(500).json({ error: "Failed to send confirmation email" });
  }
});


export default router;
