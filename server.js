import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import { config as configDotenv } from "dotenv";

import userAuth from "./routes/userAuth.js";
import addVehicle from "./routes/userVehicle.js";

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

const PORT = process.env.PORT || 8080;

app.use("/auth", userAuth);
app.use("/user", addVehicle);

app.get("/check", (req, res) => {
  return res.status(200).json({ message: "API working" });
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
