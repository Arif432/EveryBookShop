import { View, Text, ImageBackground, TouchableOpacity, StatusBar } from 'react-native';
import launchImg from '../assets/background.jpg';
import PrimaryButtonComponent from '../components/PrimaryButtonComponent';
import SecondaryButtonComponent from '../components/SecondaryButtonComponent';

const EntryScreen = ({ route, navigation }) => {
  return (
    <ImageBackground
      resizeMode="cover"
      className="flex-1"
      source={launchImg}>

      <StatusBar backgroundColor="#67B7F4" barStyle="light-content" />

      <TouchableOpacity
        className="m-12 mr-6"
        onPress={() => navigation.navigate('MainScreen')}>

        <Text className="text-xs font-extralight text-white text-right">Skip</Text>
      </TouchableOpacity>
        
        <Text className="text-6xl mt-6 text-white text-center font-extralight">EveryBook</Text>
      
      <View className="flex-1 justify-end">
        <View>
          {/* Intro text quote */}
          <Text className="text-2xl font-light p-1 text-white text-center">
            "There is no friend as loyal as a book." - Ernest Hemingway
          </Text>

          {/* Intro text about */}
          <Text className="text-white text-xs font-light text-center mt-2">
            <Text className="font-bold">{route.name}</Text> app will facilitate you make books transactions like buying, selling, lending, and borrowing books.
          </Text>
        </View>

        {/* Buttons Log in and Sign up */}
        <View className="mb-10 p-6">
          <PrimaryButtonComponent label="LOGIN" navigation={navigation} screen="LoginScreen" />
          <SecondaryButtonComponent label="SIGNUP" navigation={navigation} border={true} />
        </View>

      </View>
    </ImageBackground>
  )
}

export default EntryScreen;
