import { View, Text } from 'react-native'
import React from 'react'
import NavBarComponent from '../components/NavBarComponent'
import InputComponent from '../components/InputComponent'
import PrimaryButtonComponent from '../components/PrimaryButtonComponent'

const ForgotPasswordScreen = ({navigation}) => {
  return (
    <View>
      <NavBarComponent label={"Forgot Password"} heading={"Enter Email"} info={"We need to verify you"}/>
      <InputComponent placeholder={"E-mail"}/>
      <PrimaryButtonComponent label={"Send OTP"} screen={"ResetPasswordScreen"} navigation={navigation}/>

    </View>
  )
}

export default ForgotPasswordScreen