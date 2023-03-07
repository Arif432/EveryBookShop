import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'

const SecondaryButtonComponent = ({label ,navigation,border}) => {

    if(border){
    return (
      <TouchableOpacity className="border border-white h-14 justify-center m-4 rounded-lg"
           onPress={()=>navigation.navigate("SignupScreen")}
          >
            <Text className="text-center text-white text-xl font-light">{label}</Text>
      </TouchableOpacity>
  )
    }
    else {
        return(
         <TouchableOpacity className="justify-center h-10"
           onPress={()=>navigation.navigate("SignupScreen")}
          >
            <Text className="text-center text-white text-lg font-light">{label}</Text>
      </TouchableOpacity>
        )
    }
}

export default SecondaryButtonComponent