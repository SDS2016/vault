import { StyleSheet, Text, View, ScrollView } from 'react-native'
import TabUnderlay from '../../components/TabUnderlay';
import HomeLogoHeader from '../../components/HomeLogoHeader';
import ProductCard from '../../components/ProductCard';
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';


const Home = () => {
  return (
    <View style={{flex:1,backgroundColor:'#cacaca', justifyContent:"center", alignItems:"center",}}>
       <HomeLogoHeader /> 
       <ScrollView style={{backgroundColor:'#cacaca', width:'100%', paddingTop:150,paddingLeft:25, paddingRight:25,}}>  
       <SafeAreaView>
        
        {/* <Text> hellojsoinvgjbs</Text>
            <View style={{backgroundColor:'white', height:800, width:90,}}>

            </View> */}
       <ProductCard/>
        </SafeAreaView>
         </ScrollView>
        <TabUnderlay/>

      </View>
  )
}

export default Home

const styles = StyleSheet.create({})