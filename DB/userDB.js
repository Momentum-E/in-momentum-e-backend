const users = [
  {
    "name": "TEST",
    "email": "recruitbhupendrasinghshahi2023@gmail.com",
    "vehicles": [
      {
        "VEHICLE_ID": "EV009",
        "ODOMETER_START_READING": 10000,
        "SOC_START": 75,
        "SOC_END": 55,
        "AVG_VELOCITY": 55,
        "AC_ON_DURATION": 100,
        "CHARGE_TYPE": "Level 1",
        "DISTANCE": 45,
        "AMBIENT_TEMPERATURE": 27,
        "BATTERY_TEMPERATURE": 34,
        "VEHICLE_NUMBER": "GJ07 XY 6789",
        "IOT_DEVICE_DETAILS": {
          "SERIAL_NUMBER": "852963741",
          "ID": "IOT009"
        },
        "LOCATION": "Ahmedabad, India",
        "CHARGING_STATUS": "Not charging",
        "Vehicle_Info": {
          "Odometer": "29000 Km",
          "Vehicle_Model": "TVS Jupiter",
          "Model_Year": "2020",
          "VIN": "D5S6JMHAMMX660426",
          "Battery_Capacity": "50 kWh",
          "Charging_Pattern": {
            "Total_Energy_Consumed": "85KW",
            "Average_SOC": "85%",
            "Connector_Type": "CCS",
            "Total_Charging_Sessions": 1,
            "Average_Charging_Rate": "CCS"
          },
          "Usage": {
            "Avg_Daily_Km_Driven": "14000 km",
            "Temperature_High_Low": "26°C / 10°C",
            "SOC_Range": "30% - 70%",
            "Range_Observed_Max_Min": "85 / 85",
            "Real_Range_Observed": "85 km",
            "Observed_vs_EPA_WLTP_provided": "85 Km 210 Km"
          },
          "Battery_Health": {
            "State_Of_Health": "92%",
            "SoH": "92.00 %",
            "Estimated_Degradation": "8.00 %",
            "Battery_Chemistry": "NCA",
            "Monthly_SOH_Data": [
              99.67,
              99.64,
              99.61,
              99.54,
              99.51,
              99.48,
              99.45,
              99.38,
              99.36,
              99.31,
              99.28,
              99.25
            ]
          },
          "Connected_On": "16-02-2024",
          "Data_Points_Collected": "0",
          "Average_Miles_Driven": [
            29,
            65,
            41,
            77,
            22,
            58,
            12,
            83,
            56,
            35,
            98,
            44
          ]
        }
      },
      {
        "VEHICLE_ID": "EV007",
        "ODOMETER_START_READING": 11000,
        "SOC_START": 90,
        "SOC_END": 70,
        "AVG_VELOCITY": 55,
        "AC_ON_DURATION": 100,
        "CHARGE_TYPE": "Level 1",
        "DISTANCE": 55,
        "AMBIENT_TEMPERATURE": 28,
        "BATTERY_TEMPERATURE": 35,
        "VEHICLE_NUMBER": "RJ14 LM 9012",
        "IOT_DEVICE_DETAILS": {
          "SERIAL_NUMBER": "456321987",
          "ID": "IOT007"
        },
        "LOCATION": "Jaipur, India",
        "CHARGING_STATUS": "Not charging",
        "Vehicle_Info": {
          "Odometer": "32000 Km",
          "Vehicle_Model": "Hero Electric Optima",
          "Model_Year": "2020",
          "VIN": "B3S6JMHAMMX660426",
          "Battery_Capacity": "50 kWh",
          "Charging_Pattern": {
            "Total_Energy_Consumed": "85KW",
            "Average_SOC": "85%",
            "Connector_Type": "CCS",
            "Total_Charging_Sessions": 1,
            "Average_Charging_Rate": "CCS"
          },
          "Usage": {
            "Avg_Daily_Km_Driven": "14000 km",
            "Temperature_High_Low": "26°C / 10°C",
            "SOC_Range": "35% - 75%",
            "Range_Observed_Max_Min": "85 / 85",
            "Real_Range_Observed": "85 km",
            "Observed_vs_EPA_WLTP_provided": "85 Km 210 Km"
          },
          "Battery_Health": {
            "State_Of_Health": "92%",
            "SoH": "92.00 %",
            "Estimated_Degradation": "8.00 %",
            "Battery_Chemistry": "NCA",
            "Monthly_SOH_Data": [
              99.81,
              99.78,
              99.75,
              99.68,
              99.65,
              99.62,
              99.59,
              99.52,
              99.5,
              99.45,
              99.42,
              99.39
            ]
          },
          "Connected_On": "16-02-2024",
          "Data_Points_Collected": "0",
          "Average_Miles_Driven": [
            20,
            73,
            35,
            61,
            12,
            81,
            46,
            57,
            32,
            94,
            68,
            25
          ]
        }
      },
      {
        "VEHICLE_ID": "EV017",
        "ODOMETER_START_READING": 10500,
        "SOC_START": 80,
        "SOC_END": 60,
        "AVG_VELOCITY": 55,
        "AC_ON_DURATION": 100,
        "CHARGE_TYPE": "Level 1",
        "DISTANCE": 50,
        "AMBIENT_TEMPERATURE": 28,
        "BATTERY_TEMPERATURE": 33,
        "VEHICLE_NUMBER": "KA02 MN 4567",
        "IOT_DEVICE_DETAILS": {
          "SERIAL_NUMBER": "258369147",
          "ID": "IOT017"
        },
        "LOCATION": "Bangalore, India",
        "CHARGING_STATUS": "Not charging",
        "Vehicle_Info": {
          "Odometer": "28500 Km",
          "Vehicle_Model": "Honda CB Unicorn 150",
          "Model_Year": "2019",
          "VIN": "L0S6JMHAMMX660426",
          "Battery_Capacity": "50 kWh",
          "Charging_Pattern": {
            "Total_Energy_Consumed": "90KW",
            "Average_SOC": "90%",
            "Connector_Type": "Type 2",
            "Total_Charging_Sessions": 2,
            "Average_Charging_Rate": "Type 2"
          },
          "Usage": {
            "Avg_Daily_Km_Driven": "17000 km",
            "Temperature_High_Low": "26°C / 10°C",
            "SOC_Range": "30% - 70%",
            "Range_Observed_Max_Min": "85 / 85",
            "Real_Range_Observed": "85 km",
            "Observed_vs_EPA_WLTP_provided": "85 Km 210 Km"
          },
          "Battery_Health": {
            "State_Of_Health": "97%",
            "SoH": "97.00 %",
            "Estimated_Degradation": "3.00 %",
            "Battery_Chemistry": "NCA",
            "Monthly_SOH_Data": [
              99.62,
              99.59,
              99.56,
              99.49,
              99.46,
              99.43,
              99.4,
              99.33,
              99.31,
              99.26,
              99.23,
              99.2
            ]
          },
          "Connected_On": "16-02-2024",
          "Data_Points_Collected": "0",
          "Average_Miles_Driven": [
            24,
            68,
            12,
            79,
            32,
            97,
            45,
            59,
            21,
            83,
            44,
            73
          ]
        }
      },
      {
        "VEHICLE_ID": "EV020",
        "ODOMETER_START_READING": 9500,
        "SOC_START": 85,
        "SOC_END": 65,
        "AVG_VELOCITY": 55,
        "AC_ON_DURATION": 100,
        "CHARGE_TYPE": "Level 1",
        "DISTANCE": 50,
        "AMBIENT_TEMPERATURE": 28,
        "BATTERY_TEMPERATURE": 33,
        "VEHICLE_NUMBER": "MH12 LP 4567",
        "IOT_DEVICE_DETAILS": {
          "SERIAL_NUMBER": "987654123",
          "ID": "IOT020"
        },
        "LOCATION": "Mumbai, India",
        "CHARGING_STATUS": "Not charging",
        "Vehicle_Info": {
          "Odometer": "28000 Km",
          "Vehicle_Model": "Hero HF Deluxe",
          "Model_Year": "2019",
          "VIN": "O1S6JMHAMMX660426",
          "Battery_Capacity": "50 kWh",
          "Charging_Pattern": {
            "Total_Energy_Consumed": "90KW",
            "Average_SOC": "90%",
            "Connector_Type": "Type 2",
            "Total_Charging_Sessions": 2,
            "Average_Charging_Rate": "Type 2"
          },
          "Usage": {
            "Avg_Daily_Km_Driven": "17000 km",
            "Temperature_High_Low": "26°C / 10°C",
            "SOC_Range": "30% - 70%",
            "Range_Observed_Max_Min": "85 / 85",
            "Real_Range_Observed": "85 km",
            "Observed_vs_EPA_WLTP_provided": "85 Km 210 Km"
          },
          "Battery_Health": {
            "State_Of_Health": "97%",
            "SoH": "97.00 %",
            "Estimated_Degradation": "3.00 %",
            "Battery_Chemistry": "NCA",
            "Monthly_SOH_Data": [
              99.87,
              99.84,
              99.81,
              99.74,
              99.71,
              99.68,
              99.65,
              99.58,
              99.56,
              99.51,
              99.48,
              99.45
            ]
          },
          "Connected_On": "19-02-2024",
          "Data_Points_Collected": "0",
          "Average_Miles_Driven": [
            57,
            92,
            30,
            75,
            17,
            82,
            43,
            68,
            25,
            86,
            41,
            61
          ]
        }
      }
    ],
    "profilePictureUrl": "/uploads/image.png"
  }
]; export default users;