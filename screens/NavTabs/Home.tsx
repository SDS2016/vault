import React, { useState, useEffect } from 'react'
import { Text,StyleSheet, FlatList, View,ActivityIndicator} from 'react-native'
import TabUnderlay from '../../components/TabUnderlay';
import HomeLogoHeader from '../../components/HomeLogoHeader';
import ProductCard from '../../components/ProductCard';
import { SafeAreaView } from 'react-native-safe-area-context';

// import API functions
import { getProducts } from '@api/StripeIntegration';

const Home = () => {
  const [loadingProducts, setLoadingProducts] = useState<Boolean>(true);
  const [products, setProducts] = useState<[]>([]);


  useEffect(() => {
    getProducts().then((res: []) => {
      setProducts(res);
      setLoadingProducts(false);
    })
  },[])

  return (
    <View style={{ flex: 1, backgroundColor: '#cacaca', }}>
      <HomeLogoHeader />
      {/* /////////// the view directly below is for the spacing between the flatlist items /////////////// */}
      <View style={{ backgroundColor: '#cacaca', width: '100%',marginTop:50, }}>
        <SafeAreaView>
          
          {/* <View 
          style={{ 
            height:400,
            backgroundColor:'#79fbff', width: '100%',marginTop:50, }}>
            <Text> hello friend</Text>
          </View> */}
          {loadingProducts?
            <ActivityIndicator size="large" />
            :
            <FlatList
              data={products as Array<{ id: string }>}
              renderItem={(item)=><ProductCard productInfo={item}/>}
              keyExtractor={(item) => item.id}
              numColumns={2}
              ////////// columnWrapperStyle styles the flatlist items ///////////////
              columnWrapperStyle={{justifyContent:'space-evenly',  }}
              contentContainerStyle={{ 
                width:'100%', 
                justifyContent:'space-between', 
                // backgroundColor:'pink',
              }}
              ItemSeparatorComponent={()=><View style={{ marginLeft:20, }}/>}
              showsVerticalScrollIndicator={false}
            />
          }

        </SafeAreaView>
      </View>
      <TabUnderlay />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
})