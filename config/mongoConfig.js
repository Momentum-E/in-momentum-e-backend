import mongoose from "mongoose";
import Vehicle from "../models/vehicle.js";
import { otherDemoVehicles } from "../utils/demoVehcileData.js";

const connect = async (uri) => {
  try {
    await mongoose.connect(uri);
    console.log("MongoDB connected");

    const vehicleCount = await Vehicle.countDocuments();
    if (vehicleCount === 0) {
      await Vehicle.insertMany(otherDemoVehicles);
      console.log("Vehicles inserted");
    } else {
      console.log("Vehicles already exist, no insertion needed");
    }
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
};

export default connect;
