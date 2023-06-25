import { StyleSheet, Text, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import React from 'react'

const SmallerTabUnderlay = () => {
  return (
    <LinearGradient
    
    locations={[0.7,0.5,0.2, 0.1]}
    colors={['#ffffff','#ffffffd2', '#ffffff26', '#ffffff00']}
    style={{
        width:'100%',
        height:230,
        position:'absolute',
        bottom:40,


        }}
    >
        {/* <View
        style={{
        width:'100%',
        height:100,


        }}
        >
        
        </View> */}
    </LinearGradient>
  )
}

export default SmallerTabUnderlay

const styles = StyleSheet.create({})