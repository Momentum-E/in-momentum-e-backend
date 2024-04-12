// Import Mongoose
import mongoose from "mongoose";
// import Battery from "../models/battery.js";

// Define the Vehicle schema
const vehicleSchema = new mongoose.Schema({
  VEHICLE_ID: String,
  ODOMETER_START_READING: Number,
  SOC_START: Number,
  SOC_END: Number,
  AVG_VELOCITY: Number,
  AC_ON_DURATION: Number,
  CHARGE_TYPE: String,
  DISTANCE: Number,
  AMBIENT_TEMPERATURE: Number,
  BATTERY_TEMPERATURE: Number,
  VEHICLE_NUMBER: String,
  IOT_DEVICE_DETAILS: {
    SERIAL_NUMBER: String,
    ID: String,
  },
  LOCATION: String,
  CHARGING_STATUS: String,
  Vehicle_Info: {
    Odometer: String,
    Vehicle_Model: String,
    Model_Year: String,
    VIN: String,
    Battery_Capacity: String,
    Charging_Pattern: {
      Total_Energy_Consumed: String,
      Average_SOC: String,
      Connector_Type: String,
      Total_Charging_Sessions: Number,
      Average_Charging_Rate: String,
    },
    Usage: {
      Avg_Daily_km_Driven: String,
      Temperature_High_Low: String,
      SOC_Range: String,
      Range_Observed_Max_Min: String,
      Real_Range_Observed: String,
      Observed_vs_EPA_WLTP_provided: String,
    },
    Battery_Health: {
      SoH: String,
      Estimated_Degradation: String,
      Battery_Chemistry: String,
      Monthly_SOH_Data: [Number], // Assuming it's an array of numbers
    },
    RUL: String,
    EOL: String,
    Connected_On: Date,
    Data_Points_Collected: String,
    Average_Miles_Driven: [Number], // Assuming it's an array of numbers
    Battery: {
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
      temperature_High_Low: String,
      estimatedPowerOutput: String,
      estimatedCapacityOutput: String,
      speed_Max_Average: String,
      avgDailyKmDriven: Number,
      estimatedDailyEnergyOutput: String
    },
  },
});

// Create the Vehicle model
const Vehicle = mongoose.model("Vehicle", vehicleSchema);

// Export the model
export default Vehicle;
