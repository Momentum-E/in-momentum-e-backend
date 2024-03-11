const users = [
  {
    "name": "Momentum-E",
    "email": "recruitbhupendrasinghshahi2023@gmail.com",
    "vehicles": [],
    "profilePictureUrl": "/uploads/image (2).png"
  },
  {
    "name": "E‐Chargeup Solutions Private Limited",
    "email": "echargeup@demo.com",
    "vehicles": [
      {
        "VEHICLE_ID": "EV001",
        "ODOMETER_START_READING": 6000,
        "SOC_START": 85,
        "SOC_END": 65,
        "AVG_VELOCITY": 45,
        "AC_ON_DURATION": 60,
        "CHARGE_TYPE": "Level 2",
        "DISTANCE": 35,
        "AMBIENT_TEMPERATURE": 28,
        "BATTERY_TEMPERATURE": 30,
        "VEHICLE_NUMBER": "KA51 AB 1234",
        "IOT_DEVICE_DETAILS": {
          "SERIAL_NUMBER": "789456123",
          "ID": "IOT001"
        },
        "LOCATION": "Bangalore, India",
        "CHARGING_STATUS": "Not charging",
        "Vehicle_Info": {
          "Odometer": "16000 Km",
          "Vehicle_Model": "Ather 450X",
          "Model_Year": "2021",
          "VIN": "ATH45X12345678901",
          "Battery_Capacity": "3.7 kWh",
          "Charging_Pattern": {
            "Total_Energy_Consumed": "10 kW",
            "Average_SOC": "82%",
            "Connector_Type": "Type 2",
            "Total_Charging_Sessions": 6,
            "Average_Charging_Rate": "0.45 kW"
          },
          "Usage": {
            "Avg_Daily_Km_Driven": "55 km",
            "Temperature_High_Low": "35°C / 20°C",
            "SOC_Range": "30% - 90%",
            "Range_Observed_Max_Min": "75 / 55",
            "Real_Range_Observed": "65 km",
            "Observed_vs_EPA_WLTP_provided": "65 Km 150 Km"
          },
          "Battery_Health": {
            "SoH": "98.84 %",
            "Estimated_Degradation": "1.16 %",
            "Battery_Chemistry": "Li-ion",
            "Monthly_SOH_Data": [
              98.88,
              98.85,
              98.84,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0
            ]
          },
          "Connected_On": "11-03-2024",
          "Data_Points_Collected": "220",
          "Average_Miles_Driven": [
            50,
            65,
            58,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0
          ]
        }
      },
      {
        "VEHICLE_ID": "EV006",
        "ODOMETER_START_READING": 5000,
        "SOC_START": 90,
        "SOC_END": 70,
        "AVG_VELOCITY": 40,
        "AC_ON_DURATION": 45,
        "CHARGE_TYPE": "Level 1",
        "DISTANCE": 30,
        "AMBIENT_TEMPERATURE": 25,
        "BATTERY_TEMPERATURE": 28,
        "VEHICLE_NUMBER": "KA56 LM 1234",
        "IOT_DEVICE_DETAILS": {
          "SERIAL_NUMBER": "123456789",
          "ID": "IOT006"
        },
        "LOCATION": "Bangalore, India",
        "CHARGING_STATUS": "Charging",
        "Vehicle_Info": {
          "Odometer": "10000 Km",
          "Vehicle_Model": "TVS iCube",
          "Model_Year": "2023",
          "VIN": "ICUBE12345678901",
          "Battery_Capacity": "5.1 kWh",
          "Charging_Pattern": {
            "Total_Energy_Consumed": "11 kW",
            "Average_SOC": "80%",
            "Connector_Type": "Type 1",
            "Total_Charging_Sessions": 5,
            "Average_Charging_Rate": "0.65 kW"
          },
          "Usage": {
            "Avg_Daily_Km_Driven": "50 km",
            "Temperature_High_Low": "30°C / 18°C",
            "SOC_Range": "20% - 85%",
            "Range_Observed_Max_Min": "70 / 50",
            "Real_Range_Observed": "60 km",
            "Observed_vs_EPA_WLTP_provided": "60 Km 140 Km"
          },
          "Battery_Health": {
            "SoH": "99.00 %",
            "Estimated_Degradation": "1.00 %",
            "Battery_Chemistry": "Li-ion",
            "Monthly_SOH_Data": [
              99.15,
              99.04,
              99,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0
            ]
          },
          "Connected_On": "11-03-2024",
          "Data_Points_Collected": "200",
          "Average_Miles_Driven": [
            40,
            25,
            35,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0
          ]
        }
      },
      {
        "VEHICLE_ID": "EV002",
        "ODOMETER_START_READING": 5500,
        "SOC_START": 90,
        "SOC_END": 70,
        "AVG_VELOCITY": 40,
        "AC_ON_DURATION": 45,
        "CHARGE_TYPE": "Level 1",
        "DISTANCE": 30,
        "AMBIENT_TEMPERATURE": 25,
        "BATTERY_TEMPERATURE": 28,
        "VEHICLE_NUMBER": "KA52 CD 5678",
        "IOT_DEVICE_DETAILS": {
          "SERIAL_NUMBER": "987654321",
          "ID": "IOT002"
        },
        "LOCATION": "Mumbai, India",
        "CHARGING_STATUS": "Charging",
        "Vehicle_Info": {
          "Odometer": "15500 Km",
          "Vehicle_Model": "Ather 450X",
          "Model_Year": "2021",
          "VIN": "ATH45X98765432109",
          "Battery_Capacity": "3.7 kWh",
          "Charging_Pattern": {
            "Total_Energy_Consumed": "12 kW",
            "Average_SOC": "85%",
            "Connector_Type": "Type 2",
            "Total_Charging_Sessions": 5,
            "Average_Charging_Rate": "0.45 kW"
          },
          "Usage": {
            "Avg_Daily_Km_Driven": "50 km",
            "Temperature_High_Low": "30°C / 18°C",
            "SOC_Range": "25% - 80%",
            "Range_Observed_Max_Min": "70 / 50",
            "Real_Range_Observed": "60 km",
            "Observed_vs_EPA_WLTP_provided": "60 Km 140 Km"
          },
          "Battery_Health": {
            "SoH": "97.82 %",
            "Estimated_Degradation": "2.18 %",
            "Battery_Chemistry": "Li-ion",
            "Monthly_SOH_Data": [
              97.88,
              97.85,
              97.82,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0
            ]
          },
          "Connected_On": "11-03-2024",
          "Data_Points_Collected": "200",
          "Average_Miles_Driven": [
            40,
            25,
            35,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0
          ]
        }
      },
      {
        "VEHICLE_ID": "EV003",
        "ODOMETER_START_READING": 7000,
        "SOC_START": 80,
        "SOC_END": 60,
        "AVG_VELOCITY": 50,
        "AC_ON_DURATION": 55,
        "CHARGE_TYPE": "Level 2",
        "DISTANCE": 40,
        "AMBIENT_TEMPERATURE": 32,
        "BATTERY_TEMPERATURE": 35,
        "VEHICLE_NUMBER": "KA53 EF 9012",
        "IOT_DEVICE_DETAILS": {
          "SERIAL_NUMBER": "456789123",
          "ID": "IOT003"
        },
        "LOCATION": "Chennai, India",
        "CHARGING_STATUS": "Not charging",
        "Vehicle_Info": {
          "Odometer": "17000 Km",
          "Vehicle_Model": "Ather 450X",
          "Model_Year": "2021",
          "VIN": "ATH45X45678912304",
          "Battery_Capacity": "3.7 kWh",
          "Charging_Pattern": {
            "Total_Energy_Consumed": "11 kW",
            "Average_SOC": "78%",
            "Connector_Type": "Type 2",
            "Total_Charging_Sessions": 4,
            "Average_Charging_Rate": "0.45 kW"
          },
          "Usage": {
            "Avg_Daily_Km_Driven": "60 km",
            "Temperature_High_Low": "38°C / 22°C",
            "SOC_Range": "20% - 85%",
            "Range_Observed_Max_Min": "80 / 55",
            "Real_Range_Observed": "70 km",
            "Observed_vs_EPA_WLTP_provided": "70 Km 160 Km"
          },
          "Battery_Health": {
            "SoH": "99.85 %",
            "Estimated_Degradation": "0.15 %",
            "Battery_Chemistry": "Li-ion",
            "Monthly_SOH_Data": [
              99.88,
              98.85,
              99.85,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0
            ]
          },
          "Connected_On": "11-03-2024",
          "Data_Points_Collected": "250",
          "Average_Miles_Driven": [
            50,
            35,
            45,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0
          ]
        }
      }
    ],
    "profilePictureUrl": "/uploads/echargeup logo.webp"
  }
]; export default users;