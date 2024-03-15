import express from "express";
import multer from "multer";

import authenticateToken from "../middlewares/authenticateToken.js";
import { addVehicle, deleteVehicle, getVehicle, uploadData } from "../controllers/userVehicleController.js";

const router = express.Router();
const upload = multer();

// Route to add a vehicle to a user's vehicle array
router.post("/addVehicle", authenticateToken, addVehicle);

router.post("/get-vehicles", authenticateToken, getVehicle);

router.delete("/deleteVehicle", authenticateToken, deleteVehicle);

router.post("/upload-data", authenticateToken, upload.single('csvFile'), uploadData);

export default router;
