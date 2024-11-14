import { View, Text,Image } from 'react-native'
import React,{useContext} from 'react'
import { Googleusercontext } from '../contexts/Googleusercontext';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { useNavigation } from '@react-navigation/native';
 

const BottomTabs = () => {

    const { setUser, user }: any = useContext(Googleusercontext);
    const navigation: any = useNavigation();

    
  const signOut = async () => {
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      setUser(null);
      navigation.navigate('Loginform');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View>
      <Text>BottomTabs</Text>
      {user && (
        <View>
          <Image source={{ uri: user.photo }} className='w-32 h-32 rounded-full'/>
          <Text>{user.name}</Text>
          <Text>{user.email}</Text>
          <Text onPress={signOut}>Sign out</Text>
        </View>
      )}
    </View>
  )
}

export default BottomTabs