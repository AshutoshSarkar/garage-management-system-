// /controllers/otpController.js
import { sendOtp, verifyOtp } from '../services/otpService.js';

const handleSendOtp = async (req, res) => {
  try {
    const { phoneNumber } = req.body;
    const verificationId = await sendOtp(phoneNumber);
    res.status(200).json({ verificationId });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const handleVerifyOtp = async (req, res) => {
  try {
    const { phoneNumber, otp } = req.body;
    const customToken = await verifyOtp(phoneNumber, otp);
    res.status(200).json({ customToken });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export { handleSendOtp, handleVerifyOtp };
