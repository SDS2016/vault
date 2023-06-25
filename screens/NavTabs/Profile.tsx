import { StyleSheet, Text, View,SafeAreaView, ScrollView } from 'react-native'
import TabUnderlay from '../../components/TabUnderlay'
import React from 'react'

const Profile = () => {
  return (
    
    <View style={{ flex: 1, }}>
      <SafeAreaView>
        <ScrollView style={{ paddingRight:20, paddingLeft:20, }}>
            <View style={{ minHeight:250, maxHeight:350, width:'100%',justifyContent: 'center', alignItems: 'center', }}>
            <View style={{ height:120, width:120, borderRadius:80, backgroundColor:'orange',}}>
          </View>
            <Text style={{ fontFamily:'Helvetica Neue', paddingTop:12, fontSize:18, fontWeight:"700"}}> Jordan Perterson</Text>
          </View>

          <View style={{ alignItems:'flex-start', height:40, justifyContent: 'center',  borderBottomColor:'#e4e4e4', borderBottomWidth:.8,}}>
            <Text style={{  fontFamily:'Helvetica Neue',fontSize:19, fontWeight:"500", }}>Profile Info </Text>
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

            <View style={{paddingTop:8, paddingBottom:8, flexDirection:'row', justifyContent:'space-between', alignItems:'center', borderBottomColor:'#e4e4e4', borderBottomWidth:.8,}}>
              <Text>Payments</Text>
            </View>

            <View style={{paddingTop:8, paddingBottom:8, flexDirection:'row', justifyContent:'space-between', alignItems:'center', borderBottomColor:'#e4e4e4', borderBottomWidth:.8,}}>
              <Text>Subscription</Text>
            </View>

            <View style={{paddingTop:8, paddingBottom:8, flexDirection:'row', justifyContent:'space-between', alignItems:'center', borderBottomColor:'#e4e4e4', borderBottomWidth:.8,}}>
              <Text>Favorites</Text>
            </View>

            <View style={{paddingTop:8, paddingBottom:8, flexDirection:'row', justifyContent:'space-between', alignItems:'center', borderBottomColor:'#e4e4e4', borderBottomWidth:.8,}}>
              <Text>Recent</Text>
            </View>

            <View style={{height:200}}></View>



        </ScrollView>
      </SafeAreaView>
      <TabUnderlay/>
    </View>
   
  )
}

export default Profile

const styles = StyleSheet.create({})