import React, { useRef, useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, KeyboardTypeOptions } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const OtpScreen= () => {
  const [otp, setOtp] = useState<string[]>(['', '', '', '']);
  const inputRefs = useRef<(TextInput | null)[]>([]);

  const navigation:any = useNavigation()

  const handleChange = (text: string, index: number) => {
    if (isNaN(Number(text))) return;

    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    // Move to next input if a digit is entered
    if (text && index < 3) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleBackspace = (text: string, index: number) => {
    if (text === '' && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleSubmit = () => {
    
    console.log('OTP entered: ', otp.join(''));
    navigation.navigate('Bottomtabs')
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Enter the <Text className='text-violet-500'>code</Text></Text>
      <View className='mt-10'>
        <Text>Enter the 4 digit code that we have sent to</Text>
      </View>
      <View>
        <Text>jonathan@gmail.com</Text>
      </View>
      <View style={styles.container1}>
      <View style={styles.otpContainer}>
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            value={digit}
            onChangeText={(text) => handleChange(text, index)}
            onKeyPress={({ nativeEvent }) =>
              nativeEvent.key === 'Backspace' ? handleBackspace(digit, index) : null
            }
            ref={(el) => (inputRefs.current[index] = el)}
            style={styles.otpInput}
            keyboardType="number-pad"
            maxLength={1}
          />
        ))}
      </View>

      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Verify</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:10,
    backgroundColor: '#ffffff',
  },
  headerText: {
    fontSize: 24,
    fontFamily:"Lato-Black",
    fontWeight: '800',
    marginTop:60
  },
  container1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
  otpInput: {
    width: 70,
    height: 70,
    borderWidth: 1,
    borderColor: '#ccc',
    textAlign: 'center',
    fontSize: 24,
    borderRadius: 10,
    marginHorizontal: 5,
    backgroundColor: '#fff',
  },
  submitButton: {
    marginTop: 30,
    backgroundColor: '#252b5c',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 5,
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default OtpScreen;
