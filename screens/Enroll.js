import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert,
} from 'react-native';

import {Picker} from '@react-native-picker/picker';
import ColorList from '../components/ColorList';

import {handleDisplay} from '../components/HelperFunction';

const Enroll = () => {
  //get data from the user
  const [studentData, setStudentData] = useState({
    name: '',
    fatherName: '',
    contact: '',
    gender: '',
  });
  //helper variable
  let contactLength = 10;
  //function to do once the data is entered.
  const handleSubmit = () => {
    //validation check
    if (!studentData.name || !studentData.fatherName || !studentData.contact) {
      Alert.alert('Warning', 'Please enter all the required fields...');
      return;
    }
    if (studentData.contact.length != contactLength) {
      Alert.alert('Warning', 'Please enter Valid Phone Number...');
      return;
    }
    //log the data
    handleDisplay(studentData);
    //reset the value to default
    setStudentData({
      name: '',
      fatherName: '',
      contact: '',
      gender: '',
    });
  };
  return (
    <View style={styles.sectionContainer}>
      <View style={styles.sectionInput}>
        <Text style={styles.labelText}>Name</Text>
        <TextInput
          style={styles.inputText}
          placeholder="Enter name"
          placeholderTextColor="#0077b6"
          value={studentData.name}
          onChangeText={text => setStudentData({...studentData, name: text})}
        />
      </View>
      <View style={styles.sectionInput}>
        <Text style={styles.labelText}>Gender</Text>
        <View style={styles.inputText}>
          <Picker
            selectedValue={studentData.gender}
            onValueChange={(itemValue, itemIndex) =>
              setStudentData({...studentData, gender: itemValue})
            }>
            <Picker.Item
              label="--Select Gender--"
              value="#"
              style={{...styles.inputText, color: ColorList.childColor}}
            />
            <Picker.Item
              label="Male"
              value="M"
              style={{...styles.inputText, color: ColorList.childColor}}
            />
            <Picker.Item
              label="Female"
              value="F"
              style={{...styles.inputText, color: ColorList.childColor}}
            />
          </Picker>
        </View>
      </View>
      <View style={styles.sectionInput}>
        <Text style={styles.labelText}>Father's name</Text>
        <TextInput
          style={styles.inputText}
          placeholder="Enter father name"
          placeholderTextColor="#0077b6"
          value={studentData.fatherName}
          onChangeText={text =>
            setStudentData({...studentData, fatherName: text})
          }
        />
      </View>
      <View style={styles.sectionInput}>
        <Text style={styles.labelText}>Contact Detail's</Text>
        <TextInput
          style={styles.inputText}
          placeholder="Enter contact details"
          keyboardType="number-pad"
          placeholderTextColor="#0077b6"
          value={studentData.contact}
          onChangeText={text => setStudentData({...studentData, contact: text})}
        />
      </View>
      <View style={styles.sectionButton}>
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    height: '100%',
    backgroundColor: '#023e8a',
    padding: 12,
  },
  sectionInput: {
    marginBottom: 22,
  },
  labelText: {
    fontSize: 20,
    color: '#f8f9fa',
  },
  inputText: {
    borderWidth: 1,
    borderColor: '#0077b6',
    borderRadius: 12,
    marginTop: 12,
    fontSize: 22,
    paddingLeft: 12,
  },
  sectionButton: {},
  button: {
    backgroundColor: '#0077b6',
    padding: 16,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
    borderWidth: 1,
    borderRadius: 12,
    elevation: 1,
    marginVertical: 12,
  },
  buttonText: {
    fontSize: 22,
    color: '#f8f9fa',
  },
});

export default Enroll;
