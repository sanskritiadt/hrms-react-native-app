import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import img from "./logo.png";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Pressable,
  Alert,
  Button,
  Image,
} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function New({ navigation }) {
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

 

  function handle() {
    fetch("https://65c3148bf7e6ea59682bed24.mockapi.io/empLogin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(login),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Login failed");
        }
        return response.json();
      })
      .then((data) => {
        //const storeddata = AsyncStorage.setItem('access_token',data );
       // console.log("Stored Data", storeddata);
        console.log("Login successful:", data);
        Alert.alert("Login", "Login successful");
        setLogin({ email: "", password: "" });
        navigation.navigate("EmployeeDetails");
      })
      .catch((error) => {
        console.error("Login error:", error);
        Alert.alert(
          "Login Failed",
          "Please check your credentials and try again."
        );
      });
  }

  const myIcon = <Icon name="user" size={30} color="blue" />;
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <StatusBar style="auto" />
        <View style={{ alignItems: "center", marginTop: 40, marginBottom: 20 }}>
          <Image source={img} style={styles.img}></Image>
        </View>
        <View></View>
        <View style={styles.inputbox}>
          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="Email."
              placeholderTextColor="#003f5c"
              onChangeText={(text) => setLogin({ ...login, email: text })}
              value={login.email}
            />
          </View>

          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="Password."
              placeholderTextColor="#003f5c"
              secureTextEntry={true}
              onChangeText={(text) => setLogin({ ...login, password: text })}
              value={login.password}
            />
          </View>
        </View>
        <View style={{ alignItems: "center" }}>
          <TouchableOpacity>
            <Text style={styles.forgot_button}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>
        <View style={{ alignItems: "center" }}>
          <TouchableOpacity style={styles.loginBtn} onPress={handle}>
            <Pressable style={styles.loginText}>
              <Text style={{ color: "white" }}>Login</Text>
            </Pressable>
          </TouchableOpacity>
        </View>
        {/* <View style={{ marginVertical: 20 }}>
          <Button title="EmpDates" onPress={() => navigation.navigate("AttendenceDates")} />
        </View> */}
      </View>
      <View style={[styles.bot, { bottom: 2 }]}>
        <TouchableOpacity
          style={styles.circularButton}
          onPress={() => navigation.navigate("AiBot")}
        >
          <Text style={styles.buttonText}>
            Hello ! <Icon name="robot" size={20} color="white" />
          </Text>
        </TouchableOpacity>
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
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#f2f5f6",
    width: 240,
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
  forgot_button: {
    height: 30,
    marginBottom: 6,
  },
  loginBtn: {
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
  img: {
    width: 240,
    height: 55,
  },
  bot: {
    position: "absolute",
    alignSelf: "flex-end",
    // padding:30,
    bottom: 0,
    // flex:1,
    // height:50,
    padding: 25,
  },
  circularButton: {
    backgroundColor: "#211C6A",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
    height: 40,
    width: 100,
  },
  buttonText: {
    color: "white",
    fontSize: 15,
  },
});

// import { StatusBar } from "expo-status-bar";
// import React, { useState } from "react";
// import Icon from "react-native-vector-icons/FontAwesome";
// import {
//   StyleSheet,
//   Text,
//   View,
//   TextInput,
//   TouchableOpacity,
//   Pressable,
//   Alert,
//   Button,
// } from "react-native";
// import { WebView } from 'react-native-webview';
// export default function Login({ navigation }) {
//   const [login, setLogin] = useState({
//     email: "",
//     password: "",
//   });

//   function handle() {
//     fetch("https://65c3148bf7e6ea59682bed24.mockapi.io/empLogin", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(login),
//     })
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error("Login failed");
//         }
//         return response.json();
//       })
//       .then((data) => {
//         console.log("Login successful:", data);
//         Alert.alert("Login", "Login successful");
//         setLogin({ email: "", password: "" });
//         navigation.navigate("EmployeeDetails");
//       })
//       .catch((error) => {
//         console.error("Login error:", error);
//         Alert.alert(
//           "Login Failed",
//           "Please check your credentials and try again."
//         );
//       });
//   }

//   const myIcon = <Icon name="user" size={30} color="blue" />;
//   return (
//     <View style={styles.container}>
//        {/* <WebView
//        source={{ uri: 'https://console.dialogflow.com/api-client/demo/embedded/1ce01cea-7861-4bfb-8fca-b3ccfc0f2c3b' }}
//        style={{ width: 250, height: 130 }}
//        allowsFullscreenVideo={true}
//      /> */}
//       <View style={styles.box}>
//         <StatusBar style="auto" />
//         <View style={{ alignItems: "center", marginTop: 40 }}>
//           <Text style={styles.empl}> Employee Login.</Text>
//           <Text style={styles.empt}>Enter your details to log in</Text>
//         </View>
//         <View></View>
//         <View style={styles.inputbox}>
//           {/* <View style={{right:145, top:-3}}>
//         <View style={styles.circle}>
//         <Text style={styles.icon}>{myIcon}</Text>
//         </View>
//         </View> */}

//           <View style={styles.inputView}>
//             <TextInput
//               style={styles.TextInput}
//               placeholder="Email."
//               placeholderTextColor="#003f5c"
//               onChangeText={(text) => setLogin({ ...login, email: text })}
//               value={login.email}
//             />
//           </View>

//           <View style={styles.inputView}>
//             <TextInput
//               style={styles.TextInput}
//               placeholder="Password."
//               placeholderTextColor="#003f5c"
//               secureTextEntry={true}
//               onChangeText={(text) => setLogin({ ...login, password: text })}
//               value={login.password}
//             />
//           </View>
//         </View>
//         <View style={{ alignItems: "center" }}>
//           <TouchableOpacity>
//             <Text style={styles.forgot_button}>Forgot Password?</Text>
//           </TouchableOpacity>
//         </View>
//         <View style={{ alignItems: "center" }}>
//           <TouchableOpacity style={styles.loginBtn} onPress={handle}>
//             <Pressable style={styles.loginText}>
//               <Text style={{ color: "white" }}>Login</Text>
//             </Pressable>
//           </TouchableOpacity>
//         </View>
//         <View style={{ marginVertical: 20 }}>
//           <Button title="Help?" onPress={() => navigation.navigate("AiBot")} />
//         </View>
//         <View style={{ marginVertical: 20 }}>
//           <Button title="EmpDates" onPress={() => navigation.navigate("EmpDates")} />
//         </View>
//       </View>
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
//   inputView: {
//     borderRadius: 10,
//     marginBottom: 10,
//     alignItems: "center",
//   },
//   inputbox: {
//     marginVertical: 10,
//   },
//   TextInput: {
//     padding: 10,
//     borderRadius: 5,
//     backgroundColor: "#f2f5f6",
//     width: 240,
//   },
//   box: {
//     width: 320,
//     height: 370,
//     backgroundColor: "#fff",
//     borderRadius: 30,
//     shadowColor: "#000",
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.84,
//     elevation: 5,
//   },
//   forgot_button: {
//     height: 30,
//     marginBottom: 6,
//   },
//   loginBtn: {
//     width: "80%",
//     borderRadius: 25,
//     height: 50,
//     alignItems: "center",
//     justifyContent: "center",
//     backgroundColor: "brown",
//   },
//   icon: {
//     padding: 10,
//   },
//   circle: {
//     backgroundColor: "rgba(128, 128, 128, 0.4)",
//     position: "absolute",
//     alignItems: "center",
//     justifyContent: "center",
//     width: 50,
//     borderRadius: 100,
//   },
//   empl: {
//     fontSize: 29,
//     fontWeight: "500",
//     fontFamily: "serif",
//   },
//   empt: {
//     fontWeight: "500",
//     fontFamily: "serif",
//     marginVertical: 10,
//   },
// });

// import { StatusBar } from "expo-status-bar";
// import React, { useState } from "react";
// import {
//   StyleSheet,
//   Text,
//   View,
//   TextInput,
//   TouchableOpacity,
//   Pressable,
//   Alert,Button
// } from "react-native";
// import { WebView } from 'react-native-webview';
// export default function Login({navigation}) {
//   const [login, setLogin] = useState({
//     email: "",
//     password: "",
//   });

//   function handle() {
//     fetch('https://65c3148bf7e6ea59682bed24.mockapi.io/empLogin', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(login),
//     })
//     .then(response => {
//       if (!response.ok) {
//         throw new Error('Login failed');
//       }
//       return response.json();
//     })
//     .then(data => {
//       console.log('Login successful:', data);
//       Alert.alert("Login","Login successful");
//       setLogin({ email: "", password: "" });
//         navigation.navigate('EmployeeDetails')

//     })
//     .catch(error => {
//       console.error('Login error:', error);
//       Alert.alert("Login Failed", "Please check your credentials and try again.")
//     });

//   }

//   return (
//     <View style={styles.container}>
//        <WebView
//       source={{ uri: 'https://console.dialogflow.com/api-client/demo/embedded/1ce01cea-7861-4bfb-8fca-b3ccfc0f2c3b' }}
//       style={{ width: 250, height: 130 }}
//       allowsFullscreenVideo={true}
//     />
//       <StatusBar style="auto" />
//       {/* <Text> {login.email}</Text>
//       <Text> {login.password}</Text> */}
//       <View style={styles.inputView}>
//         <TextInput
//           style={styles.TextInput}
//           placeholder="Email."
//           placeholderTextColor="#003f5c"
//           onChangeText={(text) => setLogin({ ...login, email: text })}
//           value={login.email}
//         />
//       </View>
//       <View style={styles.inputView}>
//         <TextInput
//           style={styles.TextInput}
//           placeholder="Password."
//           placeholderTextColor="#003f5c"
//           secureTextEntry={true}
//           onChangeText={(text) => setLogin({ ...login, password: text })}
//           value={login.password}
//         />
//       </View>
//       <TouchableOpacity>
//         <Text style={styles.forgot_button}>Forgot Password?</Text>
//       </TouchableOpacity>

//       <TouchableOpacity style={styles.loginBtn} onPress={handle}>
//         <Pressable style={styles.loginText}>
//           <Text>LOGIN</Text>
//         </Pressable>
//       </TouchableOpacity>
//       <View style={{marginVertical:20}}>
//         {/* <Button
//         title="HomeScreen"
//         onPress={() =>
//           navigation.navigate('HomeScreen')
//         }/> */}
//         {/* <iframe
//     allow="microphone;"
//     width="350"
//     height="430"
//     src="https://console.dialogflow.com/api-client/demo/embedded/1ce01cea-7861-4bfb-8fca-b3ccfc0f2c3b">
// </iframe> */}

//         </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "black",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   inputView: {
//     backgroundColor: "pink",
//     borderRadius: 30,
//     width: "70%",
//     height: 45,
//     marginBottom: 20,
//     alignItems: "center",
//   },
//   TextInput: {
//     height: 50,
//     flex: 1,
//     padding: 10,
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
// });
