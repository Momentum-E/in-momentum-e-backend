import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import { config as configDotenv } from "dotenv";
import path from "path";
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

import userAuth from "./routes/userAuth.js";
import addVehicle from "./routes/userVehicle.js";
import userData from "./routes/userData.js";

// Load environment variables from .env file
configDotenv();

const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true, // Enable credentials (cookies, HTTP authentication) for cross-origin requests
};

const app = express();
app.use(cors(corsOptions));
app.use(cookieParser());
app.use(express.json());
app.use(express.static(path.join(__dirname, "uploads")));

const PORT = process.env.PORT || 8080;

app.use("/auth", userAuth);
app.use("/user", addVehicle);
app.use("/user-data/", userData);

app.get("/check", (req, res) => {
  return res.status(200).json({ message: "API working" });
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
