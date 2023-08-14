import { StyleSheet, Text, View,Image, Pressable,TouchableOpacity  } from 'react-native'
import { useState } from 'react';
import React from 'react'


const ButtonTemp = ({source}) => {

    const [backgroundColor, setBackgroundColor] = useState('');

    const onPressInHandler = () => {
        setBackgroundColor('white');
      };
    
      const onPressOutHandler = () => {
        setBackgroundColor('black');
      };

  return (

    <TouchableOpacity

    activeOpacity={.8}
    
    style={[{
        height:52,
        width:52,
        padding:8,
        borderRadius:100,
        justifyContent:'center',
        alignItems:'center',
        borderColor:'#c3c3c3', 
        borderWidth:2,
        backgroundColor:'white' }]}
    onPressIn={onPressInHandler}
    onPressOut={onPressOutHandler}
    >
        {/* <View

        style={{
            height:65,
            width:65,
            borderRadius:100,
            justifyContent:'center',
            alignItems:'center',
            backgroundColor:{backgroundColor},
        }}
        > */}
            <Image
            style={{
             height:30,
             width:30,
             resizeMode:'contain',
             tintColor:'black',
            
            }}
            source={source}

            />
        {/* </View> */}
    </TouchableOpacity>
  )
}

export default ButtonTemp

const styles = StyleSheet.create({})