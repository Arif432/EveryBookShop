import { View, Text } from 'react-native'
import React from 'react'
import NavBarComponent from '../components/NavBarComponent'
import InputComponent from '../components/InputComponent'
import PrimaryButtonComponent from "../components/PrimaryButtonComponent"
import SecondaryButtonComponent from '../components/SecondaryButtonComponent'


const SignupScreen = ({navigation}) => {
  return (
    <View>

      <NavBarComponent label={"Signup"}/>
      
        <View className="mt-[-40]">

          <Text className="text-lg font-medium ml-4">Email</Text>
          <InputComponent placeholder={"E-mail"}/>

          <Text className="text-lg font-medium ml-4">Name</Text>
          <InputComponent placeholder={"Name"}/>

          <Text className="text-lg font-medium ml-4">Password</Text>
          <InputComponent placeholder={"Password"}/>

          <Text className="text-lg font-medium ml-4">Confirm Password</Text>
          <InputComponent placeholder={"Confirm Password"}/>

          <PrimaryButtonComponent label={"Create Account"} screen={"LoginScreen"} navigation={navigation}/>

          <SecondaryButtonComponent label={"SignIN"} navigation={navigation} screen={"LoginScreen"} border={false} extraText={"already on EveryBook?"}/>

        </View>
      
    </View>
  )
}

export default SignupScreen