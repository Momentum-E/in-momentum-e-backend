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
          "Connected_On": "29-02-2024",
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
      }
    ],
    "profilePictureUrl": "/uploads/image.png"
  }
]; export default users;