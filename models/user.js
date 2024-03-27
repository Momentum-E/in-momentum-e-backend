// Import Mongoose
import mongoose from "mongoose";
import Vehicle from "./vehicle.js";

// Define the User schema
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  vehicles: [Vehicle.schema], // Array of vehicles
  profilePictureUrl: String,
});

// Create the User model
const User = mongoose.model("User", userSchema);

// Export the model
export default User;
