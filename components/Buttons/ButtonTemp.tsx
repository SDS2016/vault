import { StyleSheet, Text, View,Image, Pressable,  } from 'react-native'
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

    <Pressable
    
    style={[{
        height:65,
        width:65,
        borderRadius:100,
        justifyContent:'center',
        alignItems:'center',borderRadius:100, backgroundColor }]}
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
             height:40,
             width:40,
             
             resizeMode:'cover',
             tintColor:'white',
            
            }}
            source={source}

            />
        {/* </View> */}
    </Pressable>
  )
}

export default ButtonTemp

const styles = StyleSheet.create({})