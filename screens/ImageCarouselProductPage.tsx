import { StyleSheet, Text, View, Image } from 'react-native';
import PriceLabel from '../components/PriceLabel';
import Swiper from 'react-native-swiper';
import React from 'react';

const ImageCarouselProductPage = ({navigation,route}) => {
  const productImages = route.params.images;

  return (
    <View 
      style={{
        flex:1,

        // justifyContent:'center',
        alignItems:'center',
        backgroundColor:'white',
      }}
      >
      <View
        style={{
          flex:.4,
          width:'100%',
          marginTop:'20%',
          // backgroundColor:'green',
        }}
      >

      <View style={styles.productHighlight}>
        <Swiper style={styles.wrapper} showsButtons={false} activeDotColor={"black"}>
            {productImages.map((image,index)=>{
              return(

                <View style={styles.slide1} key={index}>
                  <Image source={{uri:image}} style={{height:'80%', width:'80%'}}/>
                </View>
              )
            })}
        </Swiper>
      </View>


      </View>
      
    </View>
  )
}

export default ImageCarouselProductPage

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
  productHighlight: {
    height: 250,
    // padding: 5,
    width: '100%',
    marginTop:50,
    marginBottom:10,
  },
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})