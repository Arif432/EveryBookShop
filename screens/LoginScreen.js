import { View, Text ,ImageBackground, TouchableOpacity} from 'react-native'

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import React from 'react'
import InputComponent from '../components/InputComponent'
import LoginImg from "../assets/firstImg.jpg"
import PrimaryButtonComponent from '../components/PrimaryButtonComponent'
import SecondaryButtonComponent from '../components/SecondaryButtonComponent'

const LoginScreen = ({navigation}) => {
  return (
    <View className="flex-1">
      <ImageBackground 
      source={LoginImg} 
      className="flex-1"
      resizeMode='cover'>

        <View className="h-[58vh] mt-32 rounded-3xl opacity-75 bg-black">
          
          <Text className="text-5xl mt-10 text-center text-white font-extralight">Welcome</Text>
          <Text className="text-sm text-center font-light text-[#aeb0b2] mb-4">Login to your account</Text>

          <View className="flex-1">
            <InputComponent placeholder={"E-mail"}/>
            <InputComponent placeholder={"Password"} password={true}/>
          </View>

          <View className="flex-1 mb-10">
            <TouchableOpacity onPress={()=>navigation.navigate("ForgotPasswordScreen")}><Text className="text-white mr-6  text-right text-sm font-extralight">forgot Password</Text></TouchableOpacity>
            <PrimaryButtonComponent label={"LOGIN"} navigation={navigation} screen={"MainScreen"}/>
            <SecondaryButtonComponent label={"Signup"} navigation={navigation} screen={"SignupScreen"}  border={false} extraText={"new on EveryBook?"}/>
          </View>

        </View>
     
      </ImageBackground>
      
      </View>
  )
}

export default LoginScreen