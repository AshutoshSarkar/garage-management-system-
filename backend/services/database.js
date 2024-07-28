import mongoose from "mongoose";
import { config } from "dotenv";
config();
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI).then(() => {
      console.log("Database connected");
    });
  } catch (error) {
    console.log("Error connecting to database");
    console.error(error);
  }
};

export default connect;