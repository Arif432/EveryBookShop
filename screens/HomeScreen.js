import { View, Text } from 'react-native'
import React from 'react'
import NavBarComponent from '../components/NavBarComponent'


const HomeScreen = () => {
  return (
    <View>
        <NavBarComponent label={"Reset Password"} info={"Please Fill in the fields to reset your password"}/>
        <Text>HomeScreen</Text>
    </View>
  )
}

export default HomeScreen