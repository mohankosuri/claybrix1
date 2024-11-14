import React, { useState, useContext } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import { Googleusercontext } from '../contexts/Googleusercontext';

interface loginform {
    email: string;
    password: string;
}

const Loginform = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [emailError, setEmailError] = useState<string>('');
  const [passwordError, setPasswordError] = useState<string>('');

  const navigation: any = useNavigation();
  const { GoogleLogin, setLoading, setError, setUser  }: any = useContext(Googleusercontext);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleLogin = () => {
    let valid = true;

    // Email validation
    if (!email) {
      setEmailError("Email is required");
      valid = false;
    } else if (!validateEmail(email)) {
      setEmailError("Please enter a valid email");
      valid = false;
    } else {
      setEmailError('');
    }

    // Password validation
    if (!password) {
      setPasswordError("Password is required");
      valid = false;
    } else if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters");
      valid = false;
    } else {
      setPasswordError('');
    }

    if (valid) {
      Alert.alert('Login Details', `Email: ${email}\nPassword: ${password}`);
      navigation.navigate('Otpscreen');
    }
  };

  const handleGoogleLogin = async () => {
    setLoading(true);
    try {
      const response = await GoogleLogin();
      const { user }: any = response.data;
      setUser (user);
      if (user) {
        navigation.navigate('Bottomtabs');
      }
    } catch (apiError: any) {
      console.error('Error during Google Sign-In:', apiError);
      setError(apiError.message || 'Something went wrong during login');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View className="flex-1 bg-white px-5">
      <View className="items-center mb-8 mt-8">
        <Image
          source={require('../../assets/claybrixlogo.png')}
          className="w-36 h-28"
        />
      </View>

      <Text className="text-2xl font-black mb-2">
        Let's <Text className="text-indigo-600">Sign In</Text>
      </Text>
      <Text className="text-gray-600 mb-5">quis nostrud exercitation ullamco laboris nisi ut</Text>

      <View className="mb-2">
        <View className="flex-row items-center border border-gray-300 rounded-lg p-2 mb-2">
          <Icon name="envelope" size={20} color="#634AFD" className="mr-2" />
          <TextInput
            className="flex-1 text-base"
            placeholder="Email"
            value={email}
            onChangeText={(text) => {
              setEmail(text);
              if (emailError) setEmailError('');
            }}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>
        {emailError ? <Text className="text-red-500 text-sm mb-5">{emailError}</Text> : null}

        <View className="flex-row items-center border border-gray-300 rounded-lg p-2 mb-2">
          <Icon name="lock" size={20} color="#634AFD" className="mr-2" />
          <TextInput
            className="flex-1 text-base"
            placeholder="Password"
            value={password}
            onChangeText={(text) => {
              setPassword(text);
              if (passwordError) setPasswordError('');
            }}
            secureTextEntry
            autoCapitalize="none"
          />
        </View>
        {passwordError ? <Text className="text-red-500 text-sm mb-5">{passwordError}</Text> : null}
      </View>

      <View className="flex-row justify-between mb-5">
        <TouchableOpacity>
          <Text className="text-blue-600"> Forgot password?</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text className="text-blue-600">Show password</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity className="bg-[#252b5c] py-4 rounded-lg mb-5" onPress={handleLogin}>
        <Text className="text-white text-lg font-bold text-center">Login</Text>
      </TouchableOpacity>

      <View className="flex-row items-center mb-5">
        <View className="flex-1 h-px bg-gray-300" />
        <Text className="mx-2 text-gray-600">OR</Text>
        <View className="flex-1 h-px bg-gray-300" />
      </View>

      <View className="flex-row justify-around items-end mt-5">
        <TouchableOpacity className="bg-gray-100 p-2 rounded-full" onPress={handleGoogleLogin}>
          <Image
            source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1200px-Google_%22G%22_logo.svg.png' }}
            className="w-12 h-12"
          />
        </TouchableOpacity>
        <TouchableOpacity className="bg-gray-100 p-2 rounded-full">
          <Image
            source={{ uri: 'https://cdn-icons-png.flaticon.com/512/5968/5968764.png' }}
            className="w-12 h-12"
          />
        </TouchableOpacity>
        <TouchableOpacity className="bg-gray-100 p-2 rounded-full">
          <Image
            source={{ uri: 'https://cdn-icons-png.flaticon.com/512/0/747.png' }}
            className="w-12 h-12"
          />
        </TouchableOpacity>
      </View>

      <View className="mt-10">
        <Text className="text-center text-gray-600">
          Don't have an account?{' '}
          <Text className="text-indigo-600 font-bold" onPress={() => navigation.navigate("Registerform")}>
            Register
          </Text>
        </Text>
      </View>
    </View>
  );
};

export default Loginform;