import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import ColorList from '../components/ColorList';
import {handleNavigation} from '../components/HelperFunction';
const List = ({navigation}) => {
  const list = [
    {
      name: 'Jay Kumar',
      fatherName: 'Aman Kumar',
      gender: 'M',
      contact: '9974878899',
    },
    {
      name: 'Ravi Kumar',
      fatherName: 'Ajay Kumar Gupta',
      gender: 'M',
      contact: '9974878899',
    },
    {
      name: 'Priya Kumari',
      fatherName: 'Hari Kumar',
      gender: 'F',
      contact: '9974878899',
    },
    {
      name: 'Namrata das',
      fatherName: 'Prem Thakur',
      gender: 'F',
      contact: '9974878899',
    },
    {
      name: 'Raghav jain',
      fatherName: 'Shivang Kumar',
      gender: 'M',
      contact: '9974878899',
    },
  ];
  //function to handle navigation.
  return (
    <ScrollView style={styles.sectionContainer}>
      {list.map((item, index) => (
        <TouchableOpacity
          onPress={() => handleNavigation('Display', navigation, list[index])}
          key={index}>
          <View style={styles.sectionStudent}>
            <Text style={styles.studentText}>{item.name}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    backgroundColor: ColorList.backgroundColor,
    height: '100%',
  },
  sectionStudent: {
    backgroundColor: ColorList.childColor,
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
  studentText: {
    fontSize: 22,
    color: '#f8f9fa',
  },
});

export default List;
