import { StyleSheet, Text, View, Image, Pressable,} from 'react-native'
import React from 'react'
import { useState } from 'react';


const TintColorButtonTemplate = ({source}) => {

    const [backgroundColor, setBackgroundColor] = useState('green');

    const onPressInHandler = () => {
      setBackgroundColor('black');
    };
  
    const onPressOutHandler = () => {
      setBackgroundColor('white');
    };


  return (

<Pressable 
    style={[{ backgroundColor }]}
    onPressIn={onPressInHandler}
    onPressOut={onPressOutHandler}
>
        <View
        style={{
        height:50,
        width:50,
        borderRadius:190,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:{backgroundColor},
        }}
        >
        <Image
        style={{
        height:60,
        width:60,
        borderRadius:190,
        resizeMode:'cover',
        tintColor:'white',
       


        }}
        source={source}
        />
        </View>
</Pressable>

  )
}

export default TintColorButtonTemplate

const styles = StyleSheet.create({})