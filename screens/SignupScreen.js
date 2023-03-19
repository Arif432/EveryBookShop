import { View, Text } from 'react-native';
import React from 'react';
import NavBarComponent from '../components/NavBarComponent';
import InputComponent from '../components/InputComponent';
import PrimaryButtonComponent from '../components/Buttons/PrimaryButtonComponent';
import SecondaryButtonComponent from '../components/Buttons/SecondaryButtonComponent';
import usePostApi from '../components/CustomHooks/usePostApi';

const SignupScreen = ({ navigation }) => {
  const [setEmail, setPassword,setName,postApi] = usePostApi(
    'http://talk2you-live.lingmo-api.com/api/user'
  );

  const handleSignUp = () => {
    postApi();
  };

  return (
    <View>
      <NavBarComponent label={'Signup'} />

      <View className="mt-[-40]">
        <Text className="text-lg font-medium ml-4">Email</Text>
        <InputComponent 
        onChangeText={setEmail} 
        placeholder={'E-mail'} 
        icon="mail" />

        <Text className="text-lg font-medium ml-4">Name</Text>
        <InputComponent 
        onChangeText={setName} 
        placeholder={'Name'} 
        icon="person" />

        <Text className="text-lg font-medium ml-4">Password</Text>
        <InputComponent
          onChangeText={setPassword}
          placeholder={'Password'}
          icon={'lock'}
          password={true}
        />

        <Text className="text-lg font-medium ml-4">Confirm Password</Text>

        <InputComponent placeholder={'Confirm Password'} icon={'lock'} password={true} />

        <PrimaryButtonComponent
          label={'Create Account'}
          screen={'LoginScreen'}
          navigation={navigation}
          onPress={handleSignUp}
        />

        <SecondaryButtonComponent
          label={'Signin'}
          navigation={navigation}
          screen={'LoginScreen'}
          border={false}
          extraText={'already on EveryBook?'}
        />
      </View>
    </View>
  );
};

export default SignupScreen;
