import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './Screens/HomeScreen';
import MapScreen from './Screens/MapScreen';
import {Fontisto, AntDesign} from '@expo/vector-icons'
import ProductInfo from './Screens/ProductInfo';
import TabNavi from './Components/TabNavi'





function App() {
  return (
    <NavigationContainer>
      <TabNavi/>
      
{/*       <Tab.Navigator initialRouteName='Home' screenOptions={{headerShown: false}}>

        <Tab.Screen name="Home" component={HomeScreen} 
        options= {{

          tabBarIcon: ({ tintColor}) => (
            <AntDesign name="home" size={24} />
          ),
          }} />
       

        <Tab.Screen 
          name="Favorites" component={ProductInfo} 
          options= {{
          tabBarShowLabel: false, //piilotus, mutta ei toimi
          tabBarIcon: ({ tintColor}) => (
          <AntDesign name="heart" size={24} />
            ),
            }}   />  
          

        <Tab.Screen name="Map" component={MapScreen} 
          options= {{
          title: 'map',
          headerTitle: 'Map',
          tabBarIcon: ({ tintColor}) => (
            <Fontisto name="world-o" size={24} />
          ),
          }}  />  
       
      </Tab.Navigator>   */}

    </NavigationContainer>
  );
}
export default App;