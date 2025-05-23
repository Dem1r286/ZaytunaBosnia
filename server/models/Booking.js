import mongoose from 'mongoose';

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


export default mongoose.model('Booking', bookingSchema);
