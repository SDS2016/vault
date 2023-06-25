import { Image, StyleSheet, Text, View, } from 'react-native'
import ProductAvailabilityBar from './ProductAvailabilityBar'
import React from 'react'

export default function ProductCard() {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}> 
              
              <View style={{height:"80%",  alignItems:'center', }}>
                <Text style={{fontFamily:'Helvetica Neue',fontSize:13, fontWeight:'500', marginBottom:5, marginTop:5, alignSelf:'center',}}>Air Jordan</Text>
                  
                  <View style={{marginTop:10,height:"50%", width:"100%",}}>
                    <Image
                    style={{ height:90, width:120}}
                    source={{uri:'https://cdn.shopify.com/s/files/1/0615/7588/9034/products/air-jordan-11-retro-cherry-2022-1-1000.png?v=1671011464&width=533'}}
                    />
                  </View>


                      <View style={{ marginRight:'3%', marginLeft:'3%',alignItems:'center', paddingBottom:5, borderBottomColor:'#d1d1d1', borderBottomWidth:2,}}>
                        <Text numberOfLines={1} ellipsizeMode='clip' 
                        style={{
                          marginTop:10, 
                          marginRight:7, 
                          marginLeft:7,
                          fontSize:12, 
                          marginBottom:5, 
                          alignSelf:'center',
                          fontFamily:'Helvetica Neue',
                          }}>
                          Jordan 1 high patentsojfnvkjfnv jlksvassfgvfdkv fsdlm dsnmslkm  </Text>
                      </View>

                     <View style={{flex: 1, height: 1, backgroundColor: 'black'}} ></View>
              </View>
                      <View style={{ width:'100%',alignItems:'center', justifyContent:'center',marginBottom:12,}}>
                        <Text style={{fontFamily:'Helvetica Neue',fontSize:12, color:'#bababa',fontWeight:'400'}}>Retail Price</Text>
                        <Text style={{fontFamily:'Helvetica Neue',paddingTop:3, fontSize:22, fontStyle:'italic', fontWeight:'900', }}>$250</Text>
                      </View>
      </View>
      <ProductAvailabilityBar/>
    </View>
  )
}

const styles = StyleSheet.create({

    container:{
        minHeight:215, 
        minWidth:150,
        maxHeight:300, 
        maxWidth:165,
        borderRadius:20,
        backgroundColor:'#f2f2f2',
        justifyContent:'center',
        alignItems:'center',
        shadowColor: "#7c7c7c",
        shadowOffset: {
            width: 0,
            height: 9,
        },
        shadowOpacity: 0.50,
        shadowRadius: 12.35,

        elevation: 19,

    },

    innerContainer:{
      flexDirection:'column',
      height:'95%', 
      width:'90%',
      borderRadius:15,
      backgroundColor:'white',
      padding:5,
      alignItems:'center',

    },


})