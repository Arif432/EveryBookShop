import React from 'react';
import { View, Text, FlatList } from 'react-native';

const BooksNamesFlatList = ({ data }) => {
  return (
    <FlatList
      data={data}
      keyExtractor={({ id }) => id.toString()}
      renderItem={({ item }) => (
        <View>
          <Text>{item.title}</Text>
          <Text>{item.releaseYear}</Text>
        </View>
      )}
    />
  );
};

export default BooksNamesFlatList