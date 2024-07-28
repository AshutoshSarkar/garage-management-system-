import StaffServicesDetails from "../Models/staffServicesDetails.js";

const createStaffServicesDetails = async (req, res) => {
  try {
    const staffServicesDetails = new StaffServicesDetails(req.body);
    await staffServicesDetails.save();
    res.status(201).json(staffServicesDetails);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export default createStaffServicesDetails;
