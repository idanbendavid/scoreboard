import React, { useEffect } from 'react';
import { View, Image, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import setOrientation from '../common/orientation';
import * as ScreenOrientation from 'expo-screen-orientation';


const LoadingScreen = () => {

  const navigation = useNavigation();

  useEffect(() => {
    setOrientation('portrait');

    return () => {
      // Unlock orientation when component is unmounted
      ScreenOrientation.unlockAsync();
    };
  }, []);
  
  return (
    <View style={styles.container}>
      {/* <Image source={require('./assets/background.jpg')} style={styles.backgroundImage} /> */}
      <Image style={styles.backgroundImage} />
      {/* Add your app name and other elements */}
      <Button title="Continue"  onPress={() => {
        navigation.navigate("sportList");
      }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
});

export default LoadingScreen;
