import { View, Text ,ImageBackground, ScrollView} from 'react-native'
import React from 'react'
import InputComponent from '../components/InputComponent'
import LoginImg from "../assets/firstImg.jpg"
import PrimaryButtonComponent from '../components/PrimaryButtonComponent'
import SecondaryButtonComponent from '../components/SecondaryButtonComponent'

const LoginScreen = ({navigation}) => {
  return (
    <ImageBackground 
    source={LoginImg} 
    className="flex-1 justify-end"
    resizeMode='cover'>

    
      <View className="h-[65vh] rounded-t-3xl opacity-80 bg-black">
        <Text className="text-5xl mt-10 text-center text-white font-extralight">Welcome</Text>
        <Text className="text-sm text-center font-light text-[#aeb0b2] mb-4">Login to your account</Text>

        <View className="mb-10">
          <InputComponent placeholder={"E-mail"}/>
          <InputComponent placeholder={"Password"}/>
        </View>

        <PrimaryButtonComponent label={"LOGIN"} navigation={navigation}/>
        <SecondaryButtonComponent label={"Forgot your password"} navigation={navigation} border={false}/>

      </View>
    </ImageBackground>
  )
}

export default LoginScreen