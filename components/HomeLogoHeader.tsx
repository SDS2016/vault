import { StyleSheet,Image,Text, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import React from 'react'

////////////// import vault logo /////////////
import VaultBlkLogo from "@assets/vault-blk-logo.png";

const HomeLogoHeader = () => {
  return (
    
    <LinearGradient
    
    start={{x:.5, y:1}}
    end={{x:.5, y:0.3}}
    colors={['#ffffff00','#ffffff26','#ffffffd2', '#ffffff']}
    style={{
        width:'100%',
        height:300,
        position:'absolute',
        top:0,
        zIndex:1,


        }}
    >
        <View
        style={{
        width:'100%',
        height:'100%',
        justifyContent:'center',
        alignItems:'center',


        }}
        >
            <Image
            style={{
                width:100,
                height:50,
                marginBottom:100,
                }}
            source={VaultBlkLogo}
            />
        
        </View>
        
    </LinearGradient>
    
  )
}

export default HomeLogoHeader

const styles = StyleSheet.create({})