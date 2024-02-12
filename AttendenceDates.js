import React, { useState } from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function AttendenceDates(){
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [showStartDatePicker, setShowStartDatePicker] = useState(false);
  const [showEndDatePicker, setShowEndDatePicker] = useState(false);

  const handleStartDateChange = (event, selectedDate) => {
    setShowStartDatePicker(Platform.OS === 'ios');
    if (selectedDate) {
      setStartDate(selectedDate);
      console.log("startDate",selectedDate)
    }
  };

  const handleEndDateChange = (event, selectedDate) => {
    setShowEndDatePicker(Platform.OS === 'ios');
    if (selectedDate) {
      setEndDate(selectedDate);
      console.log("EndDate",selectedDate)
    }
  };

  const showStartDatePickerModal = () => {
    setShowStartDatePicker(true);
  };

  const showEndDatePickerModal = () => {
    setShowEndDatePicker(true);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Start Date:</Text>
      <View>
        <Text onPress={showStartDatePickerModal}>{startDate.toDateString()}</Text>
        {showStartDatePicker && (
          <DateTimePicker
            value={startDate}
            mode="date"
            display="default"
            onChange={handleStartDateChange}
          />
        )}
      </View>

      <Text style={styles.label}>End Date:</Text>
      <View>
        <Text onPress={showEndDatePickerModal}>{endDate.toDateString()}</Text>
        {showEndDatePicker && (
          <DateTimePicker
            value={endDate}
            mode="date"
            display="default"
            onChange={handleEndDateChange}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View,SafeAreaView,Button } from 'react-native';
// import DateTimePicker from '@react-native-community/datetimepicker';
// import { useState } from 'react';

// export default function EmpDates() {
//   const [fromDate, setFromDate] = useState(new Date());
//   const [toDate, setToDate] = useState(new Date());
//   const [showDatePickerState, setShowDatePickerState] = useState(false);
//   const [mode, setMode] = useState('date');

//   const onChange = (event, selectedDate) => {
//     const currentDate = selectedDate || date;
//     setShowDatePickerState(false);
//     if (mode === 'date') {
//       if (fromDate) {
//         setFromDate(new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate()));
//         localStorage.setItem(fromDate)
//         console.log('Selected From Date:', currentDate);
//       } else if (toDate) {
//         setToDate(new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate()));
//         console.log('Selected To Date:', currentDate);
//       }
//     }
//   };

//   const showDatePicker = (mode) => {
//     setShowDatePickerState(true);
//     setMode(mode);
//   };

//   const handleSendDates = () => {
//     // Send the selected from and to dates to your API
//     const dataToSend = {
//       fromDate: fromDate.toISOString(),
//       toDate: toDate.toISOString(),
//     };

//     fetch('your_api_endpoint', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(dataToSend),
//     })
//       .then(response => response.json())
//       .then(data => {
//         console.log(data);
//         // Handle success response from the API
//       })
//       .catch(error => {
//         console.error('Error:', error);
//         // Handle error from the API
//       });
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <View>
//         <Button onPress={() => showDatePicker('date')} title="From Date" />
//       </View>
      
//       <View style={{ marginTop: 30 }}>
//         <Button onPress={() => showDatePicker('date')} title="To Date" />
//       </View>
      
//       <Text style={{ marginTop: 20, backgroundColor: "blue", padding: 20, color: "white", borderRadius: 10 }}>
//         Selected From Date: {fromDate.toLocaleString()}
//       </Text>
      
//       <Text style={{ marginTop: 20, backgroundColor: "blue", padding: 20, color: "white", borderRadius: 10 }}>
//         Selected To Date: {toDate.toLocaleString()}
//       </Text>
      
//       {showDatePickerState && (
//         <DateTimePicker
//           testID="datePicker"
//           value={mode === 'date' ? fromDate : toDate}
//           mode={mode}
//           is24Hour={true}
//           display="default"
//           onChange={onChange}
//         />
//       )}
      
//       <Button onPress={handleSendDates} title="Send Dates to API" />
//     </SafeAreaView>
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

// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View,SafeAreaView,Button } from 'react-native';
// import DateTimePicker from '@react-native-community/datetimepicker';
// import { useState } from 'react';

// export default function EmpDates() {
//   const [date, setDate] = useState(new Date(1598051730000));
//   const [mode, setMode] = useState('date');
//   const [show, setShow] = useState(false);

//   const onChange = (event, selectedDate) => {
//     const currentDate = selectedDate;
//     setShow(false);
//     setDate(currentDate);
//   };

//   const showMode = (currentMode) => {
//     setShow(true);
//     setMode(currentMode);
//   };

//   const showDatepicker = () => {
//     showMode('date');
//   };

 
//   return (
//     <SafeAreaView style={styles.container}>
//       <View><Button onPress={showDatepicker} title="FromDate" /></View>
//       <View style={{marginTop:30}}><Button onPress={showDatepicker} title="ToDate" /></View>
//       <Text style={{marginTop:20,backgroundColor:"blue",padding:20,color:"white",borderRadius:10}}>selected: {date.toLocaleString()}</Text>
//       {show && (
//         <DateTimePicker
//           testID="dateTimePicker"
//           value={date}
//           mode={mode}
//           is24Hour={true}
//           onChange={onChange}
//         />
//       )}
//     </SafeAreaView>
    
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
