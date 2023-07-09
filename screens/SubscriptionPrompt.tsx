import { StyleSheet, Text, View,Image } from 'react-native'
import ActionButton from '../components/Buttons/ActionButton'
import ChecklistTexts from '../components/ChecklistTexts'
import React from 'react'

const SubscriptionPrompt = () => {
  return (
    <View
        style={{
            flex:1,
            justifyContent:'center',
            alignItems:'center',
            backgroundColor:'black',

        }}
    >
      <View
        style={{
            flex:.7,
            width:'100%',
            alignItems:'center',
            // backgroundColor:'green',
        }}
      >
        <Text
            style={{ 
                fontFamily:'Helvetica Neue',
                fontSize:45, 
                color:'white',
                marginBottom:30,
                fontWeight:"500",
                alignSelf:'center',
                // backgroundColor:'blue',
            }}
        >
            $40/month
        </Text>





    <View
         style={{ 
            justifyContent:'space-between',
            alignItems:'center',
            flexDirection:'row',
            width:'80%',
            // backgroundColor:'pink',
        }}
    >
        <Text style={styles.depositText}>Deposit</Text>
        <Text 
            style={{
                width:'60%',
                marginLeft:5,
                marginRight:5,
                color:'white',
                // backgroundColor:'orange',
            }}
            ellipsizeMode='clip' 
            numberOfLines={1}>
            - - - - - - - - - - - - - - - - - - - - - 
        </Text>
        <Text style={styles.checklist}>$350</Text>

    </View>
    <Text 
    
    style={{
        marginTop:30,
        fontFamily:'Helvetica Neue',
        fontWeight:"500",
        fontSize:15, 
        color:'white',

    }}>One time deposit, get access and exclusive perks</Text>



        <View
        style={{
            width:'80%',
            marginTop:40,
            alignItems:'center',
            justifyContent:'flex-start',
            // backgroundColor:'yellow',

        }}
        >


        <ChecklistTexts
            text={'3 shoes a month'}
        />
        <ChecklistTexts
            text={'Pause/ cancel anytime'}
        />
        <ChecklistTexts
            text={'Access to new releases'}
        />
            

        </View>



            
        <ActionButton
            title={'Sign Up'} 
            color={{color:'black'}}
            onPress={()=> navigation.navigate('SignUpThree')} 
            backgroundColor={{backgroundColor:'white'}}
        />
      </View>
    </View>
  )
}

export default SubscriptionPrompt

const styles = StyleSheet.create({


    checklist:{
        fontFamily:'Helvetica Neue',
        fontWeight:"500",
        fontSize:25, 
        color:'white',
    },
    depositText:{
        fontFamily:'Helvetica Neue',
        fontWeight:"500",
        fontSize:15, 
        color:'white',
    },

})