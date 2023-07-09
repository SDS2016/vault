import { Image, StyleSheet, Text, View, } from 'react-native'
import ProductAvailabilityBar from './ProductAvailabilityBar'
import FormatCurrency from '@utils/utils';
import React from 'react'

const ProductCard =(props)=> {
  let product = props.productInfo.item;
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}> 
              
              <View style={{height:"75%",  alignItems:'center', }}>
                <Text style={{fontFamily:'Helvetica Neue',fontSize:13, fontWeight:'500', marginBottom:5,  alignSelf:'center',}}>
                    {product.name}
                  </Text>
                  

                  <View style={{marginTop:2,marginBottom:12,height:"50%", width:"100%",}}>
                    <Image
                    style={{ height:90, width:120}}
                    source={{uri:product.images[0]}}
                    />
                  </View>


                      <View 
                      style={{ 
                        width:'100%',
                        // marginRight:'3%', 
                        // marginLeft:'3%',
                        alignItems:'center', 
                        paddingBottom:5, 
                        borderBottomColor:'#d1d1d1', 
                        borderBottomWidth:2,
                      //  backgroundColor:'green',
                      }}>
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
                            {product.description}
                          </Text>
                      </View>

                     <View style={{flex: 1, height: 1, backgroundColor: 'pink'}} ></View>
              </View>


              <View 
              style={{ 
                width:'100%',
                alignItems:'center', 
                justifyContent:'center',
                // backgroundColor:'red',
                }}>
                <Text style={{fontFamily:'Helvetica Neue',fontSize:12, color:'#bababa',fontWeight:'400'}}>Retail Price</Text>
                <Text style={{fontFamily:'Helvetica Neue',paddingTop:3, fontSize:22, fontStyle:'italic', fontWeight:'900', }}>{FormatCurrency(product.default_price.unit_amount/100,product.default_price.currency)}</Text>
              </View>


      </View>
      <ProductAvailabilityBar/>
    </View>
  )
}

export default ProductCard;

const styles = StyleSheet.create({

    container:{
        // minHeight:215, 
        // minWidth:150,
        // maxHeight:280, 
        // maxWidth:170,
        minHeight:215, 
        minWidth:165,
        maxHeight:280, 
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
      height:'93%', 
      width:'90%',
      borderRadius:15,
      backgroundColor:'white',
      padding:5,
      alignItems:'center',
      // backgroundColor:'pink',
    },


})