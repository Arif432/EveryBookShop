import { useFonts } from 'expo-font';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import EntryScreen from './screens/EntryScreen';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import MainScreen from './screens/MainScreen';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen 
        name="EveryBook" 
        component={EntryScreen} 
        options={{headerShown: false}}
        />

        <Stack.Screen 
        name="LoginScreen" 
        component={LoginScreen} 
        options={{headerShown: false}}
        />

        <Stack.Screen 
        name="SignupScreen" 
        component={SignupScreen} 
        />

        <Stack.Screen 
        name="MainScreen" 
        component={MainScreen} 
        />


      </Stack.Navigator>
    </NavigationContainer>
  );
}

