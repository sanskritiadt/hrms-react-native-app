import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import EmpAttendence from './EmpAttendence';
import HomeScreen from './HomeScreen';
import Login from './Login';
import EmployeeDetails from './EmployeeDetails';
import AiBot from './AiBot';
import AttendenceDates from './AttendenceDates'

const Stack = createNativeStackNavigator();

export default function App () {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{title: 'Human Resource Management'}}
        />
        <Stack.Screen name="EmpAttendence" component={EmpAttendence} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="EmployeeDetails" component={EmployeeDetails} />
        <Stack.Screen name="AiBot" component={AiBot} />
        <Stack.Screen name="AttendenceDates" component={AttendenceDates} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

// import { StatusBar } from "expo-status-bar";
// import React, { useState } from "react";
// import {
//   StyleSheet,
//   Text,
//   View,
//   Image,
//   TextInput,
//   Button,
//   TouchableOpacity,
// } from "react-native";
// export default function App() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   return (
//     <View style={styles.container}>
//       {/* <Image style={styles.image} source={require("./assets/log2.png")} />  */}
//       <StatusBar style="auto" />
//       <View style={styles.inputView}>
//         <TextInput
//           style={styles.TextInput}
//           placeholder="Email."
//           placeholderTextColor="#003f5c"
//           onChangeText={(email) => setEmail(email)}
//         /> 
//       </View> 
//       <View style={styles.inputView}>
//         <TextInput
//           style={styles.TextInput}
//           placeholder="Password."
//           placeholderTextColor="#003f5c"
//           secureTextEntry={true}
//           onChangeText={(password) => setPassword(password)}
//         /> 
//       </View> 
//       <TouchableOpacity>
//         <Text style={styles.forgot_button}>Forgot Password?</Text> 
//       </TouchableOpacity> 
//       <TouchableOpacity style={styles.loginBtn}>
//         <Text style={styles.loginText}>LOGIN</Text> 
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

// import React from 'react';
// import {
//   StyleSheet,
//   Text,
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   Image
// } from 'react-native';

// const App = () => {
//   return (
    
//     <SafeAreaView style={styles.container}>
       
//       <StatusBar style="auto" />
//       <ScrollView style={styles.scrollView}>
//       <Text style={styles.text}>
//         This story shows how important hard work is. Of the three little pigs, two were lazy, shied away from working hard,
//          and worked on houses made of straws. The third pig built a brick house by working hard. A wolf blows 
//          the two weak houses and eats the two little pigs, but the third one is safe because of his strong home.
//         </Text>
//         <Text style={styles.text}>
//         In this story, a poor farmer finds a magic pot that provides abundant anything. The poor farmer becomes rich 
//         using this pot. The King of the land then forcibly takes the pot from the farmer, and the greedy King multiplies
//          his wealth. One day, tragedy strikes when the King’s father falls into the pot, and the King looks after his 
//         father and his father lookalike. This situation causes the King many problems, losing his peace of mind.
//         Moral – This beautiful, honest, inspiring story for children teaches them that – Being greedy can lead to problems.
//         </Text>
//         <Image
//         style={styles.tinyLogo}
//         source={{
//           uri: 'https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630',
//         }}
//       />
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingTop: StatusBar.currentHeight,
//   },
//   scrollView: {
//     backgroundColor: 'pink',
//     marginHorizontal: 20,
//   },
//   text: {
//     fontSize: 30,
//   },
//   tinyLogo: {
//     width: 100,
//     height: 100,
//   },
// });

// export default App;
// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
      
//     </View>
    
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
