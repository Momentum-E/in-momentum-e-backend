const users = [
  {
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
        "VEHICLE_ID": "EV006",
        "ODOMETER_START_READING": 9000,
        "SOC_START": 85,
        "SOC_END": 65,
        "AVG_VELOCITY": 60,
        "AC_ON_DURATION": 120,
        "CHARGE_TYPE": "Level 2",
        "DISTANCE": 60,
        "AMBIENT_TEMPERATURE": 26,
        "BATTERY_TEMPERATURE": 33,
        "VEHICLE_NUMBER": "HR26 QW 5678",
        "IOT_DEVICE_DETAILS": {
          "SERIAL_NUMBER": "321789456",
          "ID": "IOT006"
        },
        "LOCATION": "Gurgaon, India",
        "CHARGING_STATUS": "Not charging",
        "Vehicle_Info": {
          "Odometer": "31000 Km",
          "Vehicle_Model": "Suzuki Access 125",
          "Model_Year": "2019",
          "VIN": "A2S6JMHAMMX660426",
          "Battery_Capacity": "55 kWh",
          "Charging_Pattern": {
            "Total_Energy_Consumed": "105KW",
            "Average_SOC": "90%",
            "Connector_Type": "Type 1",
            "Total_Charging_Sessions": 2,
            "Average_Charging_Rate": "Type 1"
          },
          "Usage": {
            "Avg_Daily_Km_Driven": "17000 km",
            "Temperature_High_Low": "24°C / 9°C",
            "SOC_Range": "30% - 70%",
            "Range_Observed_Max_Min": "95 / 95",
            "Real_Range_Observed": "95 km",
            "Observed_vs_EPA_WLTP_provided": "95 Km 230 Km"
          },
          "Battery_Health": {
            "State_Of_Health": "96%",
            "SoH": "96.00 %",
            "Estimated_Degradation": "4.00 %",
            "Battery_Chemistry": "NMC",
            "Monthly_SOH_Data": [
              99.97,
              99.94,
              99.91,
              99.84,
              99.81,
              99.78,
              99.75,
              99.68,
              99.66,
              99.61,
              99.58,
              99.55
            ]
          },
          "Connected_On": "08-02-2024",
          "Data_Points_Collected": "0",
          "Average_Miles_Driven": [
            65,
            33,
            78,
            21,
            50,
            14,
            92,
            39,
            70,
            45,
            27,
            84
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
          "Connected_On": "08-02-2024",
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
      }
    ]
  }
]; export default users;