import { StyleSheet, Text, View } from 'react-native'
import Swiper from 'react-native-deck-swiper';
import TabUnderlay from '../../components/TabUnderlay';
import React from 'react'

const SwiperScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor:'green', }}>
       <Swiper
            cards={['wjj', 'oop', 'mkk', 'djay', 'MAKES', 'YOU', 'HAPPY']}
            renderCard={(card) => {
                return (
                  <View style={styles.cardContainer}>
                    <View style={styles.card}>
                        <Text style={styles.text}>{card}</Text>
                    </View>
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
    backgroundColor: "transparent",
  }


})