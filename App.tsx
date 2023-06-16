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
import MainNav from './screens/NavTabs/MainNav';
import 'react-native-gesture-handler';





function App(): JSX.Element {

  return (
    <NavigationContainer>
     <MainNav/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
 
});

export default App;
