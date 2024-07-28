import BusinessDetails from '../models/BusinessDetails.js';
import uploadPhotos from '../services/uploadPhotos.js';

const createBusinessDetails = async (req, res) => {
  try {
    const { garageName, openingDate, totalStaff, mobileNo, gstNo, address } = req.body;
    const photos = req.files;

    // Upload photos to Firebase and get URLs
    const photoUrls = await uploadPhotos(photos);

    // Create a new BusinessDetails document
    const newBusinessDetails = new BusinessDetails({
      garageName,
      openingDate,
      totalStaff,
      mobileNumber: mobileNo,
      gstNumber: gstNo,
      address,
      photos: photoUrls,
    });

    await newBusinessDetails.save();
    res.status(200).json({ message: 'Business details saved successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export default createBusinessDetails;
