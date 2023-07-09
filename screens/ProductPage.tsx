import { StyleSheet, Text, View, SafeAreaView,Image } from 'react-native'

import React from 'react'

const ProductPage = () => {
  return (
    <View style={styles.container}>
        
            <View style={styles.productContainer}>
                
                <View
                style={{
                    marginTop:100,
                    height:80,
                    width:80,
                    paddingTop:8,
                    borderRadius:50,
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
                }}
                >
                     <Image
                        style={{
                            height:70,
                            width:70,
                        }}
                        source={require('/Users/ericfreeman/vaultApp/assets/heart-button.png')}
                        />
                </View>
                
            </View>
        
    </View>
  )
}

export default ProductPage

const styles = StyleSheet.create({
 container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    
 },

 productContainer:{
    height:'94%',
    width:'94%%',
    margin:40,
    borderRadius:25,
    position:'absolute',
    alignItems:'center',
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
    backgroundColor:'white',
 },


})