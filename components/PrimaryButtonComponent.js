import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native'

const PrimaryButtonComponent = ({label,navigation,screen}) => {
  return (
    <TouchableOpacity 
          className="bg-[#67B7F4] h-14 justify-center m-4 rounded-lg"
          // click login btn to move to LOGIN SCREEN
          onPress={()=>navigation.navigate({name : screen})}
          >
        <Text className="text-center text-white text-xl font-light">{label}</Text>
    </TouchableOpacity>
  )
}

export default PrimaryButtonComponent