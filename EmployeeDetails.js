import img from "./logo.png";
import { StatusBar } from "expo-status-bar";
import React, { useState, useCallback } from "react";


import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  Pressable,
  Alert,
  ScrollView,
  Platform,
} from "react-native";

import DateTimePicker from "@react-native-community/datetimepicker";

export default function EmployeeDetails({ navigation }) {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [temp, setTemp] = useState({
    name: "",
    empID: "",
    workingHours: "",
    date: "",
  });
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [showStartDatePicker, setShowStartDatePicker] = useState(false);
  const [showEndDatePicker, setShowEndDatePicker] = useState(false);

  const handleStartDateChange = (event, selectedDate) => {
    setShowStartDatePicker(Platform.OS === "ios");
    if (selectedDate) {
      setStartDate(selectedDate);
      console.log("startDate", selectedDate);
    }
  };

  const handleEndDateChange = (event, selectedDate) => {
    setShowEndDatePicker(Platform.OS === "ios");
    if (selectedDate) {
      setEndDate(selectedDate);
      console.log("EndDate", selectedDate);
    }
  };

  const showStartDatePickerModal = () => {
    setShowStartDatePicker(true);
  };

  const showEndDatePickerModal = () => {
    setShowEndDatePicker(true);
  };

  function handleData() {
    fetch("https://65c3148bf7e6ea59682bed24.mockapi.io/empData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(temp),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Login failed");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Login successful:", data);
        Alert.alert("Employee Details", "Data Submitted successfully");
        setTemp({
          name: "",
          empID: "",
          workingHours: "",
          date: "",
        });
        navigation.navigate("EmpAttendence");
      })
      .catch((error) => {
        console.error("Login error:", error);
        Alert.alert("Getting error in Submitting", "error");
      });
  }

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <StatusBar style="auto" />
        <View style={{ alignItems: "center", marginTop: 40, marginBottom: 20 }}>
          <Image source={img} style={styles.img}></Image>
        </View>
        <View style={styles.inputbox}>
          <View style={styles.inputView}>
            <TextInput
              value={temp.empID}
              style={styles.TextInput}
              placeholder="Employee ID"
              keyboardType="numeric"
              placeholderTextColor="#003f5c"
              onChangeText={(empID) => setTemp({ ...temp, empID: empID })}
            />
          </View>

          <View style={styles.inputView}>
            <Text style={styles.TextInput} onPress={showEndDatePickerModal}>
              {endDate.toDateString()}
            </Text>
            {showEndDatePicker && (
              <DateTimePicker
                value={endDate}
                mode="date"
                display="default"
                onChange={handleEndDateChange}
              />
            )}
          </View>
          <View style={styles.inputView}>
            <Text style={styles.TextInput} onPress={showStartDatePickerModal}>
              {startDate.toDateString()}
            </Text>
            {showStartDatePicker && (
              <DateTimePicker
                value={startDate}
                mode="date"
                display="default"
                onChange={handleStartDateChange}
              />
            )}
          </View>
        </View>
        <View style={{ alignItems: "center" }}>
          <TouchableOpacity style={styles.submitBtn} onPress={handleData}>
            <Pressable>
              <Text style={{ color: "white" }}>Submit</Text>
            </Pressable>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  inputView: {
    borderRadius: 10,
    marginBottom: 10,
    alignItems: "center",
  },
  inputbox: {
    marginVertical: 10,
  },
  TextInput: {
    padding: 14,
    marginLeft: 17,
    opacity: 1,
    color: "#013e5a",
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#f2f5f6",
    width: 240,
  }, img: {
    width: 240,
    height: 55,
  },
  box: {
    width: 320,
    height: 370,
    backgroundColor: "#fff",
    borderRadius: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  submitBtn: {
    width: "75%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "brown",
  },
  icon: {
    padding: 10,
  },
  circle: {
    backgroundColor: "rgba(128, 128, 128, 0.4)",
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    width: 50,
    borderRadius: 100,
  },
  empl: {
    fontSize: 29,
    fontWeight: "500",
    fontFamily: "serif",
  },
  empt: {
    fontWeight: "500",
    fontFamily: "serif",
    marginVertical: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 15,
  },
});
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//     paddingTop: StatusBar.currentHeight,
//   },
//   image: {
//     marginBottom: 40,
//   }, box: {
//     width: 320,
//     height: 400,
//     backgroundColor: '#fff',
//     borderRadius: 30,
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.84,
//     elevation: 5,
//   },
//   inputView: {
//     backgroundColor: "pink",
//     borderRadius: 30,
//     width: "70%",
//     height: 45,
//     marginBottom: 15,
//   },

//   TextInput: {
//     height: 50,
//     flex: 1,
//     padding: 10,
//     width: "auto",
//     marginLeft: 20,
//   },
//   forgot_button: {
//     height: 30,
//     marginBottom: 30,
//   },
//   loginBtn: {
//     width: "80%",
//     borderRadius: 25,
//     height: 50,
//     alignItems: "center",
//     justifyContent: "center",
//     marginTop: 40,
//     backgroundColor: "brown",
//   },
//   scrollView: {
//     marginHorizontal: 20,
//   },
// });
// import {
//   StyleSheet,
//   Text,
//   View,
//   TextInput,
//   TouchableOpacity,
//   Pressable,
//   Alert,

// } from "react-native";
// export default function EmployeeDetails({navigation}) {
//     const [selectedDate, setSelectedDate] = useState(new Date());
//   const [temp, setTemp] = useState({
//     name: "",
//     empID: "",
//     workingHours:"",
//     date:""
//   });

//   function handleData () {
//     fetch('https://65c3148bf7e6ea59682bed24.mockapi.io/empData', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(temp),
//     })
//     .then(response => {
//       if (!response.ok) {
//         throw new Error('Login failed');
//       }
//       return response.json();
//     })
//     .then(data => {
//       console.log('Login successful:', data);
//       Alert.alert("Employee Details","Data Submitted successfully");
//       setTemp({
//         name: "",
//         empID: "",
//         workingHours: "",
//         date: ""
//       });
//       navigation.navigate('EmpAttendence')
//     })

//     .catch(error => {
//       console.error('Login error:', error);
//       Alert.alert("Login Failed", "Please check your credentials and try again.")
//     });

//   };

//   return (
//     <View style={styles.container}>
//       <StatusBar style="auto" />
//       {/* <Text>Email: {temp.name}</Text>
//       <Text>Password: {temp.empID}</Text> */}
//       <View style={styles.inputView}>
//         <TextInput
//           style={styles.TextInput}
//           placeholder="Employee Name"
//           placeholderTextColor="#003f5c"
//           onChangeText={(name) => setTemp({ ...temp, name:name })}
//           value={temp.name}
//         />
//       </View>
//       <View style={styles.inputView}>
//         <TextInput
//           style={styles.TextInput}
//           placeholder="Employee ID"
//           placeholderTextColor="#003f5c"
//           keyboardType="numeric"
//           onChangeText={(empID) => setTemp({ ...temp, empID:empID })}
//           value={temp.empID}
//         />
//       </View>

//       <View style={styles.inputView}>
//         <TextInput
//           style={styles.TextInput}
//           placeholder="Working hours"
//           placeholderTextColor="#003f5c"
//           keyboardType="numeric"
//           onChangeText={(workingHours) => setTemp({ ...temp, workingHours:workingHours })}
//           value={temp.workingHours}
//         />
//       </View>

//       <View style={styles.inputView}>
//       <DateTimePicker
//         date={selectedDate}
//         display='spinner'
//         mode="date"
//         value={selectedDate}
//       />
//         <TextInput
//           style={styles.TextInput}
//           placeholder="Date"
//           keyboardType="numeric"
//           mode="date"
//           placeholderTextColor="#003f5c"
//           onChangeText={(date) => setTemp({ ...temp, date:date })}
//           value={temp.date}
//         />

//       </View>
//       <TouchableOpacity style={styles.loginBtn}  onPress={handleData}>
//         <Pressable style={styles.loginText}>
//           <Text>Submit</Text>
//         </Pressable>
//       </TouchableOpacity>
//     </View>
//   );
// }
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   image: {
//     marginBottom: 40,
//   },
//   inputView: {
//     backgroundColor: "pink",
//     borderRadius: 30,
//     width: "70%",
//     height: 45,
//     marginBottom: 15,

//   },
//   TextInput: {
//     height: 50,
//     flex: 1,
//     padding: 10,
//     width:'auto',
//     marginLeft:20
//   },
//   forgot_button: {
//     height: 30,
//     marginBottom: 30,
//   },
//   loginBtn: {
//     width: "80%",
//     borderRadius: 25,
//     height: 50,
//     alignItems: "center",
//     justifyContent: "center",
//     marginTop: 40,
//     backgroundColor: "brown",
//   },
// });
