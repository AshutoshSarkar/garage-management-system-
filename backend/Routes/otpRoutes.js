// /routes/otpRoutes.js
import express from 'express';
import { handleSendOtp, handleVerifyOtp } from '../Controllers/otpController.js';

const router = express.Router();

router.post("/send-otp", handleSendOtp);
router.post("/verify-otp", handleVerifyOtp);

export default router;
