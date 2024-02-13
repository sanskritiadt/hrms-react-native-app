



import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity, ScrollView } from 'react-native';
import { Table, Row } from 'react-native-table-component';
//import DateTimePickerModal from "react-native-modal-datetime-picker";

export default function EmpAttendance() {
  const [attendance, setAttendance] = useState([]);
  const [filteredAttendance, setFilteredAttendance] = useState([]);
  const [employeeId, setEmployeeId] = useState('');
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [selectedDateField, setSelectedDateField] = useState('');

  const fetchData = async () => {
    try {
      const response = await fetch("https://65c3148bf7e6ea59682bed24.mockapi.io/empData");
      const data = await response.json();
      setAttendance(data);
      setFilteredAttendance(data); // Initially set both to full data
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);


  return (
    <ScrollView>
    <View style={styles.container}>
      <Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff', }}>
        <Row 
        data={[
          <Text style={{ color: 'white', textAlign:'center',fontWeight: 'bold'}}>Name</Text>,
          <Text style={{ color: 'white', textAlign:'center',fontWeight: 'bold' }}>Working Hours</Text>,
          <Text style={{ color: 'white', textAlign:'center',fontWeight: 'bold' }}>Employee ID</Text>,
          <Text style={{ color: 'white', textAlign:'center',fontWeight: 'bold' }}>Date</Text>,
        ]}
        style={styles.head} textStyle={styles.text} />
        {filteredAttendance.map((item, index) => (
          <Row
            key={index}
            data={[item.name, item.workingHours, item.empID, item.date]}
            style={[styles.row, index % 2 && { backgroundColor: '#f2f2f2' }]}
            textStyle={styles.text}
          />
        ))}
      </Table>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 15, backgroundColor: '#fff' },
  head: { height: 60, backgroundColor: 'darkblue'},
  text: { margin: 6 },
  row: { flexDirection: 'row', backgroundColor: '#FFF1C1' },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  filterContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  datePickerButton: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
});




// import React, { useState, useEffect } from 'react';
// import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native';
// import { Table, Row } from 'react-native-table-component';
// //import DateTimePickerModal from "react-native-modal-datetime-picker";

// export default function EmpAttendance() {
//   const [attendance, setAttendance] = useState([]);
//   const [filteredAttendance, setFilteredAttendance] = useState([]);
//   const [employeeId, setEmployeeId] = useState('');
//   const [fromDate, setFromDate] = useState('');
//   const [toDate, setToDate] = useState('');
//   const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
//   const [selectedDateField, setSelectedDateField] = useState('');

//   const fetchData = async () => {
//     try {
//       const response = await fetch("https://65c3148bf7e6ea59682bed24.mockapi.io/empData");
//       const data = await response.json();
//       setAttendance(data);
//       setFilteredAttendance(data); // Initially set both to full data
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   // const handleFilter = () => {
//   //   let filteredData = attendance;
//   //   if (employeeId) {
//   //     filteredData = filteredData.filter(item => item.empID === employeeId);
//   //   }
//   //   if (fromDate) {
//   //     filteredData = filteredData.filter(item => item.date >= fromDate);
//   //   }
//   //   if (toDate) {
//   //     filteredData = filteredData.filter(item => item.date <= toDate);
//   //   }
//   //   setFilteredAttendance(filteredData);
//   // };

//   // const showDatePicker = (field) => {
//   //   setSelectedDateField(field);
//   //   setDatePickerVisibility(true);
//   // };

//   // const hideDatePicker = () => {
//   //   setDatePickerVisibility(false);
//   // };

//   // const handleConfirm = (date) => {
//   //   hideDatePicker();
//   //   if (selectedDateField === 'from') {
//   //     setFromDate(date.toISOString().split('T')[0]);
//   //   } else if (selectedDateField === 'to') {
//   //     setToDate(date.toISOString().split('T')[0]);
//   //   }
//   // };

//   return (
//     <View style={styles.container}>
//       <Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }}>
//         <Row data={['Name', 'Working Hours', 'Employee ID', 'Date']} style={styles.head} textStyle={styles.text} />
//         {filteredAttendance.map((item, index) => (
//           <Row
//             key={index}
//             data={[item.name, item.workingHours, item.empID, item.date]}
//             style={[styles.row, index % 2 && { backgroundColor: '#f2f2f2' }]}
//             textStyle={styles.text}
//           />
//         ))}
//       </Table>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
//   head: { height: 60, backgroundColor: '#f1f8ff',fontStyle:"normal"},
//   text: { margin: 6 },
//   row: { flexDirection: 'row', backgroundColor: '#FFF1C1' },
//   input: {
//     height: 40,
//     borderColor: 'gray',
//     borderWidth: 1,
//     marginBottom: 10,
//     paddingHorizontal: 10,
//   },
//   filterContainer: {
//     flexDirection: 'row',
//     marginBottom: 10,
//   },
//   datePickerButton: {
//     height: 40,
//     borderColor: 'gray',
//     borderWidth: 1,
//     marginBottom: 10,
//     paddingHorizontal: 10,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginRight: 10,
//   },
// });

// import React, { useState, useEffect } from 'react';
// import { StyleSheet, View,ScrollView } from 'react-native';
// import { Table, Row } from 'react-native-table-component';

// export default function EmpAttendence() {
//   const [attendance, setAttendance] = useState([]);

//   const fetchData = async () => {
//     try {
//       const response = await fetch("https://65c3148bf7e6ea59682bed24.mockapi.io/empData");
//       const data = await response.json();
//       setAttendance(data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   return (
//     <ScrollView>
//     <View style={styles.container}>

        
//       <Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }}>
//         <Row data={['Name', 'Working Hours', 'Employee ID', 'Date']} style={styles.head}  />
//         {attendance.map((item, index) => (
//           <Row
//             key={index}
//             data={[item.name, item.workingHours, item.empID, item.date]}
//             style={[styles.row, index%2 && { backgroundColor: '#f2f2f2' }]}
//             textStyle={styles.text}
//           />
//         ))}
//       </Table>
//     </View>
//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
//   head: { height: 60, backgroundColor: '#f1f8ff' },
//   text: { margin: 6 },
//   row: { flexDirection: 'row', backgroundColor: '#FFF1C1' },
// });

// import React, { useState,useEffect } from 'react'
// import {
//     StyleSheet,
//     Text,
//     View,
//     Image,
//     TextInput,
//     Button,
//     TouchableOpacity,
//     Pressable,
//     Alert,
//     FlatList
    
//   } from "react-native";
// export default function EmpAttendence() {
//     const [Attendance,setAttendance] = useState([]);
//     const func = async ()=>{
//         try {
//             const response = await fetch("https://65c3148bf7e6ea59682bed24.mockapi.io/empData");
//             const data = await response.json();
//             setAttendance(data);
            
//         } catch (error) {
//             console.error(error);
//         }

//     }
//     useEffect(() => {
//         func();
//       }, []);
     
    
//   return (
//     <View>
//         <FlatList
//         data={Attendance}
//         keyExtractor={({id}) => String(id)}
//         scrollEnabled={true}
//         renderItem={({item}) => (
//             <View>
//             <Text>{item.name}</Text>
//             <Text>{item.workingHours}</Text>
//             <Text>{item.empID}</Text>
//             <Text>{item.date}</Text>
//             </View>
//         )}
//         ></FlatList>
//     </View>
//   )
// }
