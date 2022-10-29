import * as React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, Text, View } from 'react-native';
import Styles from '../Styles';
import * as Location from 'expo-location'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState, useEffect } from 'react';

export default function MapScreen() {

const [latitude, setLatitude] = useState(0)
const [longitude, setLongitude] = useState(0)


useEffect(() => {
  (async () => {
    let {status} = await Location.requestForegroundPermissionsAsync();
    
    if (status!== 'granted') {
      alert("Geolocation failed.");
      return;
    
  }

  
  })


}, [])

  return (
    <View style={Styles.container}>
    <MapView style={Styles.map} />
  </View>
  )
}