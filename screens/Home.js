import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {handleNavigation} from '../components/HelperFunction';
const Home = ({navigation}) => {
  return (
    <View style={styles.sectionContainer}>
      <View style={styles.sectionImage}>
        <Image
          source={require('../public/images/Home.png')}
          style={styles.image}
        />
      </View>
      <View style={styles.section}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleNavigation('Enroll', navigation, {})}>
          <Text style={styles.buttonText}>Enroll Member</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleNavigation('List', navigation, {})}>
          <Text style={styles.buttonText}>List member</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    backgroundColor: '#023e8a',
    height: '100%',
  },
  section: {marginBottom: 22},
  sectionImage: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  image: {
    height: 400,
    width: 400,
  },
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

export default Home;
