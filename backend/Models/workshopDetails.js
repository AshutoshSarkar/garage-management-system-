import mongoose from 'mongoose';


const workshopDetailsSchema = new mongoose.Schema({
  mechanicType: { type: String, enum: ['Electrical', 'Mechanical', 'Dent & Paint', 'Washing'], required: true },
  managerMobileNo: { type: String, required: true },
  workshopNumber: { type: String, required: true },
});

const WorkshopDetails = mongoose.model('WorkshopDetails', workshopDetailsSchema);

export default WorkshopDetails;
