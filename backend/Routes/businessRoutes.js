import express from 'express';
import multer from 'multer';
import createBusinessDetails from '../controllers/businessDetailsController.js';

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() }); // Use memory storage for multer

router.post('/businessdetails', upload.array('photos', 3), createBusinessDetails);

export default router;
