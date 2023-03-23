import { ScrollView, View } from 'react-native';
import React from 'react';
import InputComponent from '../components/InputComponent';
import BooksNamesFlatList from '../components/BooksNamesFlatList.js';
import GetApiCustomHook from "../components/CustomHooks/GetApiCustomHook"

export default function HomeScreen () {
  const [books] = GetApiCustomHook('https://reactnative.dev/movies.json')

  return (
    <ScrollView>
      <View className="flex-1">
        <InputComponent icon={"search"} placeholder="search item"/>
        <View>
          <BooksNamesFlatList data={books} title={"Category 1"} description={"desc1"} />
        </View>
        <View>
          <BooksNamesFlatList data={books} title={"Category 2"} description={"desc1"}   />
        </View>
        <View>
          <BooksNamesFlatList data={books} title={"Category 3"} description={"desc1"}  />
        </View>
        
      </View>
    </ScrollView>
  );
}
