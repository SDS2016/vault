import { StyleSheet, Text, View, Image } from 'react-native'
import PriceLabel from '../components/PriceLabel'
import React from 'react'

const ImageCarouselProductPage = () => {
  return (
    <View 
      style={{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        // backgroundColor:'blue',
      }}
      >
      <View
        style={{
          flex:.4,
          width:'100%',
          // backgroundColor:'green',
        }}
      >

        <Image
          style={{
            height:'100%',
            width:'100%',
            resizeMode:'contain',
          }}
          source={{uri:'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/wohf5k8sjdmgogckoczk/air-jordan-1-mid-shoes-D8g1Qq.png'}}
        />


      </View>
      <PriceLabel/>
    </View>
  )
}

export default ImageCarouselProductPage

const styles = StyleSheet.create({})