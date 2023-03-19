import { View } from 'react-native';
import React from 'react';
import InputComponent from '../components/InputComponent';
import BooksNamesFlatList from '../components/BooksNamesFlatList.js';
import GetApiCustomHook from "../components/CustomHooks/GetApiCustomHook"

export default function HomeScreen () {
  const [books] = GetApiCustomHook('https://reactnative.dev/movies.json')

  return (
      <View>
        <InputComponent icon={"search"} placeholder="search item"/>
        <BooksNamesFlatList data={books}/>
      </View>
  );
}
