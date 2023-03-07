import { View, Text , ImageBackground,  TouchableOpacity} from 'react-native'
import launchImg from "../assets/background.jpg"
import PrimaryButtonComponent from '../components/PrimaryButtonComponent'
import SecondaryButtonComponent from '../components/SecondaryButtonComponent'

const EntryScreen = ({route , navigation}) => {
  // console.log(props.route.name);
  return (
  
  <ImageBackground
  resizeMode='cover'
  className="flex-1"
  source={launchImg}>
    
    <TouchableOpacity className="m-12 mr-6" 
    onPress={()=> navigation.navigate("MainScreen") }
    >
      <Text className="text-xs font-extralight text-white text-right">Skip</Text>
    </TouchableOpacity>

    <Text className="text-6xl mt-6 text-white text-center font-extralight">EveryBook</Text>

    <View className="justify-end flex-1" >

      <View>
          {/* intro text QUOTE*/}
        <Text className="text-2xl font-light p-1 text-white text-center">
            "There is no friend as loyal as a book." - Ernest Hemingway
        </Text>
         
          {/* INTRO TEXT ABOUT */}
        <Text className="text-white text-xs font-light text-center mt-2">
            <Text className="font-bold">{route.name}</Text> app will facilitate you make books transactions like 
            buying, selling, lending, and borrowing books.
        </Text>

      </View>

          {/* buttons LOG SIGN*/}
        <View className="mb-10 p-6">
          <PrimaryButtonComponent label={"LOGIN"} navigation={navigation}/>
          <SecondaryButtonComponent label={"SIGNUP"} navigation={navigation} border={true}/>
        </View>

        </View>
      </ImageBackground>
    
  )
}

export default EntryScreen