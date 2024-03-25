// Import Mongoose
import mongoose from "mongoose";
import vehicle from "./vehicle";

// Define the User schema
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    vehicles: [vehicle.Schema], // Array of vehicles
    profilePictureUrl: String,
});

// Create the User model
const User = mongoose.model('User', userSchema);

// Export the model
export default User;