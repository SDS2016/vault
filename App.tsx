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
import AuthStack from './screens/Auth/AuthStack';
import ProductPage from './screens/ProductPage';
import ImageCarouselProductPage from './screens/ImageCarouselProductPage';
import SubscriptionPrompt from './screens/SubscriptionPrompt';
import MainNav from './screens/NavTabs/MainNav'
import BagTotal from './screens/BagTotal';





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
