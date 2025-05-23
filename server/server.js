import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import subscribeRoute from "./routes/subscribe.js";
import reviewRoute from "./routes/review.js";
import contactRoute from "./routes/contact.js";
import confirmRequestRoute from './routes/confirmRequest.js';
import confirmRoute from './routes/confirm.js';


dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({ origin: "*" }));
app.use(bodyParser.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((error) => console.error("Error connecting to MongoDB:", error));

app.use('/subscribe', subscribeRoute);
app.use('/leave-review', reviewRoute);
app.use('/contact', contactRoute);
app.use('/confirm-request', confirmRequestRoute);
app.use('/confirm', confirmRoute);

app.listen(PORT, () => {
  console.log("Server running on http://localhost:5000");
});