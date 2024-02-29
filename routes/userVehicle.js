import express from "express";

import authenticateToken from "../middlewares/authenticateToken.js";
import { addVehicle, deleteVehicle, getVehicle } from "../controllers/userVehicleController.js";

const router = express.Router();

// Route to add a vehicle to a user's vehicle array
router.post("/addVehicle", authenticateToken, addVehicle);

router.post("/get-vehicles", authenticateToken, getVehicle);

router.delete("/deleteVehicle", authenticateToken, deleteVehicle);

export default router;
