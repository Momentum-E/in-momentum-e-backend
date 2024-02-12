const users = [
  {
    "name": "Bhupendra",
    "email": "recruitbhupendrasinghshahi2023@gmail.com",
    "vehicles": [
      {
        "VEHICLE_ID": "EV001",
        "ODOMETER_START_READING": 10000,
        "SOC_START": 80,
        "SOC_END": 60,
        "AVG_VELOCITY": 60,
        "AC_ON_DURATION": 120,
        "CHARGE_TYPE": "Level 2",
        "DISTANCE": 50,
        "AMBIENT_TEMPERATURE": 25,
        "BATTERY_TEMPERATURE": 30,
        "VEHICLE_NUMBER": "UP80 CM 3787",
        "IOT_DEVICE_DETAILS": {
          "SERIAL_NUMBER": "123456789",
          "ID": "IOT001"
        },
        "LOCATION": "Agra, India",
        "CHARGING_STATUS": "Not charging",
        "Vehicle_Info": {
          "Odometer": "279372 Km",
          "Vehicle_Model": "SEAT Mii",
          "Model_Year": "2021",
          "VIN": "J1S6JMHAMMX660426",
          "Battery_Capacity": "75 kWh",
          "Charging_Pattern": {
            "Total_Energy_Consumed": "100KW",
            "Average_SOC": "100%",
            "Connector_Type": "ChaDeMo",
            "Total_Charging_Sessions": 0,
            "Average_Charging_Rate": "15 kwh"
          },
          "Usage": {
            "Avg_Daily_Km_Driven": "18624.8 km",
            "Temperature_High_Low": "12°C / 4.3°C",
            "SOC_Range": "20% - 80%",
            "Range_Observed_Max_Min": "120.98 / 120.98",
            "Real_Range_Observed": "121 km",
            "Observed_vs_EPA_WLTP_provided": "121 Km 350 Km"
          },
          "Battery_Health": {
            "State_Of_Health": "100%",
            "SoH": "100.00 %",
            "Estimated_Degradation": "0.00 %",
            "Battery_Chemistry": "NMC",
            "Monthly_SOH_Data": [
              99.88,
              99.85,
              99.82,
              99.75,
              99.72,
              99.69,
              99.66,
              99.59,
              99.57,
              99.52,
              99.49,
              99.46
            ]
          },
          "Connected_On": "08-02-2024",
          "Data_Points_Collected": "0",
          "Average_Miles_Driven": [
            82,
            47,
            63,
            12,
            90,
            32,
            74,
            18,
            55,
            39,
            68,
            25
          ]
        }
      },
      {
        "VEHICLE_ID": "EV004",
        "ODOMETER_START_READING": 12000,
        "SOC_START": 70,
        "SOC_END": 50,
        "AVG_VELOCITY": 65,
        "AC_ON_DURATION": 110,
        "CHARGE_TYPE": "Level 1",
        "DISTANCE": 55,
        "AMBIENT_TEMPERATURE": 27,
        "BATTERY_TEMPERATURE": 31,
        "VEHICLE_NUMBER": "KA04 JZ 7890",
        "IOT_DEVICE_DETAILS": {
          "SERIAL_NUMBER": "789123456",
          "ID": "IOT004"
        },
        "LOCATION": "Bangalore, India",
        "CHARGING_STATUS": "Not charging",
        "Vehicle_Info": {
          "Odometer": "35000 Km",
          "Vehicle_Model": "Hero Splendor Plus",
          "Model_Year": "2018",
          "VIN": "J2A7G9A8MMX660402",
          "Battery_Capacity": "40 kWh",
          "Charging_Pattern": {
            "Total_Energy_Consumed": "80KW",
            "Average_SOC": "85%",
            "Connector_Type": "Type 1",
            "Total_Charging_Sessions": 1,
            "Average_Charging_Rate": "Type 1"
          },
          "Usage": {
            "Avg_Daily_Km_Driven": "12000 km",
            "Temperature_High_Low": "25°C / 8°C",
            "SOC_Range": "40% - 80%",
            "Range_Observed_Max_Min": "80 / 80",
            "Real_Range_Observed": "80 km",
            "Observed_vs_EPA_WLTP_provided": "80 Km 200 Km"
          },
          "Battery_Health": {
            "State_Of_Health": "90%",
            "SoH": "90.00 %",
            "Estimated_Degradation": "10.00 %",
            "Battery_Chemistry": "LFP",
            "Monthly_SOH_Data": [
              99.64,
              99.61,
              99.58,
              99.51,
              99.48,
              99.45,
              99.42,
              99.35,
              99.33,
              99.28,
              99.25,
              99.22
            ]
          },
          "Connected_On": "08-02-2024",
          "Data_Points_Collected": "0",
          "Average_Miles_Driven": [
            19,
            64,
            38,
            97,
            43,
            30,
            78,
            52,
            17,
            89,
            56,
            34
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
          "Connected_On": "08-02-2024",
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
          "Connected_On": "08-02-2024",
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
      }
    ],
    "profilePictureUrl": "/uploads/image (2).png"
  },
  {
    "name": "Momentun-E",
    "email": "shahi23.bhupendra11@gmail.com",
    "vehicles": [
      {
        "VEHICLE_ID": "EV011",
        "ODOMETER_START_READING": 13000,
        "SOC_START": 75,
        "SOC_END": 55,
        "AVG_VELOCITY": 60,
        "AC_ON_DURATION": 100,
        "CHARGE_TYPE": "Level 2",
        "DISTANCE": 55,
        "AMBIENT_TEMPERATURE": 29,
        "BATTERY_TEMPERATURE": 35,
        "VEHICLE_NUMBER": "AP03 KL 6789",
        "IOT_DEVICE_DETAILS": {
          "SERIAL_NUMBER": "741258963",
          "ID": "IOT011"
        },
        "LOCATION": "Hyderabad, India",
        "CHARGING_STATUS": "Not charging",
        "Vehicle_Info": {
          "Odometer": "30000 Km",
          "Vehicle_Model": "Hero Maestro Edge 125",
          "Model_Year": "2020",
          "VIN": "F7S6JMHAMMX660426",
          "Battery_Capacity": "50 kWh",
          "Charging_Pattern": {
            "Total_Energy_Consumed": "95KW",
            "Average_SOC": "90%",
            "Connector_Type": "CCS",
            "Total_Charging_Sessions": 2,
            "Average_Charging_Rate": "CCS"
          },
          "Usage": {
            "Avg_Daily_Km_Driven": "16000 km",
            "Temperature_High_Low": "27°C / 11°C",
            "SOC_Range": "35% - 75%",
            "Range_Observed_Max_Min": "90 / 90",
            "Real_Range_Observed": "90 km",
            "Observed_vs_EPA_WLTP_provided": "90 Km 220 Km"
          },
          "Battery_Health": {
            "State_Of_Health": "95%",
            "SoH": "95.00 %",
            "Estimated_Degradation": "5.00 %",
            "Battery_Chemistry": "NCA",
            "Monthly_SOH_Data": [
              99.84,
              99.81,
              99.78,
              99.71,
              99.68,
              99.65,
              99.62,
              99.55,
              99.53,
              99.48,
              99.45,
              99.42
            ]
          },
          "Connected_On": "09-02-2024",
          "Data_Points_Collected": "0",
          "Average_Miles_Driven": [
            54,
            34,
            81,
            28,
            46,
            15,
            96,
            37,
            69,
            23,
            79,
            41
          ]
        }
      }
    ]
  }
]; export default users;