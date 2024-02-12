

import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const DatePickerDemo = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Selected Date:</Text>
      <Text style={styles.date}>{selectedDate.toString()}</Text>
      <DateTimePicker
        date={selectedDate}
        display='spinner'
        onDateChange={handleDateChange}
        mode="date"
        value={selectedDate}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  date: {
    fontSize: 16,
    marginBottom: 20,
  },
});

export default DatePickerDemo;

// import React, { useState } from 'react';
// import { StyleSheet, Text, View, Button } from 'react-native';

// const HomeScreen = ({ navigation }) => {
//   const [friendCount, setFriendCount] = useState(undefined);

//   return (
//     <View style={styles.container}>
//       <Text>You have friends.</Text>
//       <Button
//         title="Employee Details"
//         onPress={() =>
//           navigation.navigate('EmployeeDetails')
//         }
//       />
//       <View style={{marginVertical:20}}> 
//         <Button
//         title="Login"
//         onPress={() =>
//           navigation.navigate('Login')
//         }
//       /></View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop:10,
//     padding:10
//   },
// });

// export default HomeScreen;
