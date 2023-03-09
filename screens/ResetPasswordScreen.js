import { View, Text } from 'react-native'
import React from 'react'
import NavBarComponent from '../components/NavBarComponent'
import InputComponent from '../components/InputComponent'
import PrimaryButtonComponent from '../components/PrimaryButtonComponent'

const ResetPasswordScreen = ({navigation}) => {
  return (
    <View>
      <NavBarComponent label={"Reset Password"} info={"Please Fill in the fields to reset your password"}/>

    <View className="mt-[-4]">
      
        <Text className="text-lg font-medium ml-4">Password</Text>
        <InputComponent placeholder={"create password"}/>

        <Text className="text-lg font-medium ml-4">Confirm Password</Text>
        <InputComponent placeholder={"confirm password"}/>

        <PrimaryButtonComponent label={"Done"} screen={"LoginScreen"} navigation={navigation}/>
    </View>

    </View>
  )
}

export default ResetPasswordScreen