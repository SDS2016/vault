/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import MainNav from '@screens/NavTabs/MainNav';
import AuthStack from '@screens/Auth/AuthStack';
import LoginSignUp from '@screens/Auth/LoginSignUp';
import 'react-native-gesture-handler';




function App(): JSX.Element {

  return (
    <NavigationContainer>
      {/* <AuthStack/> */}
      <MainNav/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
 
});

export default App;
