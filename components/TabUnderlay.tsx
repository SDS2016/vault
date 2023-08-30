import { StyleSheet, Text, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import React from 'react'

const TabUnderlay = () => {
  return (
    <LinearGradient
    
    locations={[0.7,0.5,0.2, 0.1]}
    colors={['#ffffff','#ffffffd2', '#ffffff26', '#ffffff00']}
    style={{
        width:'100%',
        height:210,
        position:'absolute',
        bottom:0,


        }}
    >
       
    </LinearGradient>
  )
}

export default TabUnderlay

const styles = StyleSheet.create({


})