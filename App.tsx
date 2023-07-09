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
<<<<<<< HEAD
import AuthStack from './screens/Auth/AuthStack';
import ProductPage from './screens/ProductPage';
import ImageCarouselProductPage from './screens/ImageCarouselProductPage';
import SubscriptionPrompt from './screens/SubscriptionPrompt';
import MainNav from './screens/NavTabs/MainNav'
import BagTotal from './screens/BagTotal';

=======
import MainNav from '@screens/NavTabs/MainNav';
import AuthStack from '@screens/Auth/AuthStack';
import LoginSignUp from '@screens/Auth/LoginSignUp';
import 'react-native-gesture-handler';
>>>>>>> 374425da7374c030c9657d81100bd387457ca064




function App(): JSX.Element {

  return (
    <NavigationContainer>
<<<<<<< HEAD
=======
      {/* <AuthStack/> */}
>>>>>>> 374425da7374c030c9657d81100bd387457ca064
      <MainNav/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
 
});

export default App;
