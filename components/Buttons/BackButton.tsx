import { StyleSheet, Text, View,Image, Animated ,TouchableWithoutFeedback } from 'react-native'
import React from 'react'


////////////// assets import /////////////
import BackArrowButton from '@assets/black-arrow-button.png';

const BackButton = (props) => {

  const { onPress, text, icon } = props

  const animatedValue = new Animated.Value(0)

  const animatedValueInterpolateScale = animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [1,0.90]
  })

  const pressInHandler = () => {
      Animated.timing(
          animatedValue,
          {
              toValue: 1,
              duration: 150,
              useNativeDriver:true
          }
      ).start()
  }

  const pressOutHandler = () => {
      Animated.timing(
          animatedValue,
          {
              toValue: 0,
              duration: 150,
              useNativeDriver:true
          }
      ).start()
  }


  return (


    <TouchableWithoutFeedback onPress={onPress} onPressIn={pressInHandler} onPressOut={pressOutHandler}>
    <Animated.View
    style={{
        
        height:55,
        width:55,
        // paddingTop:8,
        borderRadius:50,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#ffffff',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        elevation: 12,
        overflow: 'visible', 
        transform: [{ scaleX: animatedValueInterpolateScale }, { scaleY:  animatedValueInterpolateScale }] 
    }}
    >
         <Image
            style={{
                height:40,
                width:40,
                resizeMode:'contain',
                
                
            }}
            source={BackArrowButton}
            />
    </Animated.View>
    </TouchableWithoutFeedback>
  )
}

export default BackButton

const styles = StyleSheet.create({})