import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, View,StatusBar, Image ,ImageBackground} from 'react-native';
import { useNavigation } from '@react-navigation/native';
 
import { Appparamlist } from '../types/Appparamlist';

const Splash = () => {

     const navigation:any = useNavigation<typeof Appparamlist>();

     useEffect(() => {
    
        const timeout = setTimeout(() => {
          navigation.navigate('Onboarding');
        }, 3000);
    
        
        return () => clearTimeout(timeout);
      }, [navigation]);

   
    return (
        <ImageBackground className='flex-1 justify-center items-center bg-white' source={require('../../assets/Splash.jpg')}>
            <StatusBar  backgroundColor="#ffffff" barStyle="dark-content"/>
             <Image source={require('../../assets/claybrixlogo.png')}></Image>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({})

export default Splash;
