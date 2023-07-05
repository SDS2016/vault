import { StyleSheet, Text, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import React from 'react'

const AuthWhiteOverlay = () => {
  return (
    <LinearGradient
    
    start={{x:.5, y:1}}
    end={{x:.5, y:0.57}}
    colors={['#ffffff00','#ffffff26','#ffffffd2', '#ffffff']}
    style={{
        width:'100%',
        height:'95%',
        position:'absolute',
        top:0,
        zIndex:0,


        }}
    >
        </LinearGradient>
  )
}

export default AuthWhiteOverlay

const styles = StyleSheet.create({



    
})