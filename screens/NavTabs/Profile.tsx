import { StyleSheet, Text, View,SafeAreaView, ScrollView, Image } from 'react-native'
import TabUnderlay from '../../components/TabUnderlay'
import ActionButton from '@components/Buttons/ActionButton'
import OptionsComp from '@components/OptionsComp'
import LinearGradient from 'react-native-linear-gradient';
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler';

const Profile = ({navigation}) => {
  return (
    
    <View style={{ flex: 1, }}>
      <SafeAreaView>
        <ScrollView style={{ paddingRight:20, paddingLeft:20, }}>
            
          
          <View style={{ minHeight:250, maxHeight:350, width:'100%',justifyContent: 'center', alignItems: 'center', }}>
            

            {/* ///////////////// Profile Image ////////////////////////////////// */}
            <View style={{ height:120, width:120, borderRadius:80, backgroundColor:'orange',}}>
              <Image
              style={{
                height:'100%',
                width:'100%',
                borderRadius:100,
                resizeMode:'cover',
              }}
              source={{uri:'https://st2.depositphotos.com/1715570/5709/i/450/depositphotos_57092503-stock-photo-happy-african-american-man-in.jpg'}}
              />
              
            </View>
            {/* ////////////////////////////////////////////////////////////////// */}


            <Text style={{ fontFamily:'Helvetica Neue', paddingTop:12, fontSize:18, fontWeight:"700"}}> Jordan Perterson</Text>
          </View>

          <View style={{flexDirection:'row', alignItems:'flex-start', height:40, justifyContent: 'space-between',  borderBottomColor:'#e4e4e4', borderBottomWidth:.8,}}>
            <Text style={{  fontFamily:'Helvetica Neue',fontSize:19, fontWeight:"500", }}>Profile Info </Text>

          <TouchableOpacity onPress={''} activeOpacity={.5}>
            <Text style={{  fontFamily:'Helvetica Neue',fontSize:17, fontWeight:"400", color:'grey', }}>Edit</Text>
          </TouchableOpacity>

          </View>

            <View style={{ flexDirection:'column',borderBottomColor:'#e4e4e4', borderBottomWidth:.8,}}>
              <View style={{paddingTop:10, paddingBottom:10,flexDirection:'column', marginRight:'30%', }}>
                <Text style={{marginBottom:5,}}>Address</Text>
                <Text>7563 North Pine St, Dream Ville, North Carolina 58940</Text>
              </View>
            </View>

            
            <View style={{paddingTop:10, paddingBottom:10, flexDirection:'row', justifyContent:'space-between', alignItems:'center',borderBottomColor:'#e4e4e4', borderBottomWidth:.8,}}>
              <Text>Phone</Text>
              <Text>214-423-4231</Text>
            </View>

            <View style={{paddingTop:10, paddingBottom:10, flexDirection:'row', justifyContent:'space-between', alignItems:'center',marginBottom:20,}}>
              <Text>Email</Text>
              <Text>jordanP@gmail.com</Text>
            </View>

            <View style={{ alignItems:'flex-start', height:40, justifyContent: 'center' ,paddingBottom:5, borderBottomColor:'#e4e4e4', borderBottomWidth:.8,}}>
            <Text style={{  fontFamily:'Helvetica Neue',fontSize:19, fontWeight:"500", }}>Membership</Text>
            </View>
            

            <OptionsComp onPress={()=>navigation.navigate('Subscription Prompt')} title={'Payments'}/>            
            <OptionsComp onPress={()=>navigation.navigate('Subscription Prompt')} title={'Favorites'}/>
            <OptionsComp onPress={()=>navigation.navigate('Subscription Prompt')} title={'Subscription'}/>
            <OptionsComp onPress={()=>navigation.navigate('Subscription Prompt')} title={'Sign Out  ➜'}/>

            {/* <View
            style={{
              width:'100%',
              justifyContent:'center',
              alignItems:'center',
            }}
            >
            <ActionButton title={'Sign Out'} onPress={''}/>
            </View> */}

            <View style={{height:100}}></View>


          

        </ScrollView>
      </SafeAreaView>

      <LinearGradient
    
    locations={[0.8,0.5,0.2, 0.1]}
    colors={['#ffffff','#ffffffd2', '#ffffff26', '#ffffff00']}
    style={{
        width:'100%',
        height:150,
        position:'absolute',
        bottom:0,


        }}
    >
       
    </LinearGradient>
      {/* <TabUnderlay/> */}
    </View>
   
  )
}

export default Profile

const styles = StyleSheet.create({})