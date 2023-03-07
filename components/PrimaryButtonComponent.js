import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'

const PrimaryButtonComponent = ({label,navigation}) => {
  console.log(navigation);
  return (
    <TouchableOpacity 
          className="bg-[#67B7F4] h-14 justify-center m-4 rounded-lg"
          // click login btn to move to LOGIN SCREEN
          onPress={()=>navigation.navigate("LoginScreen")}
          >
        <Text className="text-center text-white text-xl font-light">{label}</Text>
    </TouchableOpacity>
  )
}

export default PrimaryButtonComponent