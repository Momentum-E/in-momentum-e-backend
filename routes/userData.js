import express from "express";
import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

import { config as configDotenv } from "dotenv";

import users from "../DB/userDB.js";
import vehicles from "../DB/vehicleDB.js";

import fs from "fs";
import authenticateToken from "../middlewares/authenticateToken.js";

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

const router = express.Router();
configDotenv();

function findUserByEmail(email) {
  return users.find((user) => user.email === email);
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

//pload DP
router.post("/upload/profile-picture", authenticateToken, upload.single("image"), (req, res) => {
    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }
    const email = req.body.email;

    // Find the user by email
    const user = findUserByEmail(email);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Update the user's profile picture URL
    user.profilePictureUrl = `/uploads/${req.file.filename}`;

    // Save the updated users data to file
    saveUsersToFile();

    res.json({ imageUrl: user.profilePictureUrl });
  }
);

//fetch DP
router.post("/profile-picture", authenticateToken, (req, res) => {
  const email = req.body.email;
  // console.log(req.body);
  const user = findUserByEmail(email);
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

//Delete DP
router.delete("/remove-profile-picture", authenticateToken, (req, res) => {
  const email = req.body.email;

  // Check if email is provided in the request body
  if (!email) {
    return res
      .status(400)
      .json({ error: "Email is required in the request body" });
  }

  // Find the user by email
  const user = findUserByEmail(email);
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
  delete user.profilePictureUrl;

  // Save the updated user data to file
  saveUsersToFile();

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

router.put("/update-user-details", authenticateToken, (req, res) => {
  const { email, newName } = req.body;
  // console.log(email, newName);
  // Check if email and newName are provided in the request body
  if (!email || !newName) {
    return res
      .status(400)
      .json({ error: "Email and newName are required in the request body" });
  }

  // Find the user by email
  const user = findUserByEmail(email);
  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }

  // Update the user's name
  user.name = newName;

  // Save the updated user data to file
  saveUsersToFile();

  res.json({ message: "User details updated successfully" });
});

export default router;
