import express from "express";
import authenticateToken from "../middlewares/authenticateToken.js";

import { addBattery, getBattery, deleteBattery } from "../controllers/userBatteryController.js";

const router = express.Router();

router.post("/add-battery", authenticateToken, addBattery);

router.post("/get-battery", authenticateToken, getBattery);

router.delete("/delete-battery", authenticateToken, deleteBattery);

export default router;