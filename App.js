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


