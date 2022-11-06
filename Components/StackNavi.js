import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import ProductInfo from '../Screens/ProductInfo';
import Styles, { COLOURS } from '../Styles'

export default function StackNavi() {

    const Stack = createStackNavigator()

  return (
<Stack.Navigator>
    <Stack.Screen name= "ProductInfo" component= {ProductInfo}/>
</Stack.Navigator>

  )
}