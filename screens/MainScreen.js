import { View, Text } from 'react-native'
import React from 'react'
import NavBarComponent from '../components/NavBarComponent'

const MainScreen = () => {
  return (
    <View>
      <NavBarComponent/>
      <Text>MainScreen</Text>
    </View>
  )
}

export default MainScreen