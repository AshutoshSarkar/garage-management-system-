import express from 'express';
import {config} from 'dotenv';
import otpRoutes from './Routes/otpRoutes.js';
// import { initializeApp, cert } from 'firebase-admin/app';
import businessRoutes from './Routes/businessRoutes.js';
import staffRoutes from './Routes/staffServicesRoutes.js';
import workshopRoutes from './Routes/workshopRoutes.js';
import connectDB from './services/database.js';
import cors from 'cors';

config();



const app = express();
app.use(cors());
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/business', businessRoutes);
app.use('/api/staff', staffRoutes);
app.use('/api/workshop', workshopRoutes);
app.use("/api/otp", otpRoutes);

app.get('/', (req, res) => {
  res.send('API is running');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

connectDB();