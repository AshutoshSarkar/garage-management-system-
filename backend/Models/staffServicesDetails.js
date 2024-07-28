import mongoose from 'mongoose';

const staffServicesDetailsSchema = new mongoose.Schema({
  staffProfile: { type: String, required: true },
  staffSalary: { type: Number, required: true },
  experience: { type: Number, required: true },
  managerMobileNo: { type: String, required: true },
  ownerMobileNo: { type: String, required: true },
  additionalWorkshopNumber: { type: String, required: false },
});

const StaffServicesDetails = mongoose.model('StaffServicesDetails', staffServicesDetailsSchema);
export default StaffServicesDetails;
