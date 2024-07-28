import express from 'express';
import workshopController from '../Controllers/workshopDetailsController.js';

const router = express.Router();
router.post('/workshop-details', workshopController);

export default router;
