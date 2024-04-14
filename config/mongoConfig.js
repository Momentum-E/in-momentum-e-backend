import mongoose from "mongoose";
// import Vehicle from "../models/vehicle.js";
// import {otherDemoVehicles} from "../utils/demoVehcileData.js"


const connect = async (uri) => {
  try {
    await mongoose.connect(uri);
    console.log("MongoDB connected");
    // await Vehicle.insertMany(otherDemoVehicles);
    // console.log("vehicles inserted");
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
};

export default connect;
