/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  StyleSheet,
  TextInput,
} from 'react-native';
import productData from './product_data.json';
import {ProductCard} from './components';

const App = () => {
  const [searchValue, setSearchValue] = useState('');
  const [displayList, setDisplayList] = useState([]);
  const renderListItem = ({item}) => <ProductCard product={item} />;
  useEffect(() => {
    setDisplayList(productData);
  }, []);

  useEffect(() => {
    const filteredValue = productData.filter((item) => {
      const text = searchValue.toUpperCase();
      const productTitle = item.title.toUpperCase();

      return productTitle.indexOf(text) > -1;
    });
    setDisplayList(filteredValue);
  }, [searchValue]);

  return (
    <SafeAreaView>
      <Text style={styles.banner}>Clarushop</Text>
      <View sytle={styles.searchBar}>
        <TextInput placeholder="Ürün ara..." onChangeText = {(value) => setSearchValue(value)} />
      </View>
      <View>
        <FlatList
          keyExtractor={(_, index) => index.toString()}
          data={displayList}
          renderItem={renderListItem}
          numColumns={2}
        />
      </View>
    </SafeAreaView>
  );
};
export default App;

const styles = StyleSheet.create({
  banner: {
    fontSize: 30,
    color: 'purple',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
