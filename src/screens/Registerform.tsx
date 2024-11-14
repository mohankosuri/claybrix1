import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const Registerform = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation:any = useNavigation();

  const handleRegister = () => {
    console.log('Full Name:', fullName);
    console.log('Email:', email);
    console.log('Password:', password);
    Alert.alert('Registration Details', `Full Name: ${fullName}\nEmail: ${email}\nPassword: ${password}`);
    navigation.navigate('Otpscreen');
  };

  return (
    <View className="flex-1 bg-white px-5">
      <View className="mt-24">
        <Text className="text-2xl mb-2 font-black">
          Create Your <Text className="text-[#634AFD]">Account</Text>
        </Text>
        <Text className="text-gray-600 mb-5">Please fill in the form to create an account</Text>

        <View className="mb-2">
          <View className="flex-row items-center border border-gray-200 rounded-lg p-3 mb-5">
            <Icon name="user" size={20} color="#634AFD" style={{ marginRight: 10 }} />
            <TextInput
              className="flex-1 text-base"
              placeholder="Full Name"
              value={fullName}
              onChangeText={setFullName}
            />
          </View>

          <View className="flex-row items-center border border-gray-200 rounded-lg p-3 mb-5">
            <Icon name="envelope" size={20} color="#634AFD" style={{ marginRight: 10 }} />
            <TextInput
              className="flex-1 text-base"
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>

          <View className="flex-row items-center border border-gray-200 rounded-lg p-3 mb-5">
            <Icon name="lock" size={20} color="#634AFD" style={{ marginRight: 10 }} />
            <TextInput
              className="flex-1 text-base"
              placeholder="Password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              autoCapitalize="none"
            />
          </View>
        </View>

        <TouchableOpacity className="bg-[#252b5c] py-4 rounded-lg items-center mb-5" onPress={handleRegister}>
          <Text className="text-white text-base font-bold">Register</Text>
        </TouchableOpacity>

        <View className="flex-row items-center mb-5">
          <View className="flex-1 h-px bg-gray-300" />
          <Text className="mx-2 text-gray-700">OR</Text>
          <View className="flex-1 h-px bg-gray-300" />
        </View>

        <View className="flex-row justify-around mt-5">
          <TouchableOpacity className="bg-gray-100 p-2 rounded-full">
            <Image
              source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1200px-Google_%22G%22_logo.svg.png' }}
              className="w-11 h-11 m-2"
            />
          </TouchableOpacity>
          <TouchableOpacity className="bg-gray-100 p-2 rounded-full">
            <Image
              source={{ uri: 'https://cdn-icons-png.flaticon.com/512/5968/5968764.png' }}
              className="w-11 h-11 m-2"
            />
          </TouchableOpacity>
          <TouchableOpacity className="bg-gray-100 p-2 rounded-full">
            <Image
              source={{ uri: 'https://cdn-icons-png.flaticon.com/512/0/747.png' }}
              className="w-11 h-11 m-2"
            />
          </TouchableOpacity>
        </View>

        <View className="mt-10">
          <Text className="text-center text-[#53587A]">
            Already have an account?{' '}
            <Text className="text-gray-600 font-extrabold text-base" onPress={() => navigation.navigate('Loginform')}>
              Login
            </Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Registerform;
