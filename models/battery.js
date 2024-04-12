import mongoose from "mongoose";

const batterySchema = new mongoose.Schema({
  odometer: String,
  batteryCapacity: String,
  vehicleModel: String,
  modelYear: String,
  formFactor: String,
  averageSOC: Number,
  totalChargingSessions: String,
  averageChargingRate: String,
  chargingRate: String,
  SoH: { type: String, default: null },
  estimatedDegradation: { type: String, default: null },
  batteryChemistry: String,
  SOCRange: String,
  temperature_HighLow: String,
  estimatedPowerOutput: String,
  estimatedCapacityOutput: String,
  speed_MaxAverage: String,
  avgDailyKmDriven: Number,
});

const Battery = mongoose.model("Battery", batterySchema);

export default Battery;
