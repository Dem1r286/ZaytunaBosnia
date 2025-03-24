import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import nodemailer from "nodemailer";
import mongoose from "mongoose";

const PORT = process.env.PORT || 5000;

dotenv.config();
const app = express();
app.use(cors());
app.use(bodyParser.json());

mongoose.connect("mongodb://localhost:27017/test", {
})
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });



app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
