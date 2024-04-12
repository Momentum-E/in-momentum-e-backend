import { config as configDotenv } from "dotenv";

import User from "../models/user.js";
import Vehicle from "../models/vehicle.js";
// import Battery from "../models/battery.js";

configDotenv();

export const addBattery = async (req, res) => {
  const { email, batteryId } = req.body;

  try {
    // Find the user by email
    const user = await User.findOne({ email });

    // If user not found, return error
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Check if the battery already exists in user's batteries array
    const existingBattery = user.batteries.find((battery) =>
      battery.equals(batteryId)
    );

    if (existingBattery) {
      return res
        .status(400)
        .json({ message: "Battery already exists in user's batteries" });
    }

    // Find battery by ID
    const battery = await Battery.findOne({ vehicleModel: batteryId });
    if (!battery) {
      return res.status(404).json({ message: "Battery not found" });
    }

    // Add battery to user's batteries array
    user.batteries.push(battery);

    // Save user with updated batteries array
    await user.save();

    res.status(200).json({ message: "Battery added to user's batteries" });
  } catch {
    console.error("Error adding battery to user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getBattery = async (req, res) => {
  try {
    // const userId = req.params.userId;
    const { email } = req.body;

    // Find user by ID
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(user.batteries);
  } catch (error) {
    console.error("Error getting user's batteries:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const deleteBattery = async (req, res) => {
  try {
    const { email, batteryId } = req.body;

    // Find user by ID
    const user = await User.findOne({email});
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Check if the battery exists in user's batteries array
    const existingBatteryIndex = user.batteries.findIndex(
      (battery) => battery.vehicleModel === batteryId
    );

    if (existingBatteryIndex === -1) {
      return res
        .status(404)
        .json({ message: "Battery not found in user's batteries" });
    }

    // Remove battery from user's batteries array
    user.batteries.splice(existingBatteryIndex, 1);

    // Save user with updated batteries array
    await user.save();

    res.status(200).json({ message: "Battery deleted from user's batteries" });
  } catch (error) {
    console.error("Error deleting battery from user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
