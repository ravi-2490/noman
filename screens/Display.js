import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import ColorList from '../components/ColorList';

const Display = ({route, navigation}) => {
  const {name, fatherName, contact, gender} = route.params;
  return (
    <View style={styles.sectionContainer}>
      <View style={styles.sectionInfo}>
        <View style={styles.sectionImage}>
          {gender == 'M' ? (
            <Image
              source={require('../public/images/man.png')}
              style={styles.image}
            />
          ) : (
            <Image
              source={require('../public/images/woman.png')}
              style={styles.image}
            />
          )}
        </View>
        <View style={styles.sectionDescription}>
          <Text style={styles.descriptionText}> {name}</Text>
          <Text style={styles.descriptionText}>
            {gender == 'M' ? <Text>S/O</Text> : <Text>D/O</Text>} {fatherName}
          </Text>
          <Text style={styles.descriptionText}>
            {' '}
            {gender == 'M' ? <Text>Male</Text> : <Text>Female</Text>}
          </Text>
          <Text style={styles.descriptionText}> {contact}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    backgroundColor: ColorList.backgroundColor,
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
  sectionInfo: {
    backgroundColor: ColorList.childColor,
    width: '100%',
    height: '60%',
    borderWidth: 2,
    borderRadius: 12,
    borderColor: ColorList.childColor,
    elevation: 2,
  },
  sectionImage: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  image: {
    height: 200,
    width: 200,
  },
  sectionDescription: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  descriptionText: {
    color: ColorList.textColor,
    fontSize: 24,
    marginVertical: 8,
    fontWeight: '600',
  },
});

export default Display;
