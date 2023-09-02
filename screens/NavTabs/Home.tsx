import React, { useState, useEffect } from 'react';
import { Text,StyleSheet, FlatList, View,ActivityIndicator, ScrollView, Image} from 'react-native'
import TabUnderlay from '@components/TabUnderlay';
import HomeLogoHeader from '@components/HomeLogoHeader';
import ProductCard from '@components/ProductCard';
import { SafeAreaView } from 'react-native-safe-area-context';
import Swiper from 'react-native-swiper';

////////////// import API functions /////////////
import { getProducts } from '@api/StripeIntegration';

const Home = () => {
  const [loadingProducts, setLoadingProducts] = useState<Boolean>(true);
  const [products, setProducts] = useState<[]>([]);


  useEffect(() => {
    getProducts("").then((res: []) => {
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
          


          {loadingProducts?
            <ActivityIndicator size="large" />
            :
            <FlatList
              data={products as Array<{ id: string }>}
              ListHeaderComponent={()=>(
                  <View style={styles.productHighlight}>
                    <Swiper style={styles.wrapper} showsButtons={false} activeDotColor={"black"}>
                      <View style={styles.slide1}>
                        <Image source={{uri:products[1].images[1]}} style={{height:'80%', width:'80%'}}/>
                      </View>
                      <View style={styles.slide2}>
                        <Image source={{uri:products[1].images[2]}} style={{height:'80%', width:'100%'}}/>
                      </View>
                      <View style={styles.slide3}>
                        <Image source={{uri:products[1].images[0]}} style={{height:'80%', width:'100%'}}/>
                      </View>
                    </Swiper>
                  </View>
              )}
              renderItem={(item)=><ProductCard productInfo={item}/>}
              keyExtractor={(item) => item.id}
              numColumns={2}
              ////////// columnWrapperStyle styles the flatlist items ///////////////
              columnWrapperStyle={{justifyContent:'space-evenly',}}
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
  productHighlight: {
    height: 300,
    // padding: 5,
    width: '100%',
    marginTop:50,
    marginBottom:10,
  },
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#9DD6EB'
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#97CAE5'
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#92BBD9'
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  }

})