/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import 'react-native-gesture-handler';
import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from '@screens/Auth/AuthStack';
import ProductPage from './screens/ProductPage';
import ImageCarouselProductPage from './screens/ImageCarouselProductPage';
import SubscriptionPrompt from './screens/SubscriptionPrompt';
import MainNav from '@screens/NavTabs/MainNav';
import BlankScreen from '@components/BlankScreen';
import BagTotal from './screens/BagTotal';
// import 'react-native-gesture-handler';
import BagProductCheckout from '@components/BagProductCheckout';
import Toast from 'react-native-toast-message';
import Config from "react-native-config";
import { StripeProvider } from '@stripe/stripe-react-native';

import BottomSheetTemp from '@components/BottomSheetTemp';

import ModalSheetTemp from '@components/ModalSheetTemp';

import TestBlank from '@components/TestBlank';

import Testing from '@components/Testing';
//////// Modal imports ////////////////
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import {GestureHandlerRootView }from 'react-native-gesture-handler';



function App(): JSX.Element {

  return (
    <StripeProvider
      publishableKey={Config.STRIPE_API_KEY}
    >
        <GestureHandlerRootView style={{ flex: 1 }}>
          <BottomSheetModalProvider>
           <NavigationContainer>
                  {/* <ModalSheetTemp/>      */}
                <MainNav/>
               <Toast/>
            </NavigationContainer>
          </BottomSheetModalProvider>
        </GestureHandlerRootView>
    </StripeProvider>
    // <Testing/>

    
    
    
  );
}

const styles = StyleSheet.create({
 
});

export default App;
