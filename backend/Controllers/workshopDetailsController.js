import WorkshopDetails from "../Models/workshopDetails.js";

const createWorkshopDetails = async (req, res) => {
  try {
    const workshopDetails = new WorkshopDetails(req.body);
    await workshopDetails.save();
    res.status(201).json(workshopDetails);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export default createWorkshopDetails;