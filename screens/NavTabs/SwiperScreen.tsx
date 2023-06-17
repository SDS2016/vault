import { StyleSheet, Text, View } from 'react-native'
import Swiper from 'react-native-deck-swiper';
import React from 'react'

const SwiperScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor:'green', }}>
       <Swiper
            cards={['wmjj', 'loop', 'llmk', 'djay', 'MAKES', 'YOU', 'HAPPY']}
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
    flex: .86,
    marginTop:30,
    marginLeft:10,
    marginRight:10,
    borderRadius: 45,
    backgroundColor:'white',
    shadowColor: "#828282",
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