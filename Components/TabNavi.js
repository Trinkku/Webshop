import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../Screens/HomeScreen'
import MapScreen from '../Screens/MapScreen'
import {Fontisto, AntDesign} from '@expo/vector-icons'
import StackNavi from '../Components/StackNavi'




export default function TabNavi() {

  const Tab = createBottomTabNavigator()


  return (
<Tab.Navigator screenOptions={{headerShown: false}}>
  
  <Tab.Screen name="Home" component={HomeScreen} 
          options= {{
            tabBarIcon: ({ tintColor}) => (
              <AntDesign name="home" size={24} />
            ),
            }} />

  <Tab.Screen name="Map" component={MapScreen} 
            options= {{
            tabBarIcon: ({ tintColor}) => (
              <Fontisto name="world-o" size={24} />
            ),
            }}  />  
{/*     <Tab.Screen name = "test" component={StackNavi}  options={{headerShown: false}}/> */}
</Tab.Navigator>
  )
}