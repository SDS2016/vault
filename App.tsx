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
import { BottomSheetModal, BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './screens/Auth/AuthStack';
import ProductPage from './screens/ProductPage';
import ImageCarouselProductPage from './screens/ImageCarouselProductPage';
import SubscriptionPrompt from './screens/SubscriptionPrompt';
import MainNav from '@screens/NavTabs/MainNav';
import BlankScreen from '@components/BlankScreen';
import BagTotal from './screens/BagTotal';
import 'react-native-gesture-handler';




function App(): JSX.Element {

  return (
    // <BottomSheetModalProvider>
      <NavigationContainer>
        <MainNav/>
      </NavigationContainer>
    // </BottomSheetModalProvider>
  );
}

const styles = StyleSheet.create({
 
});

export default App;
