import React, { useState, useEffect } from 'react'
import { StyleSheet, FlatList, View,ActivityIndicator} from 'react-native'
import TabUnderlay from '@components/TabUnderlay';
import HomeLogoHeader from '@components/HomeLogoHeader';
import ProductCard from '@components/ProductCard';
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
    <View style={{ flex: 1, backgroundColor: '#cacaca', justifyContent: "center", alignItems: "center", }}>
      <HomeLogoHeader />
      <View style={{ backgroundColor: '#cacaca', width: '100%', paddingTop: 90, paddingLeft: 25, paddingRight: 25, }}>
        <SafeAreaView>
          {loadingProducts?
            <ActivityIndicator size="large" />
            :
            <FlatList
              data={products as Array<{ id: string }>}
              renderItem={(item)=><ProductCard productInfo={item}/>}
              keyExtractor={(item) => item.id}
              numColumns={2}
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