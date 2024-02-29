import { config as configDotenv } from "dotenv";

import users from "../DB/userDB.js";
import vehicles from "../DB/vehicleDB.js";

import fs from "fs";

function saveUsersToFile() {
  fs.writeFile(
    "./DB/userDB.js",
    `const users = ${JSON.stringify(users, null, 2)}; export default users;`,
    (err) => {
      if (err) {
        console.error("Error writing users to file:", err);
      } else {
        console.log("Users saved to file successfully");
      }
    }
  );
}

configDotenv();

function findUserByEmail(email) {
  return users.find((user) => user.email === email);
}

export const addVehicle = (req, res) => {
  const { email, vehicleId, serialNumber } = req.body;

  // Find the user
  const user = findUserByEmail(email);
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
    return res
      .status(400)
      .json({ error: "Vehicle already added to the user's vehicles" });
  }

  // Find the vehicle
  const vehicle = vehicles.find(
    (vehicle) =>
      vehicle.VEHICLE_ID === vehicleId &&
      vehicle.IOT_DEVICE_DETAILS.SERIAL_NUMBER === serialNumber
  );
  if (!vehicle) {
    return res.status(404).json({ error: "Vehicle not found" });
  }

  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  // Format the date as YYYY-MM-DD
  const formattedDate = `${day < 10 ? "0" : ""}${day}-${
    month < 10 ? "0" : ""
  }${month}-${year}`;
  console.log(formattedDate);
  vehicle.Vehicle_Info.Connected_On = formattedDate.toString();
  // Add the vehicle to the user's vehicles array
  user.vehicles.push(vehicle);
  saveUsersToFile();

  return res.status(200).json({ message: "Vehicle added successfully", user });
};

export const getVehicle = (req, res) => {
  const { email } = req.body;

  // Find the user
  const user = findUserByEmail(email);
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  // Return the user's vehicles
  return res.status(200).json({ vehicles: user.vehicles });
};

export const deleteVehicle = (req, res) => {
  const { email, vehicleId, serialNumber } = req.body;

  // Find the user
  const userIndex = users.findIndex((user) => user.email === email);
  if (userIndex === -1) {
    return res.status(404).json({ error: "User not found" });
  }

  const user = users[userIndex];

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

  // Save the updated user data to file
  saveUsersToFile();

  return res
    .status(200)
    .json({ message: "Vehicle deleted successfully", user });
};
