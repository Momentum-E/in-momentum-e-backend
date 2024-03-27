import { config as configDotenv } from "dotenv";

import User from "../models/user.js";
import Vehicle from "../models/vehicle.js";


configDotenv();

export const addVehicle = async (req, res) => {
  const { email, vehicleId, serialNumber } = req.body;

  try {
    // Find the user by email
    const user = await User.findOne({ email });

    // If user not found, return error
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Check if the vehicle is already added to the user's vehicles array
    const existingVehicle = user.vehicles.find(
      (vehicle) =>
        vehicle.VEHICLE_ID === vehicleId &&
        vehicle.IOT_DEVICE_DETAILS.SERIAL_NUMBER === serialNumber
    );
    if (existingVehicle) {
      return res.status(400).json({
        error: "Vehicle already added to the user's vehicles",
      });
    }

    // Find the vehicle by ID and serial number
    const vehicle = await Vehicle.findOne({
      VEHICLE_ID: vehicleId,
      "IOT_DEVICE_DETAILS.SERIAL_NUMBER": serialNumber,
    });

    // If vehicle not found, return error
    if (!vehicle) {
      return res.status(404).json({ error: "Vehicle not found" });
    }

    // Get current date
    const currentDate = new Date();
    const formattedDate = currentDate.toISOString();

    // Update the connected date of the vehicle
    vehicle.Vehicle_Info.Connected_On = formattedDate;

    // Add the vehicle to the user's vehicles array
    user.vehicles.push(vehicle);

    // Save the updated user
    await user.save();

    return res
      .status(200)
      .json({ message: "Vehicle added successfully", user });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const getVehicle = async (req, res) => {
  const { email } = req.body;

  try {
    // Find the user by email
    const user = await User.findOne({ email });

    // If user not found, return error
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Return the user's vehicles
    return res.status(200).json({ vehicles: user.vehicles });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const deleteVehicle = async (req, res) => {
  const { email, vehicleId, serialNumber } = req.body;

  try {
    // Find the user by email
    const user = await User.findOne({ email });

    // If user not found, return error
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Find the index of the vehicle in the user's vehicles array
    const vehicleIndex = user.vehicles.findIndex(
      (vehicle) =>
        vehicle.VEHICLE_ID === vehicleId &&
        vehicle.IOT_DEVICE_DETAILS.SERIAL_NUMBER === serialNumber
    );

    // If the vehicle is not found in the user's vehicles array
    if (vehicleIndex === -1) {
      return res
        .status(404)
        .json({ error: "Vehicle not found in the user's vehicles" });
    }

    // Remove the vehicle from the user's vehicles array
    user.vehicles.splice(vehicleIndex, 1);

    // Save the updated user data to the database
    await user.save();

    return res
      .status(200)
      .json({ message: "Vehicle deleted successfully", user });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const uploadData = (req, res) => {
  console.log(req.body, req.file);
  res.json({ message: "upload hit" });
};
