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

router.post(
  "/upload/profile-picture",
  authenticateToken,
  upload.single("image"),
  (req, res) => {
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

// router.post("/profile-picture", authenticateToken, (req, res) => {
router.post("/profile-picture",authenticateToken, (req, res) => {
  const email = req.body.email;
  // console.log(req.body);
  const user = findUserByEmail(email);
  // console.log(user.profilePictureUrl);
  if (!user || !user.profilePictureUrl) {
    return res.status(404).json({ error: "Profile picture not found" });
  }

  const imagePath = user.profilePictureUrl;

  const absoluteImagePath = path.join(__dirname,"..","uploads","..",imagePath);

  fs.readFile(absoluteImagePath, (err, data) => {
    if (err) {
      // console.log(err);
      return res.status(500).json({ error: err.message });
    }
    console.log(data);
    res.writeHead(200, { "Content-Type": "image/jpeg" });
    res.end(data);
  });
});

export default router;