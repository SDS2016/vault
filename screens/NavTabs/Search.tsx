import React, { useEffect, useState } from 'react';
import { StyleSheet, Image, View, TextInput, TouchableOpacity,ActivityIndicator,FlatList } from 'react-native'
import ProductCard from '@components/ProductCard';
import TabUnderlay from '../../components/TabUnderlay';

////////////// import vault logo /////////////
import SearchIcon from '@assets/search.png';

////////////// import API functions /////////////
import { getProducts } from '@api/StripeIntegration';

const Search = () => {
  const [loadingProducts, setLoadingProducts] = useState<Boolean>(false);
  const [text, onChangeText] = useState<string>('');
  const [products, setProducts] = useState<[]>([]);

  const SearchForProduct = () => {
    if (text.length > 3) {
      setLoadingProducts(true);
      getProducts(text).then((res: []) => {
        setLoadingProducts(false);
        setProducts(res);
      })
    }
    else{
      setProducts([]);
    }
  }

  useEffect(() => {
    SearchForProduct();
  },[text])

  return (
    <View>
      <View style={styles.textInputContainer}>
        <TextInput
          style={styles.textInput}
          onChangeText={onChangeText}
          placeholder='Search...'
          placeholderTextColor={'#000000'}
          value={text}
        />
        <View style={styles.searchIconContainer}>
          <TouchableOpacity onPress={()=>SearchForProduct()}>
            <Image
              source={SearchIcon}
              style={styles.searchIcon}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View>

       
        {loadingProducts?
          <ActivityIndicator size="large" />
          :
          <FlatList
            data={products as Array<{ id: string }>}
            renderItem={(item)=><ProductCard productInfo={item}/>}
            keyExtractor={(item) => item.id}
            numColumns={2}
            ////////// columnWrapperStyle styles the flatlist items ///////////////
            columnWrapperStyle={{justifyContent:'space-evenly'}}
            contentContainerStyle={{ 
              paddingTop:20,
              height:'100%',
              width:'100%', 
              justifyContent:'space-between',
              // backgroundColor:'pink',
            }}
            ItemSeparatorComponent={()=><View style={{ marginLeft:20, }}/>}
            showsVerticalScrollIndicator={false}
          />
        }
      </View>
    </View>
  )
}

export default Search
const styles = StyleSheet.create({
  textInput:{
    height: 45, 
    width: '90%',
    borderRadius:10,
    textAlign:'center',
    backgroundColor:'#E3E3E3',
  },
  textInputContainer:{
    display:'flex',
    width: '100%',
    height: 45,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop:80,
    position:'relative',
    marginBottom:20,
  },
  searchIcon:{
    width: 19, 
    height: 25,
    marginRight:40,
  },
  searchIconContainer:{
    width: '20%',
    position:'absolute',
    alignItems: 'flex-end',
    right:0,
  }
})