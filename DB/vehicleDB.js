const vehicles = [
  {
    VEHICLE_ID: "EV001",
    ODOMETER_START_READING: 6000,
    SOC_START: 85,
    SOC_END: 65,
    AVG_VELOCITY: 45,
    AC_ON_DURATION: 60,
    CHARGE_TYPE: "Level 2",
    DISTANCE: 35,
    AMBIENT_TEMPERATURE: 28,
    BATTERY_TEMPERATURE: 30,
    VEHICLE_NUMBER: "KA51 AB 1234",
    IOT_DEVICE_DETAILS: {
      SERIAL_NUMBER: "789456123",
      ID: "IOT001",
    },
    LOCATION: "Bangalore, India",
    CHARGING_STATUS: "Not charging",
    Vehicle_Info: {
      Odometer: "16000 Km",
      Vehicle_Model: "Ather 450X",
      Model_Year: "2021",
      VIN: "ATH45X12345678901",
      Battery_Capacity: "3.7 kWh",
      Charging_Pattern: {
        Total_Energy_Consumed: "10 kW",
        Average_SOC: "82%",
        Connector_Type: "Type 2",
        Total_Charging_Sessions: 6,
        Average_Charging_Rate: "0.45 kW",
      },
      Usage: {
        Avg_Daily_Km_Driven: "74 km",
        Temperature_High_Low: "30°C / 18°C",
        SOC_Range: "30% - 90%",
        Range_Observed_Max_Min: "110 / 80",
        Real_Range_Observed: "90 km",
        Observed_vs_EPA_WLTP_provided: "85 Km 150 Km",
      },
      Battery_Health: {
        SoH: "98.84 %",
        Estimated_Degradation: "1.16 %",
        Battery_Chemistry: "Li-ion",
        Monthly_SOH_Data: [98.88, 98.85, 98.84, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      },
      Connected_On: "2024-03-10",
      Data_Points_Collected: "35",
      Average_Miles_Driven: [78, 65, 74, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    },
  },
  {
    VEHICLE_ID: "EV002",
    ODOMETER_START_READING: 5500,
    SOC_START: 90,
    SOC_END: 70,
    AVG_VELOCITY: 40,
    AC_ON_DURATION: 45,
    CHARGE_TYPE: "Level 1",
    DISTANCE: 30,
    AMBIENT_TEMPERATURE: 25,
    BATTERY_TEMPERATURE: 28,
    VEHICLE_NUMBER: "KA52 CD 5678",
    IOT_DEVICE_DETAILS: {
      SERIAL_NUMBER: "987654321",
      ID: "IOT002",
    },
    LOCATION: "Mumbai, India",
    CHARGING_STATUS: "Charging",
    Vehicle_Info: {
      Odometer: "15500 Km",
      Vehicle_Model: "Ather 450X",
      Model_Year: "2021",
      VIN: "ATH45X98765432109",
      Battery_Capacity: "3.7 kWh",
      Charging_Pattern: {
        Total_Energy_Consumed: "12 kW",
        Average_SOC: "85%",
        Connector_Type: "Type 2",
        Total_Charging_Sessions: 5,
        Average_Charging_Rate: "0.45 kW",
      },
      Usage: {
        Avg_Daily_Km_Driven: "65 km",
        Temperature_High_Low: "32°C / 19°C",
        SOC_Range: "25% - 80%",
        Range_Observed_Max_Min: "120 / 97",
        Real_Range_Observed: "112 km",
        Observed_vs_EPA_WLTP_provided: "112 Km 150 Km",
      },
      Battery_Health: {
        SoH: "97.82 %",
        Estimated_Degradation: "2.18 %",
        Battery_Chemistry: "Li-ion",
        Monthly_SOH_Data: [97.88, 97.85, 97.82, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      },
      Connected_On: "2024-03-09",
      Data_Points_Collected: "18",
      Average_Miles_Driven: [60, 68, 65, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    },
  },
  {
    VEHICLE_ID: "EV003",
    ODOMETER_START_READING: 7000,
    SOC_START: 80,
    SOC_END: 60,
    AVG_VELOCITY: 50,
    AC_ON_DURATION: 55,
    CHARGE_TYPE: "Level 2",
    DISTANCE: 40,
    AMBIENT_TEMPERATURE: 32,
    BATTERY_TEMPERATURE: 35,
    VEHICLE_NUMBER: "KA53 EF 9012",
    IOT_DEVICE_DETAILS: {
      SERIAL_NUMBER: "456789123",
      ID: "IOT003",
    },
    LOCATION: "Chennai, India",
    CHARGING_STATUS: "Not charging",
    Vehicle_Info: {
      Odometer: "17000 Km",
      Vehicle_Model: "Ather 450X",
      Model_Year: "2021",
      VIN: "ATH45X45678912304",
      Battery_Capacity: "3.7 kWh",
      Charging_Pattern: {
        Total_Energy_Consumed: "11 kW",
        Average_SOC: "78%",
        Connector_Type: "Type 2",
        Total_Charging_Sessions: 4,
        Average_Charging_Rate: "0.45 kW",
      },
      Usage: {
        Avg_Daily_Km_Driven: "83 km",
        Temperature_High_Low: "35°C / 22°C",
        SOC_Range: "20% - 85%",
        Range_Observed_Max_Min: "105 / 89",
        Real_Range_Observed: "108 km",
        Observed_vs_EPA_WLTP_provided: "108 Km 150 Km",
      },
      Battery_Health: {
        SoH: "99.85 %",
        Estimated_Degradation: "0.15 %",
        Battery_Chemistry: "Li-ion",
        Monthly_SOH_Data: [99.88, 98.85, 99.85, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      },
      Connected_On: "2024-03-08",
      Data_Points_Collected: "24",
      Average_Miles_Driven: [80, 89, 83, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    },
  },
  {
    VEHICLE_ID: "EV004",
    ODOMETER_START_READING: 8000,
    SOC_START: 75,
    SOC_END: 55,
    AVG_VELOCITY: 55,
    AC_ON_DURATION: 60,
    CHARGE_TYPE: "Level 1",
    DISTANCE: 45,
    AMBIENT_TEMPERATURE: 30,
    BATTERY_TEMPERATURE: 32,
    VEHICLE_NUMBER: "KA54 GH 3456",
    IOT_DEVICE_DETAILS: {
      SERIAL_NUMBER: "369852147",
      ID: "IOT004",
    },
    LOCATION: "Hyderabad, India",
    CHARGING_STATUS: "Charging",
    Vehicle_Info: {
      Odometer: "18000 Km",
      Vehicle_Model: "Ather 450X",
      Model_Year: "2021",
      VIN: "ATH45X36985214705",
      Battery_Capacity: "3.7 kWh",
      Charging_Pattern: {
        Total_Energy_Consumed: "13 kW",
        Average_SOC: "73%",
        Connector_Type: "Type 2",
        Total_Charging_Sessions: 3,
        Average_Charging_Rate: "0.45 kW",
      },
      Usage: {
        Avg_Daily_Km_Driven: "77 km",
        Temperature_High_Low: "36°C / 20°C",
        SOC_Range: "15% - 80%",
        Range_Observed_Max_Min: "105 / 82",
        Real_Range_Observed: "98 km",
        Observed_vs_EPA_WLTP_provided: "98 Km 150Km",
      },
      Battery_Health: {
        SoH: "97.81 %",
        Estimated_Degradation: "2.19 %",
        Battery_Chemistry: "Li-ion",
        Monthly_SOH_Data: [97.88, 97.85, 97.81, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      },
      Connected_On: "2024-03-07",
      Data_Points_Collected: "17",
      Average_Miles_Driven: [79, 74, 77, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    },
  },
  {
    VEHICLE_ID: "EV006",
    ODOMETER_START_READING: 5000,
    SOC_START: 90,
    SOC_END: 70,
    AVG_VELOCITY: 40,
    AC_ON_DURATION: 45,
    CHARGE_TYPE: "Level 1",
    DISTANCE: 30,
    AMBIENT_TEMPERATURE: 25,
    BATTERY_TEMPERATURE: 28,
    VEHICLE_NUMBER: "KA56 LM 1234",
    IOT_DEVICE_DETAILS: {
      SERIAL_NUMBER: "123456789",
      ID: "IOT006",
    },
    LOCATION: "Bangalore, India",
    CHARGING_STATUS: "Charging",
    Vehicle_Info: {
      Odometer: "10000 Km",
      Vehicle_Model: "TVS iCube",
      Model_Year: "2023",
      VIN: "ICUBE12345678901",
      Battery_Capacity: "5.1 kWh",
      Charging_Pattern: {
        Total_Energy_Consumed: "11 kW",
        Average_SOC: "80%",
        Connector_Type: "Type 1",
        Total_Charging_Sessions: 5,
        Average_Charging_Rate: "0.65 kW",
      },
      Usage: {
        Avg_Daily_Km_Driven: "81 km",
        Temperature_High_Low: "30°C / 18°C",
        SOC_Range: "20% - 85%",
        Range_Observed_Max_Min: "110 / 85",
        Real_Range_Observed: "98 km",
        Observed_vs_EPA_WLTP_provided: "98 Km 140 Km",
      },
      Battery_Health: {
        SoH: "99.00 %",
        Estimated_Degradation: "1.00 %",
        Battery_Chemistry: "Li-ion",
        Monthly_SOH_Data: [99.15, 99.04, 99.00, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      },
      Connected_On: "2024-03-15",
      Data_Points_Collected: "30",
      Average_Miles_Driven: [88, 93, 81, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    },
  },
  {
    VEHICLE_ID: "EV007",
    ODOMETER_START_READING: 6000,
    SOC_START: 85,
    SOC_END: 65,
    AVG_VELOCITY: 45,
    AC_ON_DURATION: 60,
    CHARGE_TYPE: "Level 2",
    DISTANCE: 35,
    AMBIENT_TEMPERATURE: 28,
    BATTERY_TEMPERATURE: 30,
    VEHICLE_NUMBER: "KA57 NO 5678",
    IOT_DEVICE_DETAILS: {
      SERIAL_NUMBER: "987654321",
      ID: "IOT007",
    },
    LOCATION: "Chennai, India",
    CHARGING_STATUS: "Not charging",
    Vehicle_Info: {
      Odometer: "11000 Km",
      Vehicle_Model: "TVS iCube",
      Model_Year: "2023",
      VIN: "ICUBE98765432109",
      Battery_Capacity: "5.1 kWh",
      Charging_Pattern: {
        Total_Energy_Consumed: "10.5 kW",
        Average_SOC: "82%",
        Connector_Type: "Type 1",
        Total_Charging_Sessions: 6,
        Average_Charging_Rate: "0.65 kW",
      },
      Usage: {
        Avg_Daily_Km_Driven: "95 km",
        Temperature_High_Low: "35°C / 22°C",
        SOC_Range: "30% - 90%",
        Range_Observed_Max_Min: "110 / 94",
        Real_Range_Observed: "105 km",
        Observed_vs_EPA_WLTP_provided: "105 Km 140 Km",
      },
      Battery_Health: {
        SoH: "98.82 %",
        Estimated_Degradation: "1.18 %",
        Battery_Chemistry: "Li-ion",
        Monthly_SOH_Data: [98.88, 98.85, 98.82, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      },
      Connected_On: "2024-03-22",
      Data_Points_Collected: "14",
      Average_Miles_Driven: [98, 90, 95, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    },
  },
  {
    VEHICLE_ID: "EV008",
    ODOMETER_START_READING: 7000,
    SOC_START: 80,
    SOC_END: 60,
    AVG_VELOCITY: 50,
    AC_ON_DURATION: 55,
    CHARGE_TYPE: "Level 2",
    DISTANCE: 40,
    AMBIENT_TEMPERATURE: 32,
    BATTERY_TEMPERATURE: 35,
    VEHICLE_NUMBER: "KA58 PQ 9012",
    IOT_DEVICE_DETAILS: {
      SERIAL_NUMBER: "456789123",
      ID: "IOT008",
    },
    LOCATION: "Mumbai, India",
    CHARGING_STATUS: "Not charging",
    Vehicle_Info: {
      Odometer: "12000 Km",
      Vehicle_Model: "TVS iCube",
      Model_Year: "2023",
      VIN: "ICUBE45678912304",
      Battery_Capacity: "5.1 kWh",
      Charging_Pattern: {
        Total_Energy_Consumed: "12.5 kW",
        Average_SOC: "78%",
        Connector_Type: "Type 1",
        Total_Charging_Sessions: 4,
        Average_Charging_Rate: "0.65 kW",
      },
      Usage: {
        Avg_Daily_Km_Driven: "84 km",
        Temperature_High_Low: "32°C / 19°C",
        SOC_Range: "20% - 85%",
        Range_Observed_Max_Min: "114 / 98",
        Real_Range_Observed: "108 km",
        Observed_vs_EPA_WLTP_provided: "108 Km 140 Km",
      },
      Battery_Health: {
        SoH: "96.71 %",
        Estimated_Degradation: "3.29 %",
        Battery_Chemistry: "Li-ion",
        Monthly_SOH_Data: [96.82, 96.75, 96.71, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      },
      Connected_On: "2024-03-13",
      Data_Points_Collected: "27",
      Average_Miles_Driven: [77, 63, 84, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    },
  },
];

export default vehicles;
