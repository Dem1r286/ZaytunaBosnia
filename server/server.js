import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";

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

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});



// app.post("/send-email", async (req, res) => {
//   try {
//     const { email } = req.body;

//     if (!email) {
//       return res.status(400).json({ error: "Email field is required!" });
//     }
//   } catch (error) {
//     return res
//       .status(500)
//       .json({ error: "An error occurred while sending the email." });
//   }
// });

// Nodemailer Transporter for Gmail
// const transporter = nodemailer.createTransport({
//   host: "mail.privateemail.com",
//   port: 465,
//   secure: true,
//   auth: {
//     user: process.env.EMAIL_USER,
//     pass: process.env.EMAIL_PASS,
//   },
// });

// // API Route to Send Email
// app.post("/send-message", async (req, res) => {
//   try {
//     const { name, email, message } = req.body;

//     if (!name || !email || !message) {
//       return res.status(400).json({ error: "All fields are required" });
//     }

//     const mailOptions = {
//       from: process.env.EMAIL_USER,
//       to: process.env.EMAIL_USER,
//       replyTo: email,
//       subject: "New Contact Form Submission",
//       text: `You have received a new message:\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
//     };

//     await transporter.sendMail(mailOptions);
//     res.status(200).json({ success: "Email sent successfully!" });
//   } catch (error) {
//     console.error("Error sending email:", error);
//     res.status(500).json({ error: error.message || "Failed to send email" });
//   }
// });
