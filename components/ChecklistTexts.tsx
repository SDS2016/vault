import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

const ChecklistTexts = ({text}) => {
  return (
    <View
    style={{
        justifyContent:'flex-start',
        alignItems:'center',
        flexDirection:'row',
        width:'90%',
        // backgroundColor:'red',
        marginTop:20,
        marginBottom:20,
    }}
>

    <View
        style={{
            alignItems:'flex-start',
            marginRight:10,
        }}
    >
        <Image
        style={{
            height:40,
            width:40,
            resizeMode:'contain',
        }}
        source={require('/Users/ericfreeman/vaultApp/assets/check.png')}
        />
        
    </View>
        <Text style={styles.checklist}>{text}</Text>
</View>


  )
}

export default ChecklistTexts

const styles = StyleSheet.create({

    checklist:{
        fontFamily:'Helvetica Neue',
        fontWeight:"500",
        fontSize:20, 
        color:'white',
    },

})