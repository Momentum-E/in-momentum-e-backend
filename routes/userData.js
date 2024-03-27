import express from "express";
import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

import { config as configDotenv } from "dotenv";

import User from "../models/user.js";

import fs from "fs";
import authenticateToken from "../middlewares/authenticateToken.js";
import {
  deleteUserFile,
  getSignedURL,
  getSignedUplaodURL,
} from "../controllers/userDataController.js";

const router = express.Router();
configDotenv();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

router.post("/upload/profile-picture", authenticateToken, upload.single("image"), async (req, res) => {
    try {
      if (!req.file) {
        return res.status(400).json({ error: "No file uploaded" });
      }

      const email = req.body.email;

      // Find the user by email
      const user = await User.findOne({ email });

      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }

      // Update the user's profile picture URL
      user.profilePictureUrl = `/uploads/${req.file.filename}`;

      // Save the updated user to the database
      await user.save();

      res.json({ imageUrl: user.profilePictureUrl });
    } catch (error) {
      console.error("Error uploading profile picture:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  }
);

router.post("/profile-picture", authenticateToken, async (req, res) => {
  const email = req.body.email;
  // console.log(req.body);
  // const user = findUserByEmail(email);
  const user = await User.findOne({ email });
  // console.log(user.profilePictureUrl);
  if (!user || !user.profilePictureUrl) {
    return res.status(404).json({ error: "Profile picture not found" });
  }

  const imagePath = user.profilePictureUrl;

  const absoluteImagePath = path.join(
    __dirname,
    "..",
    "uploads",
    "..",
    imagePath
  );

  fs.readFile(absoluteImagePath, (err, data) => {
    if (err) {
      // console.log(err);
      return res.status(500).json({ error: err.message });
    }
    // console.log(data);
    res.writeHead(200, { "Content-Type": "image/jpeg" });
    res.end(data);
  });
});

router.delete("/remove-profile-picture", authenticateToken, async (req, res) => {
  const email = req.body.email;

  // Check if email is provided in the request body
  if (!email) {
    return res
      .status(400)
      .json({ error: "Email is required in the request body" });
  }

  // Find the user by email
  // const user = findUserByEmail(email);
  const user = await User.findOne({ email });

  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }

  // Check if the user has a profile picture
  if (!user.profilePictureUrl) {
    return res.status(404).json({ error: "Profile picture not found" });
  }

  const imagePath = path.join(
    __dirname,
    "..",
    "uploads",
    "..",
    user.profilePictureUrl
  );
  // console.log(imagePath);

  // Remove the profile picture URL from the user object
  user.profilePictureUrl = "";

  // Save the updated user data to the database
  await user.save();

  // Remove the image file from the upload folder
  fs.unlink(imagePath, (err) => {
    if (err) {
      console.error("Error deleting profile picture:", err);
      return res.status(500).json({ error: "Error deleting profile picture" });
    }
    // console.log("Profile picture deleted successfully");
    res.json({ message: "Profile picture deleted successfully" });
  });
});

router.put("/update-user-details", authenticateToken, async (req, res) => {
  const { email, newName } = req.body;

  try {
    // Check if email and newName are provided in the request body
    if (!email || !newName) {
      return res.status(400).json({ error: "Email and newName are required in the request body" });
    }

    // Find the user by email
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Update the user's name
    user.name = newName;

    // Save the updated user data to the database
    await user.save();

    res.json({ message: "User details updated successfully" });
  } catch (error) {
    console.error("Error updating user details:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.get("/presignedURL", authenticateToken, getSignedURL);

router.post("/presignedUploadUrl", authenticateToken, getSignedUplaodURL);

router.delete("/dataFile", authenticateToken, deleteUserFile);

export default router;
