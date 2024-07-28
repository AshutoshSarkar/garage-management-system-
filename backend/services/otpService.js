// /services/otpService.js
import admin from './firebaseAdminConfig.js';

const sendOtp = async (phoneNumber) => {
  const verificationId = await admin.auth().createCustomToken(phoneNumber);
  // Send OTP to the user's phone number using your preferred SMS provider
  // Example using Twilio or any other provider
  // await smsProvider.sendSms(phoneNumber, `Your verification code is ${otp}`);
  return verificationId;
};

const verifyOtp = async (phoneNumber, otp) => {
  // Verify the OTP received from the user
  // Example using Twilio or any other provider
  // const isValidOtp = await smsProvider.verifyOtp(phoneNumber, otp);
  const isValidOtp = true; // Placeholder for actual OTP verification logic
  if (isValidOtp) {
    const customToken = await admin.auth().createCustomToken(phoneNumber);
    return customToken;
  } else {
    throw new Error("Invalid OTP");
  }
};

export { sendOtp, verifyOtp };
