// /models/BusinessDetails.js
import mongoose from 'mongoose';

const BusinessDetailsSchema = new mongoose.Schema({
  garageName: { type: String, required: true },
  openingDate: { type: Date, required: true },
  totalStaff: { type: Number, required: true },
  mobileNumber: { type: String, required: true },
  gstNumber: { type: String, required: true },
  address: { type: String, required: true },
  photos: { type: [String], required: true },
});

export default mongoose.model("BusinessDetails", BusinessDetailsSchema);
