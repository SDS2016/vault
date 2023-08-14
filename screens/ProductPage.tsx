import React, { useEffect } from 'react';
import { StyleSheet, Text, View, SafeAreaView,Image, ScrollView } from 'react-native'
import PriceLabel from '@components/PriceLabel'
import GradingComp from '@components/GradingComp'
import RoundActionButton from '@components/Buttons/RoundActionButton'
import FormatCurrency from '@utils/utils';


import ButtonTemp from '@components/Buttons/ButtonTemp';

////////////// import vault logo /////////////
import HeartButton from "@assets/heart-button.png";

import SizeButton from '@components/SizeButton';

const ProductPage = ({navigation,route}) => {
  const product = route.params.product;

  const changeTitle = () => {
    navigation.setOptions({
      title: product.name, // Replace 'New Title' with your desired new title

    });
  };

  useEffect(() => {
    changeTitle();
  },[]);

  return (


    <View
      style={styles.container}>

            <View
            style={{
                flex:.4,
                width:'100%',
                backgroundColor:'white',
            }}
            >

                  <View
                      style={{
                        flex:.8,
                        width:'100%',
                        height:300,
                        backgroundColor:'white',
                        padding:10,
                        marginTop:15,
                      }}      
                  >
                    <Image
                      style={{
                        resizeMode:'contain',
                        height: '100%',
                        width: '100%',
                        // marginTop:50,
                        // marginBottom:10,
                      }}
                      source={{uri:product.images[0]}}
                    />
                    </View>
            </View>


              <View
              style={{
                  flex:.6,
                  width:'100%',
                  //  justifyContent:'center',
                  alignItems:'center',
                  backgroundColor:'white',
                  padding:18,
              }}
              >

                  <View
                  style={{
                      width:'100%',
                      flexDirection:'row',
                      justifyContent:'space-between',
                      borderBottomColor:'black',
                      paddingBottom:15,
                      borderBottomWidth:5,
                      marginBottom:5,
                      // backgroundColor:'pink',
                      alignItems:'center',

                  }}
                  >
                  <PriceLabel price={FormatCurrency(product.default_price.unit_amount/100,product.default_price.currency)}/>

                
{/* ///////////////// share , like, favorites button container///////// */}
                <View 
                  style={{
                    flex:1,
                    flexDirection:'row',
                    justifyContent:'space-evenly',
                    // backgroundColor:'blue',
                    marginLeft:11,
                    marginRight:11,
                  }}
                  >
                  <ButtonTemp
                  source={require('/Users/ericfreeman/vaultApp/assets/buttonStar.png')}
                  />

                  <ButtonTemp
                  source={require('/Users/ericfreeman/vaultApp/assets/buttonHeart.png')}
                  />
                  
                  <ButtonTemp
                  source={require('/Users/ericfreeman/vaultApp/assets/buttonShare.png')}
                  />
                  </View>


{/* ////////////////////////////////////////////////////// */}
                  </View>


          

                  {/* <GradingComp/> */}

                  <View
                  style={{
                    flexDirection:'row',
                    width:'100%',
                    height:80,
                    justifyContent:'space-between',
                    // backgroundColor:'green',
                  }}
                  >
                    <View
                    style={{
                      height:80,
                      width:170,
                      // backgroundColor:'pink',
                      flexDirection:'column-reverse',

                    }}
                    >
                      <SizeButton onPress={''} title={'Size'}/>
                    </View>
                  <GradingComp/>
                  </View>

                  <RoundActionButton title={'ADD'} product={product}/>
                  
                  <View 
                  style={{ 
                      flexDirection:'column',
                      marginTop:15, 
                      // marginBottom:'30%',
                      padding:5, 
                      // bottom:20,
                      // position:'absolute', 
                      // backgroundColor:'yellow',
                      }}>
                          <View 
                          style={{ 
                              alignItems:'flex-start', 
                              height:40, 
                              justifyContent: 'center',
                              }}>

                          <Text 
                          style={{  
                            fontFamily:'Helvetica Neue',
                            fontSize:24, 
                            fontWeight:"500", 
                            }}>Product Details</Text>

                          {/* <Text 
                          style={{  
                            fontFamily:'Helvetica Neue',
                            fontSize:24, 
                            fontWeight:"500", 
                            }}>{product.name}</Text> */}


                      </View>

                        <ScrollView showsVerticalScrollIndicator={true} style={{ flexDirection:'column',  }}>
                            <Text  ellipsizeMode='clip' style={{  fontFamily:'Helvetica Neue',fontSize:15, fontWeight:"400", }}>
                            {product.description}, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                            </Text>
                        </ScrollView>
                        
                  </View>


              </View>



        
      </View>



  )
}

export default ProductPage

const styles = StyleSheet.create({
 container:{
    flex:1,
    // alignItems:'center',
    // justifyContent:'center',
    
 },

//  productContainer:{
//     height:'90%',
//     width:'94%%',
//     // margin:40,
//     marginTop:'10%',
    
//     borderRadius:25,
//     position:'absolute',
//     alignItems:'center',
//     shadowColor: "#000",
//     shadowOffset: {
//         width: 0,
//         height: 5,
//     },
//     shadowOpacity: 0.34,
//     shadowRadius: 6.27,

//     elevation: 10,
//     backgroundColor:'white',
//  },


})