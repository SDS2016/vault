import { StyleSheet, Text, View, Image} from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'

///// screen imports ///////////////////////////
import Home from './Home';
import Profile from './Profile';
import Search from './Search';
import SwiperScreen from './SwiperScreen';
import Bag from './Bag';
import BlankScreen from '@components/BlankScreen';
import SubscriptionPrompt from '@screens/SubscriptionPrompt';
import PaymentScreen from '@screens/PaymentScreen';



////////////// components import /////////////
import SubscriptionDefault from '../../components/SubscriptionDefault';

////////////// assets import /////////////
import HomeTabIcon from '@assets/HomeTab.png';
import SearchTabIcon from '@assets/search.png';
import ProfileTabIcon from '@assets/Profile.png';
import SwiperTabIcon from '@assets/SwiperTab.png';
import BagTabIcon from '@assets/BagTab.png';
import ImageCarouselProductPage from '../ImageCarouselProductPage';
import ProductPage from '../ProductPage';



const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
 




function NavTabs() {
    return (

        
      <Tab.Navigator
      
        
        screenOptions={{
        // headerShown:false,
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
          (<Image style={{height:45, width:45, tintColor:color, resizeMode:'contain', marginLeft:13, }} source={HomeTabIcon}/>)
          
          }}
        />
        <Tab.Screen 
        name="Search" 
        component={Search} 
        options={{
          headerShown:false,
          tabBarIcon: ({ color}) => 
          (<Image style={{height:45, width:45, tintColor:color, resizeMode:'contain' }} source={SearchTabIcon}/>)
          
          }}
        />
        <Tab.Screen 
        name="Profile" 
        component={Profile}
        options={{
          headerShown:false,
          tabBarIcon: ({ color}) => 
          (<Image style={{height:68, width:68, tintColor:color, resizeMode:'contain' }} source={ProfileTabIcon}/>)
          
          }} 
        />
        <Tab.Screen 
        name="Swiper" 
        component={SwiperScreen} 
        options={{
          headerShown:false,
          tabBarIcon: ({ color}) => 
          (<Image style={{height:45, width:45, tintColor:color, resizeMode:'contain' }} source={SwiperTabIcon}/>)
          
          }}
        />
        <Tab.Screen 
        name="Bag" 
        component={Bag}
        options={{
          
          tabBarIcon: ({ color}) => 
          (<Image style={{height:45, width:45, tintColor:color, resizeMode:'contain', marginRight:13,}} source={BagTabIcon}/>)
          
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
        <Stack.Screen 
        name="Product Page" 
        component={ProductPage} 
        options={{
          headerTintColor:"black",
          headerShown:true,
          headerBackTitleVisible:false,
        }}
        />
        <Stack.Screen
        name="Blank Screen"
        component={BlankScreen}
        options={{
          headerTintColor:"black",
          headerShown:true,
          headerBackTitleVisible:false,
        }}/>

        <Stack.Screen
        name="Subscription Prompt"
        component={SubscriptionPrompt}
        options={{
          headerShown:false,
          headerBackTitleVisible:false,
        }}
        />
{/* 
        <Stack.Screen
        name="Payment Screen"
        component={PaymentScreen}
        options={{
          headerShown:true,
          headerBackTitleVisible:false,
        }}/> */}

        <Stack.Screen 
        name="ImageCarouselProductPage"  
        
        component={ImageCarouselProductPage}
        options={{
          title:'',
          headerTintColor:"black",
          headerShown:true,
          headerBackTitleVisible:false,
        }}
        />


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