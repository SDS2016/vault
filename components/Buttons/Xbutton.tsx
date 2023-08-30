import { StyleSheet, Text, View,Image,Animated, TouchableOpacity } from 'react-native'
import React from 'react'

////////////// assets import /////////////
import RedXButton from '@assets/red-x-button.png';

const Xbutton = () => {

  const animation = new Animated.Value(0);
  const inputRange = [0, 1];
  const outputRange = [1, .90];
  const scale = animation.interpolate({inputRange, outputRange});

  const onPressIn = () => {
    Animated.spring(animation, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };
  const onPressOut = () => {
    Animated.spring(animation, {
      toValue: 0,
      useNativeDriver: true,
    }).start();
  };



  return (
    // <View
    // style={{
        
    //   height:63,
    //   width:63,
    //     // paddingTop:8,
    //     borderRadius:40,
    //     justifyContent:'center',
    //     alignItems:'center',
    //     backgroundColor:'white',
    //     shadowColor: "#000",
    //     shadowOffset: {
    //         width: 0,
    //         height: 6,
    //     },
    //     shadowOpacity: 0.37,
    //     shadowRadius: 7.49,

    //     elevation: 12,
    // }}
    // >
      <Animated.View style={[styles.button, {transform: [{scale}]}]}>
        <TouchableOpacity
         activeOpacity={1}
         onPressIn={onPressIn}
         onPressOut={onPressOut}
        >
         <Image
            style={{
                height:40,
                width:40,
                resizeMode:'contain',
                
                
            }}
            source={RedXButton}
            />
            
            </TouchableOpacity>

      </Animated.View>
    
  )
}

export default Xbutton

const styles = StyleSheet.create({

  button:{
    height:63,
      width:63,
        // paddingTop:8,
        borderRadius:40,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,

        elevation: 12,
  },
})