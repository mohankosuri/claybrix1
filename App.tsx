 import React,{useState,useEffect} from 'react';
 import { StyleSheet, Text, View } from 'react-native';
import Splash from './src/Components/Splash';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Appparamlist } from './src/types/Appparamlist';
import Login from './src/screens/Login';
 
import Onboarding from './src/screens/Onboarding';
import BottomTabs from './src/screens/BottomTabs';
import Loginform from './src/screens/Loginform';
import OtpScreen from './src/screens/OtpScreen';
import Registerform from './src/screens/Registerform';
import { GoogleUser } from './src/models/googleusers.model';
import { GoogleSignin, statusCodes, GoogleSigninButton } from '@react-native-google-signin/google-signin';
import { Googleusercontext } from './src/contexts/Googleusercontext';
import Toast from 'react-native-toast-message';


 const App = () => {
  const stack = createNativeStackNavigator<typeof Appparamlist>()
  const [user, setUser] = useState<GoogleUser | null>(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  
  useEffect(() => {
    GoogleSignin.configure({
      webClientId: "391444932002-u70t4q9qvk72cdkfubk85c27gar3fett.apps.googleusercontent.com",
      offlineAccess: false,
      scopes: ['profile', 'email'],
    });
  }, []);

  const GoogleLogin = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log("User Info:", userInfo);

      Toast.show({
        type:"success",
        text1:"Logedin sucessful...!"
      })
      
       
      return userInfo;
      
    } catch (error) {
      console.error('Google Sign-In error:', error);
      throw error;
    }
  };

  return (
    <View className='bg-white flex-1'>
      <Toast/>
      <Googleusercontext.Provider value={{ user, setUser,GoogleLogin,setError,setLoading }}>
      <NavigationContainer>
        <stack.Navigator initialRouteName='splash'>
       
       
        <stack.Screen name="splash" component={Splash}options={{ headerShown: false }}/>
        <stack.Screen name="Onboarding" component={Onboarding}options={{ headerShown: false }}/>
        <stack.Screen name="Login" component={Login}options={{ headerShown: false }}/>
        <stack.Screen name="Home" component={BottomTabs}options={{ headerShown: false }}/>
        <stack.Screen name="Loginform" component={Loginform}options={{ headerShown: false }}/>
        <stack.Screen name="Otpscreen" component={OtpScreen}options={{ headerShown: false }}/>
        <stack.Screen name="Bottomtabs" component={BottomTabs}options={{ headerShown: false }}/>
        <stack.Screen name="Registerform" component={Registerform}options={{ headerShown: false }}/>
        
       </stack.Navigator>
       </NavigationContainer>
       </Googleusercontext.Provider>
    </View>
  );
 }
 
 const styles = StyleSheet.create({})
 
 export default App;
 