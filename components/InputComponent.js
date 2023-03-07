import { View, Text, TextInput, ScrollView } from 'react-native'
import React from 'react'

const InputComponent = ({placeholder}) => {
  return (
     <TextInput
        className="h-14 pl-12 justify-center m-2 mr-4 ml-4  rounded-lg bg-white"
        placeholder={placeholder}
      />
  )
}

export default InputComponent