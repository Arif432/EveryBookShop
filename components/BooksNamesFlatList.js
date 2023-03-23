import React from 'react';
import { View, Text, FlatList } from 'react-native';
import NewRelaeasesCard from './NewReleasesCard';
import TitleDescription from './TitleDescription';

const BooksNamesFlatList = ({ data ,title, description}) => {
  return (
    <View>
      <TitleDescription title={title} description={description}/>
      <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
        data={data}
        keyExtractor={({ id }) => id.toString()}
        renderItem={({ item }) => (
          <View>
            <NewRelaeasesCard
            title={item.title} 
            releaseYear={item.releaseYear}/>
          </View>
        )}
      />
    </View>
  );
  
};

export default BooksNamesFlatList