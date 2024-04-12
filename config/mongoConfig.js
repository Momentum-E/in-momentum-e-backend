import mongoose from "mongoose";
import Vehicle from "../models/vehicle.js";

const vehicle = [
  // {
  //   VEHICLE_ID: "EV001",
  //   ODOMETER_START_READING: 5000,
  //   SOC_START: 47,
  //   SOC_END: 70,
  //   AVG_VELOCITY: 40,
  //   AC_ON_DURATION: 45,
  //   CHARGE_TYPE: "Level 1",
  //   DISTANCE: 30,
  //   AMBIENT_TEMPERATURE: 25,
  //   BATTERY_TEMPERATURE: 28,
  //   VEHICLE_NUMBER: "CU01",
  //   LOCATION: "Delhi, India",
  //   CHARGING_STATUS: "Charging",
  //   IOT_DEVICE_DETAILS: {
  //     SERIAL_NUMBER: "123456789",
  //     ID: "IOT006",
  //   },
  //   Vehicle_Info: {
  //     Charging_Pattern: {
  //       Total_Energy_Consumed: "1.83 kWh",
  //       Average_SOC: "80%",
  //       Connector_Type: "Type 1",
  //       Total_Charging_Sessions: 5,
  //       Average_Charging_Rate: "0.95 kW",
  //     },
  //     Usage: {
  //       Avg_Daily_km_Driven: "87 km",
  //       Temperature_High_Low: "33°C / 22°C",
  //       SOC_Range: "20% - 85%",
  //       Range_Observed_Max_Min: "110 / 85",
  //       Real_Range_Observed: "98 km",
  //       Observed_vs_EPA_WLTP_provided: "98 km / 145 km",
  //     },
  //     Battery_Health: {
  //       SoH: "98.95 %",
  //       Estimated_Degradation: "1.05 %",
  //       Battery_Chemistry: "Li-ion",
  //       Monthly_SOH_Data: [
  //         95.7,
  //         95.7,
  //         95.7,
  //         95.7,
  //         null,
  //         null,
  //         null,
  //         null,
  //         null,
  //         null,
  //         null,
  //         null,
  //       ],
  //     },
  //     Odometer: "10000 km",
  //     Vehicle_Model: "Three Wheeler",
  //     Model_Year: "2023",
  //     VIN: "ECHARGEUP1234",
  //     Battery_Capacity: "4.56 kWh",
  //     RUL: "1050 cycles",
  //     EOL: "09-09-2029",
  //     Connected_On: "2024-04-08T08:20:33.602Z",
  //     Data_Points_Collected: "3397",
  //     Average_Miles_Driven: [
  //       23.6,
  //       23.6,
  //       23.6,
  //       23.6,
  //       null,
  //       null,
  //       null,
  //       null,
  //       null,
  //       null,
  //       null,
  //       null,
  //     ],
  //     Battery: {
  //       // odometer: "Current Cycle Number = 44",
  //       odometer: "44",
  //       batteryCapacity: "5kWh",
  //       vehicleModel: "Battery ID = 1",
  //       modelYear: "Use Start Date = 2024-03-01",
  //       formFactor: "3W",
  //       averageSOC: 74.80836031792758,
  //       totalChargingSessions: "2",
  //       averageChargingRate: "Moderate",
  //       chargingRate: "12.580769230769246A",
  //       SoH: "95.7%",
  //       estimatedDegradation: "4.3%",
  //       batteryChemistry: "LFP-Batteries",
  //       SOCRange: "42%-100%",
  //       temperature_High_Low: "20.3°C/17.0°C",
  //       estimatedPowerOutput: "1.48 kWh",
  //       estimatedCapacityOutput: "96.2 Ah",
  //       speed_Max_Average: "12.1 / 30",
  //       avgDailyKmDriven: 23.6,
  //       estimatedDailyEnergyOutput: "28.4 Ah",
  //     },
  //   },
  // },
  // {
  //   VEHICLE_ID: "EV002",
  //   ODOMETER_START_READING: 5000,
  //   SOC_START: 47,
  //   SOC_END: 70,
  //   AVG_VELOCITY: 40,
  //   AC_ON_DURATION: 45,
  //   CHARGE_TYPE: "Level 1",
  //   DISTANCE: 30,
  //   AMBIENT_TEMPERATURE: 25,
  //   BATTERY_TEMPERATURE: 28,
  //   VEHICLE_NUMBER: "CU02",
  //   LOCATION: "Delhi, India",
  //   CHARGING_STATUS: "Charging",
  //   IOT_DEVICE_DETAILS: {
  //     SERIAL_NUMBER: "123456789",
  //     ID: "IOT006",
  //   },
  //   Vehicle_Info: {
  //     Charging_Pattern: {
  //       Total_Energy_Consumed: "7.46 kWh",
  //       Average_SOC: "80%",
  //       Connector_Type: "Type 1",
  //       Total_Charging_Sessions: 5,
  //       Average_Charging_Rate: "0.95 kW",
  //     },
  //     Usage: {
  //       Avg_Daily_km_Driven: "87 km",
  //       Temperature_High_Low: "33°C / 22°C",
  //       SOC_Range: "20% - 85%",
  //       Range_Observed_Max_Min: "110 / 85",
  //       Real_Range_Observed: "98 km",
  //       Observed_vs_EPA_WLTP_provided: "98 km / 145 km",
  //     },
  //     Battery_Health: {
  //       SoH: "98.95 %",
  //       Estimated_Degradation: "1.05 %",
  //       Battery_Chemistry: "Li-ion",
  //       Monthly_SOH_Data: [
  //         100,
  //         100,
  //         100,
  //         100,
  //         null,
  //         null,
  //         null,
  //         null,
  //         null,
  //         null,
  //         null,
  //         null,
  //       ],
  //     },
  //     Odometer: "10000 km",
  //     Vehicle_Model: "Three Wheeler",
  //     Model_Year: "2023",
  //     VIN: "ECHARGEUP1234",
  //     Battery_Capacity: "4.56 kWh",
  //     RUL: "1050 cycles",
  //     EOL: "09-09-2029",
  //     Connected_On: "2024-04-08T08:20:33.602Z",
  //     Data_Points_Collected: "6158",
  //     Average_Miles_Driven: [
  //       35.8,
  //       35.8,
  //       35.8,
  //       35.8,
  //       null,
  //       null,
  //       null,
  //       null,
  //       null,
  //       null,
  //       null,
  //       null,
  //     ],

  //     Battery: {
  //       // odometer: "Current Cycle Number = 64",
  //       odometer: "64",
  //       batteryCapacity: "5kWh",
  //       vehicleModel: "Battery ID = 2",
  //       modelYear: "Use Start Date = 2024-03-01",
  //       formFactor: "3W",
  //       averageSOC: 69.21321857746021,
  //       totalChargingSessions: "2",
  //       averageChargingRate: "Moderate",
  //       chargingRate: "17.449062500000004A",
  //       SoH: "100%",
  //       estimatedDegradation: "0%",
  //       batteryChemistry: "LFP-Batteries",
  //       SOCRange: "20%-99%",
  //       temperature_High_Low: "34.0°C/20.0°C",
  //       estimatedPowerOutput: "2.78 kWh",
  //       estimatedCapacityOutput: "102.2 Ah",
  //       speed_Max_Average: "12.5 / 31",
  //       avgDailyKmDriven: 35.8,
  //       estimatedDailyEnergyOutput: "54.75 Ah",
  //     },
  //   },
  // },
  // {
  //   VEHICLE_ID: "EV003",
  //   ODOMETER_START_READING: 5000,
  //   SOC_START: 47,
  //   SOC_END: 70,
  //   AVG_VELOCITY: 40,
  //   AC_ON_DURATION: 45,
  //   CHARGE_TYPE: "Level 1",
  //   DISTANCE: 30,
  //   AMBIENT_TEMPERATURE: 25,
  //   BATTERY_TEMPERATURE: 28,
  //   VEHICLE_NUMBER: "CU03",
  //   LOCATION: "Delhi, India",
  //   CHARGING_STATUS: "Charging",
  //   IOT_DEVICE_DETAILS: {
  //     SERIAL_NUMBER: "123456789",
  //     ID: "IOT006",
  //   },
  //   Vehicle_Info: {
  //     Charging_Pattern: {
  //       Total_Energy_Consumed: "6.17 kWh",
  //       Average_SOC: "80%",
  //       Connector_Type: "Type 1",
  //       Total_Charging_Sessions: 5,
  //       Average_Charging_Rate: "0.95 kW",
  //     },
  //     Usage: {
  //       Avg_Daily_km_Driven: "87 km",
  //       Temperature_High_Low: "33°C / 22°C",
  //       SOC_Range: "20% - 85%",
  //       Range_Observed_Max_Min: "110 / 85",
  //       Real_Range_Observed: "98 km",
  //       Observed_vs_EPA_WLTP_provided: "98 km / 145 km",
  //     },
  //     Battery_Health: {
  //       SoH: "98.95 %",
  //       Estimated_Degradation: "1.05 %",
  //       Battery_Chemistry: "Li-ion",
  //       Monthly_SOH_Data: [
  //         97.6,
  //         97.6,
  //         97.6,
  //         97.6,
  //         null,
  //         null,
  //         null,
  //         null,
  //         null,
  //         null,
  //         null,
  //         null,
  //       ],
  //     },
  //     Odometer: "10000 km",
  //     Vehicle_Model: "Three Wheeler",
  //     Model_Year: "2023",
  //     VIN: "ECHARGEUP1234",
  //     Battery_Capacity: "5 kWh",
  //     RUL: "1050 cycles",
  //     EOL: "09-09-2029",
  //     Connected_On: "2024-04-08T08:20:33.602Z",
  //     Data_Points_Collected: "4508",
  //     Average_Miles_Driven: [
  //       31.6,
  //       31.6,
  //       31.6,
  //       31.6,
  //       null,
  //       null,
  //       null,
  //       null,
  //       null,
  //       null,
  //       null,
  //       null,
  //     ],
  //     Battery: {
  //       // Battery_3: {
  //       // odometer: "Current Cycle Number = 93",
  //       odometer: "93",
  //       batteryCapacity: "5kWh",
  //       vehicleModel: "Battery ID = 3",
  //       modelYear: "Use Start Date = 2024-03-01",
  //       formFactor: "3W",
  //       averageSOC: 73.12947598253275,
  //       totalChargingSessions: "2",
  //       averageChargingRate: "Moderate",
  //       chargingRate: "17.643061224489806A",
  //       SoH: "97.6%",
  //       estimatedDegradation: "2.4%",
  //       batteryChemistry: "LFP-Batteries",
  //       SOCRange: "38%-99%",
  //       temperature_High_Low: "27.0°C/17.0°C",
  //       estimatedPowerOutput: "2.47 kWh",
  //       estimatedCapacityOutput: "101.4 Ah",
  //       speed_Max_Average: "12.4 / 46",
  //       avgDailyKmDriven: 31.6,
  //       estimatedDailyEnergyOutput: "47.58 Ah",
  //     },
  //   },
  // },
  // {
  //   VEHICLE_ID: "EV004",
  //   ODOMETER_START_READING: 5000,
  //   SOC_START: 47,
  //   SOC_END: 70,
  //   AVG_VELOCITY: 40,
  //   AC_ON_DURATION: 45,
  //   CHARGE_TYPE: "Level 1",
  //   DISTANCE: 30,
  //   AMBIENT_TEMPERATURE: 25,
  //   BATTERY_TEMPERATURE: 28,
  //   VEHICLE_NUMBER: "CU04",
  //   LOCATION: "Delhi, India",
  //   CHARGING_STATUS: "Charging",
  //   IOT_DEVICE_DETAILS: {
  //     SERIAL_NUMBER: "123456789",
  //     ID: "IOT006",
  //   },
  //   Vehicle_Info: {
  //     Charging_Pattern: {
  //       Total_Energy_Consumed: "",
  //       Average_SOC: "80%",
  //       Connector_Type: "Type 1",
  //       Total_Charging_Sessions: 5,
  //       Average_Charging_Rate: "0.95 kW",
  //     },
  //     Usage: {
  //       Avg_Daily_km_Driven: "87 km",
  //       Temperature_High_Low: "33°C / 22°C",
  //       SOC_Range: "20% - 85%",
  //       Range_Observed_Max_Min: "110 / 85",
  //       Real_Range_Observed: "98 km",
  //       Observed_vs_EPA_WLTP_provided: "98 km / 145 km",
  //     },
  //     Battery_Health: {
  //       SoH: "98.95 %",
  //       Estimated_Degradation: "1.05 %",
  //       Battery_Chemistry: "Li-ion",
  //       Monthly_SOH_Data: [
  //         null,
  //         null,
  //         null,
  //         null,
  //         null,
  //         null,
  //         null,
  //         null,
  //         null,
  //         null,
  //         null,
  //         null,
  //       ],
  //     },
  //     Odometer: "10000 km",
  //     Vehicle_Model: "Three Wheeler",
  //     Model_Year: "2023",
  //     VIN: "ECHARGEUP1234",
  //     Battery_Capacity: "4.56 kWh",
  //     RUL: "1050 cycles",
  //     EOL: "09-09-2029",
  //     Connected_On: "2024-04-08T08:20:33.602Z",
  //     Data_Points_Collected: "519",
  //     Average_Miles_Driven: [
  //       0,
  //       0,
  //       0,
  //       0,
  //       null,
  //       null,
  //       null,
  //       null,
  //       null,
  //       null,
  //       null,
  //       null,
  //     ],
  //     Battery: {
  //       // Battery_4: {
  //       // odometer: "Current Cycle Number = 14",
  //       odometer: "14",
  //       batteryCapacity: "5kWh",
  //       vehicleModel: "Battery ID = 4",
  //       modelYear: "Use Start Date = 2024-03-01",
  //       averageSOC: 72.21579961464354,
  //       totalChargingSessions: "1",
  //       averageChargingRate: "Moderate",
  //       chargingRate: "nan A",
  //       SoH: null,
  //       estimatedDegradation: null,
  //       batteryChemistry: "LFP-Batteries",
  //       SOCRange: "70%-74%",
  //       temperature_High_Low: "21.0°C/17.3°C",
  //       estimatedPowerOutput: "-",
  //       estimatedCapacityOutput: "-",
  //       speed_Max_Average: "4.0 / 13",
  //       avgDailyKmDriven: 0,
  //       estimatedDailyEnergyOutput: "-",
  //     },
  //   },
  // },
];

const connect = async (uri) => {
  try {
    await mongoose.connect(uri);
    console.log("MongoDB connected");
    // await Vehicle.insertMany(vehicle);
    // console.log("vehicles inserted");
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
};

export default connect;
