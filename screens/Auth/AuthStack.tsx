import { StyleSheet, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'

////////////// Auth Stack imported screens ////////////////////////////

import LoginSignUp from './LoginSignUp';
import SignUpOne from './SignUpOne';
import SignUpTwo from './SignUpTwo';
import SignUpThree from './SignUpThree';
import ForgotPassword from './ForgotPassword';


const  Stack = createStackNavigator();


const AuthStack = () => {

  return (
 
    <Stack.Navigator
        screenOptions={{
             headerStyle: { backgroundColor: 'black',  },
            // headerLeft:{},
            headerBackTitleVisible:false,
            // headerTitle:true,
            headerTintColor:"white",
            title:"",
            headerShown:false,
            // headerLargeStyle:true,
        }}
      >
      <Stack.Screen options={{headerShown:false}} name="LoginSignUp" component={LoginSignUp} />
      <Stack.Screen name="SignUpOne"  component={SignUpOne} />
      <Stack.Screen name="SignUpTwo"  component={SignUpTwo} />
      <Stack.Screen name="SignUpThree"  component={SignUpThree} />
      <Stack.Screen name="ForgotPassword"  component={ForgotPassword} />
    </Stack.Navigator>
    
  );
}

export default AuthStack

const styles = StyleSheet.create({})