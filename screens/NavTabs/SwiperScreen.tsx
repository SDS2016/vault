import { StyleSheet, Text, View,Image } from 'react-native'
import Swiper from 'react-native-deck-swiper';
import TabUnderlay from '../../components/TabUnderlay';
import ProductAvailabilityBar from '../../components/ProductAvailabilityBar';
import SmallerTabUnderlay from '../../components/SmallerTabUnderlay';
import React from 'react'

//////// product card buttons /////////////////
import BackButton from '../../components/Buttons/BackButton';
import Heart from '../../components/Buttons/Heart';
import Star from '../../components/Buttons/Star';
import Xbutton from '../../components/Buttons/Xbutton';

////////////////////

import PriceLabel from '../../components/PriceLabel';
import GradingComp from '@components/GradingComp';

const SwiperScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
       <Swiper
            cards={['wjjl', 'kok', 'dfm', 'dmjj', 'Sj', 'UO', 'HPY','sakb']}
            renderCard={(card) => {
                return (
                  <View style={styles.cardContainer}>


                      <View style={styles.card}>

                        <Text
                          style={{  
                            fontFamily:'Helvetica Neue',
                            fontSize:15, 
                            fontWeight:"500",
                            alignSelf:'center', 
                            }}
                        >Air Max 97 “ Obsidian Black ”</Text>
{/* /////////////////////////// everything above product details /////////////////// */}
                        <View
                    style={{  
                      flex:.9,
                      // backgroundColor:'green',
                      }}
                    
                    >

                        <View
                            style={{
                              flex:.6,
                              width:'100%',
                              // backgroundColor:'yellow',
                            }}
                          >
                            <Image
                              style={{
                                height:'100%',
                                width:'100%',
                                resizeMode:'contain',
                              }}
                              source={{uri:'https://www.pngall.com/wp-content/uploads/13/Nike-Shoes-Jordan-PNG-Pic.png'}}
                            />
                        </View>


                                <View
                                style={{
                                  width:'85%',
                                  flexDirection:'row',
                                  justifyContent:'flex-end',
                                  // backgroundColor:'pink',
                                }}
                                >
                                  <Text
                                  style={{  
                                    fontFamily:'Helvetica Neue',
                                    fontSize:15, 
                                    marginBottom:10,
                                    fontWeight:"500", 
                                    }}
                                  >Nike</Text>
                                </View>


                            <View
                              style={{
                                width:'100%',
                                // paddingTop:20,
                                flexDirection:'row',
                                justifyContent:'center',
                                // backgroundColor:'red',
                              }}
                            >
                                
                              <GradingComp/>
                              <PriceLabel
                                price={'$245'}
                              />
                            </View>

                    </View>
                          
                      </View>

                    
{/* ////////////////////////////// all the components after product detail below ////////////////////////////// */}
                      <View style={{ flexDirection:'column', marginBottom:'30%',padding:20, position:'absolute', bottom:10,}}>
                        <View style={{ alignItems:'flex-start', height:40, justifyContent: 'center',}}>
                        <Text 
                        style={{  
                          fontFamily:'Helvetica Neue',
                          fontSize:24, 
                          fontWeight:"500", 
                          }}>Profile Details </Text>
                    </View>



                        <View style={{paddingTop:5, flexDirection:'column',  }}>
                          <Text numberOfLines={4} ellipsizeMode='clip' style={{  fontFamily:'Helvetica Neue',fontSize:15, fontWeight:"400", }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                           </Text>
                        </View>




                        
                      </View>
                      <SmallerTabUnderlay/>
                            <View
                              style={{
                                flexDirection:'row',
                                // marginBottom:20,
                                
                                height:100,
                                position:'absolute',
                                bottom:36,
                                width:'100%',
                                justifyContent:'space-evenly',
                                alignItems:'center',
                                
                              }}
                            >
                              <BackButton/>
                              <Xbutton/>
                              <Heart/>
                              <Star/>
                            </View>
                      <ProductAvailabilityBar/>
                    </View>
                )
            }}
            onSwiped={(cardIndex) => {console.log(cardIndex)}}
            onSwipedAll={() => {console.log('onSwipedAll')}}
            cardIndex={0}
            stackScale={10}
            disableTopSwipe={true}
            disableBottomSwipe={true}
            stackSeparation={10}
            backgroundColor={'#ffffff'}
           >
            
        </Swiper>
        <TabUnderlay/>
    </View>
  )
}

export default SwiperScreen

const styles = StyleSheet.create({


  card: {
    flex: .86,
    borderRadius: 30,
    justifyContent: "center",
    backgroundColor:'white',
    
  },


  cardContainer:{
    flex: .88,

    marginTop:55,
    marginLeft:12,
    marginRight:12,
    borderRadius: 40,
    backgroundColor:'white',
    shadowColor: "#686868",
    shadowOffset: {
      width: 0,
      height: 11,
    },
    shadowOpacity: 0.55,
    shadowRadius: 14.78,

    elevation: 22,

  },


  


})