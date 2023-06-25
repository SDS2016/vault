import { StyleSheet, Text, View } from 'react-native'
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

const SwiperScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor:'green', }}>
       <Swiper
            cards={['wjjl', 'kok', 'gdfl', 'dkd', 'MlKS', 'YUO', 'HPY']}
            renderCard={(card) => {
                return (
                  <View style={styles.cardContainer}>
                      <View style={styles.card}>
                          <Text style={styles.text}>{card}</Text>
                      </View>
                      <View style={{ flexDirection:'column', marginBottom:'30%',padding:20, position:'absolute', bottom:10,}}>
                        <View style={{ alignItems:'flex-start', height:40, justifyContent: 'center',}}>
                        <Text style={{  fontFamily:'Helvetica Neue',fontSize:24, fontWeight:"500", }}>Profile Info </Text>
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
                                // backgroundColor:'red',
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


  text: {
    textAlign: "center",
    fontSize: 50,
    backgroundColor: "orange",
  }


})