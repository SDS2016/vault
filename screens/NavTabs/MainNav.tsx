import { StyleSheet, Text, View, Image} from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'


///// screen imports ///////////////////////////
import Home from './Home';
import Profile from './Profile';
import Search from './Search';
import Swiper from './Swiper';
import Bag from './Bag';



const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
 




function NavTabs() {
    return (

        
      <Tab.Navigator
      
        
        screenOptions={{
        headerShown:false,
        tabBarActiveTintColor: 'black',
        tabBarShowLabel:false,
        tabBarStyle: {
            marginLeft:18,
            marginRight:18,
            borderRadius:37,
          height:95,
          marginBottom: 20,
          //marginBottom:10,
          position:'absolute',
          backgroundColor:'#e8e8e865',
          alignContent:'center',
        //   paddingTop:20,
        paddingBottom:0,
        
          

        },
        }}
      
      >
        <Tab.Screen 
        name="Home" 
        component={Home} 
        options={{
          headerShown:false,
          
          tabBarIcon: ({ color}) => 
          (<Image style={{height:45, width:45, tintColor:color, resizeMode:'contain', marginLeft:13, }}source={require('/Users/ericfreeman/vaultApp/assests/HomeTab.png')}/>)
          
          }}
        />
        <Tab.Screen 
        name="Search" 
        component={Search} 
        options={{
          headerShown:false,
          tabBarIcon: ({ color}) => 
          (<Image style={{height:45, width:45, tintColor:color, resizeMode:'contain' }}source={require('/Users/ericfreeman/vaultApp/assests/search.png')}/>)
          
          }}
        />
        <Tab.Screen 
        name="Profile" 
        component={Profile}
        options={{
          headerShown:false,
          tabBarIcon: ({ color}) => 
          (<Image style={{height:68, width:68, tintColor:color, resizeMode:'contain' }}source={require('/Users/ericfreeman/vaultApp/assests/Profile.png')}/>)
          
          }} 
        />
        <Tab.Screen 
        name="Swiper" 
        component={Swiper} 
        options={{
          headerShown:false,
          tabBarIcon: ({ color}) => 
          (<Image style={{height:45, width:45, tintColor:color, resizeMode:'contain' }}source={require('/Users/ericfreeman/vaultApp/assests/SwiperTab.png')}/>)
          
          }}
        />
        <Tab.Screen 
        name="Bag" 
        component={Bag}
        options={{
          headerShown:false,
          tabBarIcon: ({ color}) => 
          (<Image style={{height:45, width:45, tintColor:color, resizeMode:'contain', marginRight:13,}}source={require('/Users/ericfreeman/vaultApp/assests/BagTab.png')}/>)
          
          }} 
        />
        
      </Tab.Navigator>

    );
  }



function AppScreens() {
    return (
      <Stack.Navigator
      
      screenOptions={{
        headerShown:false
        
    }}
      >
        <Stack.Screen name="NavTabs" component={NavTabs}/>
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Bag" component={Bag} />
      </Stack.Navigator>
    );
  }



const MainNav = () => {
  return (
   <AppScreens/>
   
   
      
  )
}

export default MainNav

const styles = StyleSheet.create({})