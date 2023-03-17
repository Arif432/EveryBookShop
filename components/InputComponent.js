import { View, Text, TextInput, ScrollView } from 'react-native'
import React from 'react'
import { SearchBar } from '@rneui/themed';
import { Input } from 'react-native-elements';

import {
    ChevronDownIcon,Bars3Icon,
    UserIcon, MagnifyingGlassIcon} from "react-native-heroicons/outline"
import { Icon } from '@rneui/themed'


const InputComponent = ({placeholder, icon ,password}) => {
  return (
    <View 
    className="h-14 text-sm justify-center text-center m-2 pt-6 pl-2 mr-4 ml-4 rounded-lg bg-white">

       <Input
        className="ml-2"
        placeholder={placeholder}
        secureTextEntry={password ? true : false}
        inputContainerStyle={{borderBottomWidth:0}}

        leftIcon={
          <Icon
          name={icon}
          size={28}
          color="#67B7F4"
    />
  }
        /> 

    </View>
   
        
  )
}

export default InputComponent