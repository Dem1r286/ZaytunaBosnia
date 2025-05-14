import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import nodemailer from "nodemailer";
import rateLimit from "express-rate-limit";
import crypto from 'crypto';
import { Resend } from 'resend';
const resend = new Resend(process.env.RESEND_API_KEY);


const app = express();
const PORT = process.env.PORT || 5000;
const pendingBookings = new Map();


// Middleware
app.use(cors({ origin: "*" }));
app.use(bodyParser.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((error) => console.error("Error connecting to MongoDB:", error));

const emailSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
  },
  { timestamps: true }
);

// const bookingLimiter = rateLimit({
//   windowMs: 60 * 60 * 1000, 
//   max: 5,
//   message: {
//     error: "Too many bookings from this IP, please try again after an hour.",
//   },
//   standardHeaders: true,
//   legacyHeaders: false,
// });

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  tls: {
    rejectUnauthorized: false,
  },
});


const bookingSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    numOfAdults: { type: String },
    numOfChildren: { type: String, required: true },
    travelPackage: { type: String, required: true },
    tripDuration: { type: String, required: true },
    arrivalDate: { type: String, required: true },
    departureDate: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    specialRequests: { type: String },
    hasBookedFlight: { type: Boolean, required: true },
    selectedPackage: { type: String, required: true },
    hotel: { type: String, required: true },
    childrenAges: { type: String, required: true },
    totalPrice: { type: Number }
  },
  { timestamps: true }
);

const Booking = mongoose.model("Booking", bookingSchema);
const Email = mongoose.model("Email", emailSchema);

app.post("/subscribe", async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ error: "Email is required!" });
    }

    const existingEmail = await Email.findOne({ email });
    if (existingEmail) {
      return res.status(400).json({ error: "Email already subscribed!" });
    }

    const newEmail = new Email({ email });
    await newEmail.save();

    return res.status(201).json({ message: "Email subscribed successfully!" });
  } catch (error) {
    console.error("Error saving email:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});


app.post("/send-email", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER,
    subject: "New Message",
    html: `
      <h2>Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong><br/>${message}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(201).json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending contact email:", error);
    res.status(500).json({ error: "Failed to send email." });
  }
});

app.post("/leave-review", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER,
    subject: "New Review",
    html: `
      <h2>Review</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong><br/>${message}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(201).json({ message: "Review sent successfully!" });
  } catch (error) {
    console.error("Error sending review:", error);
    res.status(500).json({ error: "Failed to send review" });
  }
});

app.post("/confirmation-email", async (req, res) => {
  const bookingData = req.body;

   if (
    !bookingData.name ||
    !bookingData.email ||
    !bookingData.phoneNumber ||
    !bookingData.numOfAdults ||
    bookingData.numOfAdults < 1 ||
    bookingData.numOfChildren === undefined || // to allow 0
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


app.get("/confirm", async (req, res) => {
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


app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});