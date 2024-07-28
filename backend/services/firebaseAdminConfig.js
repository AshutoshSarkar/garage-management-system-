// /services/firebaseAdminConfig.js
import admin from 'firebase-admin';
import { config } from 'dotenv';

config();
admin.initializeApp({
  credential: admin.credential.cert(process.env.GOOGLE_SECRET_KEY),
  databaseURL: "https://garage-9097a.firebaseio.com",
});

export default admin;