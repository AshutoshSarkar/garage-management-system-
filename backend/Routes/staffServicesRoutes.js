import express from 'express';
import staffServicesController from '../Controllers/staffServicesDetailsController.js';

const router = express.Router();
router.post('/staff-services-details', staffServicesController);

export default router;
