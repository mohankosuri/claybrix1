import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, Dimensions, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Appparamlist } from '../types/Appparamlist';
import Icons from 'react-native-vector-icons/AntDesign';
 

const { height } = Dimensions.get("window");

const Onboarding = () => {
  const navigation = useNavigation<typeof Appparamlist>();
  const [currentStep, setCurrentStep] = useState(0);

  const handleSkip = () => {
    navigation.navigate('Loginform');
  };

  const handleNext = () => {
    if (currentStep < 2) {
      setCurrentStep(currentStep + 1);
    } else {
      navigation.navigate('Loginform');
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const onboardingSteps = [
    {
      title: "Find the best place to stay at a",
      highlight: "great price",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.",
      imageUri: require('../../assets/img-1.png'),
    },
    {
      title: "Fast sell your property in just",
      highlight: "one click",
      description: "Aliquam eget arcu vitae purus gravida quis blandit turpis cursus.",
      imageUri: require('../../assets/img-2.png'),
    },
    {
      title: "Book your stay with ease",
      highlight: "and enjoy the journey",
      description: "Nulla facilisi. Pellentesque habitant morbi tristique senectus.",
      imageUri: require('../../assets/img-3.png'),
    },
  ];

  const { title, highlight, description, imageUri } = onboardingSteps[currentStep];

  return (
    <View className='flex-1 bg-white px-4'>
      <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
      <View  className='flex-row justify-between items-center my-5'>
        <Image
          source={require('../../assets/claybrixlogo.png')}
          className='w-24 h-16'
          alt="Company logo"
        />
        <TouchableOpacity className='bg-blue-100 rounded-full py-2 px-9' onPress={handleSkip}>
          <Text className='text-blue-600 text-sm'>Skip</Text>
        </TouchableOpacity>
      </View>

      <View className='flex-1 rounded-2xl items-center justify-center'>
        <Text className='text-2xl font-semibold text-gray-800'>
          {title} <Text className='text-violet-600'>{highlight}</Text>
        </Text>
        <Text className='text-gray-600 my-2 text-base leading-6 text-center'>
          {description}
        </Text>

        {/* Image with Next button overlay */}
        <View className='relative w-full h-[${height * 0.3}px] my-5'>
          <Image
            source={imageUri}
            className='w-full h-[${height * 0.3}px] rounded-2xl'
            alt="Onboarding illustration"
          />

          {currentStep === 0 ? null : (
            <TouchableOpacity className='absolute bottom-5 left-5 bg-white rounded-full p-4 shadow-md' onPress={handlePrev}>
              <Icons name="arrowleft" size={20} color={'black'} />
            </TouchableOpacity>
          )}

          <TouchableOpacity className='absolute bottom-5 right-5 bg-blue-600 rounded-full py-4 px-5 flex flex-row justify-center items-center w-48' onPress={handleNext}>
            <Text className='text-white text-lg'>
              {currentStep < 2 ? 'Next' : 'Login'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Onboarding;