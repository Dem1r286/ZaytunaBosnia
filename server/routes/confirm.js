import express from 'express';
import { Resend } from 'resend';
import dotenv from 'dotenv';
import pendingBookings from '../models/pendingBookings.js';
import requestLimiter from '../utils/rateLimit.js';


dotenv.config(); 
const resend = new Resend(process.env.RESEND_API_KEY);

const router = express.Router();

router.get("/", requestLimiter, async (req, res) => {
  const { email } = req.query;

  if (!email) {
    return res.status(400).send("Missing email in confirmation link.");
  }

  const bookingData = pendingBookings.get(email);

  if (!bookingData) {
    return res.status(404).send("Booking data not found or already confirmed.");
  }

  const formatDate = (isoString) => {
    return new Date(isoString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const formattedArrival = formatDate(bookingData.arrivalDate);
  const formattedDeparture = formatDate(bookingData.departureDate);

  const emailHtmlContent = `
    <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; padding: 20px; background-color: #f4f4f4; }
          h2 { color: #2c3e50; }
          p { line-height: 1.6; font-size: 16px; }
          .booking-details { margin-top: 20px; }
          .booking-details p { font-weight: bold; }
        </style>
      </head>
      <body>
        <h2 style="color: #3498db;">New Booking Confirmed</h2>
        <div class="booking-details">
          <p><strong>Package:</strong> ${bookingData.travelPackage}</p>
          <p><strong>Name:</strong> ${bookingData.name}</p>
          <p><strong>Email:</strong> ${bookingData.email}</p>
          <p><strong>Phone:</strong> ${bookingData.phoneNumber}</p>
          <p><strong>Adults:</strong> ${bookingData.numOfAdults}</p>
          <p><strong>Children:</strong> ${bookingData.numOfChildren}</p>
          <p><strong>Children Ages:</strong> ${bookingData.childrenAges}</p>
          <p><strong>Arrival Date:</strong> ${formattedArrival}</p>
          <p><strong>Departure Date:</strong> ${formattedDeparture}</p>
          <p><strong>Trip Duration:</strong> ${bookingData.tripDuration}</p>
          <p><strong>Hotel:</strong> ${bookingData.hotel}</p>
          <p><strong>Total Price:</strong> ${bookingData.totalPrice.toFixed(0)}€</p>
          <p><strong>Selected Package:</strong> ${bookingData.selectedPackage}</p>
          <p><strong>Flight Booked:</strong> ${bookingData.hasBookedFlight ? 'Yes' : 'No'}</p>
          <p><strong>Special Requests:</strong> ${bookingData.specialRequests || 'None'}</p>
        </div>
      </body>
    </html>
  `;

  try {
    // 1. Send email to admin
    const adminResponse = await resend.emails.send({
      from: 'Zaytuna Bosnia Travel <booking@zaytunabosnia.com>',
      to: process.env.EMAIL_USER,
      subject: "New Booking Confirmed",
      html: emailHtmlContent,
    });

    if (adminResponse.error) {
      console.error("Failed to send booking to admin:", adminResponse.error);
    }

    // 2. Send email to user
    const userResponse = await resend.emails.send({
      from: 'Zaytuna Bosnia Travel <booking@zaytunabosnia.com>',
      to: bookingData.email,
      subject: "Your Booking is Confirmed!",
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
      We are pleased to inform you that your booking with <strong>Zaytuna Bosnia</strong> Travel Agency has been successfully confirmed! 
    </p>

    <h3 style="color:rgb(0, 0, 0);"><strong>Payment Instructions:</strong></h3>
      <p style="font-size: 15px; color: #555;">
      Please note that no advance payment is required to confirm your booking. For your convenience and peace of mind, our agency collects the full payment in cash upon your arrival in Bosnia & Herzegovina. We kindly ask that you have the agreed amount ready, either in the local currency (Bosnian Convertible Mark - BAM) or in Euros, as both are widely accepted.
    </p>

    <h3 style="color:rgb(0, 0, 0);"><strong>Arrival & Start of Your Journey:</strong></h3>
<p style="font-size: 15px; color: #555;">
  As soon as you land at the airport, one of our professional drivers will be waiting for you just outside the arrival area. You will easily recognize them, and they will also reach out to you directly upon your arrival to ensure a smooth pickup. From that moment, your personalized journey through Bosnia begins.
</p>
<p style="font-size: 15px; color: #555;">
  Your itinerary will proceed exactly as detailed in your selected travel package, including hotel check-in, scheduled tours, and any additional services you have chosen. At the end of your trip, the same driver will ensure a timely and comfortable transfer back to the airport for your departure. We are committed to making your travel experience seamless from arrival to farewell.
</p>

     <h3 style="font-size: 20px; color:rgb(0, 0, 0);">Booking Summary:</h3>
      <ul style="font-size: 15px; color: #333; line-height: 1.6;">
        <li><strong>Package:</strong> ${bookingData.travelPackage}</li>
        <li><strong>Trip Duration:</strong> ${bookingData.tripDuration}</li>
        <li><strong>Arrival:</strong> ${bookingData.arrivalDate}</li>
        <li><strong>Departure:</strong> ${bookingData.departureDate}</li>
        <li><strong>Adults:</strong> ${bookingData.numOfAdults}, <strong>Children:</strong> ${bookingData.numOfChildren}</li>
        <li><strong>Hotel:</strong> ${bookingData.hotel}</li>
        <li><strong>Flight Booked:</strong> ${bookingData.hasBookedFlight ? 'Yes' : 'No'}</li>
        <li><strong>Total Price:</strong> ${bookingData.totalPrice.toFixed(0)}€</li>
      </ul>

     <p style="font-size: 15px; color:rgb(0, 0, 0);">
      If you have any questions or special requests, feel free to reply to this email or contact us at <a href="mailto:support@zaytunabosnia.com">support@zaytunabosnia.com</a>.
    </p>

     <hr style="margin: 20px 0; border: none; border-top: 1px solid #eee;" />
        <p style="font-size: 12px; color: #aaa; text-align: center;">
       We look forward to welcoming you soon!<br />
        © ${new Date().getFullYear()} Zaytuna Bosnia Travel Agency
     </p>
  </div>
</div>
      `
    });

    if (userResponse.error) {
      console.error("Failed to send confirmation to user:", userResponse.error);
    }

    pendingBookings.delete(email); // clean up

    res.send(`<h1>Booking Confirmed!</h1><p>Thank you for confirming your booking. We've sent a confirmation email to your inbox.</p>`);
  } catch (err) {
    console.error("Confirmation error:", err);
    res.status(500).send("Error confirming booking.");
  }
});

export default router;
