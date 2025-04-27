import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import nodemailer from "nodemailer";
import rateLimit from "express-rate-limit";


dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

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
    includeTravelGuide: { type: Boolean, required: true },
    hasBookedFlight: { type: Boolean, required: true },
    selectedPackage: { type: String, required: true },
    hotel: { type: String, required: true },
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
    return res.status(400).json({ error: "All fields are required." });
  }

  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER,
    subject: "Contact Form",
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
    return res.status(400).json({ error: "All fields are required." });
  }

  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER,
    subject: "Review",
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
    res.status(500).json({ error: "Failed to send review." });
  }
});


app.post("/booking", async (req, res) => {
  try {
    const bookingData = req.body;

    const requiredFields = [
      "name",
      "email",
      "numOfAdults",
      "numOfChildren",
      "travelPackage",
      "tripDuration",
      "arrivalDate",
      "departureDate",
      "phoneNumber",
      "includeTravelGuide",
      "hasBookedFlight",
      "selectedPackage",
      "hotel",
    ];

    for (const field of requiredFields) {
      if (!bookingData[field]) {
        return res.status(400).json({ error: `Missing field: ${field}` });
      }
    }

    const newBooking = new Booking(bookingData);
    await newBooking.save();

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
          <h2 style="color: #3498db;">New Booking Received</h2>
          <div class="booking-details">
            <p><strong>Package:</strong> ${bookingData.travelPackage}</p>
            <p><strong>Name:</strong> ${bookingData.name}</p>
            <p><strong>Email:</strong> ${bookingData.email}</p>
            <p><strong>Phone:</strong> ${bookingData.phoneNumber}</p>
            <p><strong>Adults:</strong> ${bookingData.numOfAdults}</p>
            <p><strong>Children:</strong> ${bookingData.numOfChildren}</p>
            <p><strong>Arrival Date:</strong> ${bookingData.arrivalDate}</p>
            <p><strong>Departure Date:</strong> ${bookingData.departureDate}</p>
            <p><strong>Trip Duration:</strong> ${bookingData.tripDuration}</p>
            <p><strong>Hotel:</strong> ${bookingData.hotel}</p>
            <p><strong>Selected Package:</strong> ${bookingData.selectedPackage}</p>
            <p><strong>Guide Included:</strong> ${bookingData.includeTravelGuide ? 'Yes' : 'No'}</p>
            <p><strong>Flight Booked:</strong> ${bookingData.hasBookedFlight ? 'Yes' : 'No'}</p>
            <p><strong>Special Requests:</strong> ${bookingData.specialRequests || 'None'}</p>
          </div>
        </body>
      </html>
    `;

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: "New Booking",
      html: emailHtmlContent,
    };

    await transporter.sendMail(mailOptions);

    return res.status(201).json({ message: "Booking saved and email sent!" });
  } catch (error) {
    console.error("Booking error:", error);
    return res.status(500).json({ error: "Failed to process booking" });
  }
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
