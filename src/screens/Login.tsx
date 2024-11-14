import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const Login = () => {

    const navigation:any = useNavigation()
  return (
    <View style={styles.container}>
      

      <View style={styles.imageGrid}>
        <Image
          source={{ uri: 'https://storage.googleapis.com/a1aa/image/87TnVWiQ0oYeeUGIzb2MeCBCeKuyODiTRuefcaGPPhkM0Ye3JA.jpg' }}
          style={styles.image}
        />
        <Image
          source={{ uri: 'https://storage.googleapis.com/a1aa/image/k7jW4x52hI4qLZB49c8H8t6YnVexYwPR5bvbpm04UL1qx83JA.jpg' }}
          style={styles.image}
        />
        <Image
          source={{ uri: 'https://storage.googleapis.com/a1aa/image/WI4euaHVgd1JLa6wmfDuQS2XqVzUdehBrAdoT3wzs4f4MmfdC.jpg' }}
          style={styles.image}
        />
        <Image
          source={{ uri: 'https://storage.googleapis.com/a1aa/image/ZpCBneY5kTVpSyEZUDrqz6vF2fSKBh6I4xRKkrCfjISsGzfOB.jpg' }}
          style={styles.image}
        />
      </View>

      <Text style={styles.exploreText}>
        Ready to <Text style={styles.exploreHighlight}>explore?</Text>
      </Text>

      <TouchableOpacity style={styles.emailButton} onPress={()=>navigation.navigate("Loginform")}>
        <Ionicons name="mail-outline" size={20} color="#fff" style={styles.icon} />
        <Text style={styles.emailButtonText}>Continue with Email</Text>
      </TouchableOpacity>

      <View style={styles.orDivider}>
        <View style={styles.dividerLine} />
        <Text style={styles.dividerText}>OR</Text>
        <View style={styles.dividerLine} />
      </View>

      <View style={styles.socialButtons}>
       <TouchableOpacity className='bg-gray-100 px-2 rounded-[10px]'>
       <Image
          source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1200px-Google_%22G%22_logo.svg.png' }}
          style={styles.socialIcon}
        />
       </TouchableOpacity>
       <TouchableOpacity className='bg-gray-100 px-2 rounded-[10px]'>
       <Image
          source={{ uri: 'https://cdn-icons-png.flaticon.com/512/5968/5968764.png' }}
          style={styles.socialIcon}
        />
       </TouchableOpacity>
       <TouchableOpacity className='bg-gray-100 px-2 rounded-[10px]'>
       <Image
          source={{ uri: 'https://cdn-icons-png.flaticon.com/512/0/747.png' }}
          style={styles.socialIcon}
        />
       </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    backgroundColor: '#ffffff',
    padding: 20,
  },
  title: {
    fontSize: 18,
    color: '#4a4a4a',
    marginBottom: 20,
  },
  imageGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  image: {
    width: '48%',
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },
  exploreText: {
    fontSize: 24,
    color: '#000',
    marginBottom: 20,
    marginTop:20
  },
  exploreHighlight: {
    color: '#6b5bff',
  },
  emailButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#252b5c',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 25,
    marginBottom: 30,
    marginTop:40
  },
  emailButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  icon: {
    marginRight: 10,
  },
  orDivider: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#ccc',
  },
  dividerText: {
    marginHorizontal: 10,
    color: '#4a4a4a',
  },
  socialButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems:"flex-end",
    marginTop:20,
   
  },
  socialIcon: {
    width: 45,
    height: 45,
    
    margin:10,
    
  },
});

export default Login;
