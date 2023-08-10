import React, { useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import setOrientation from '../common/orientation';
import * as ScreenOrientation from 'expo-screen-orientation';


const LoadingScreen = () => {

  const navigation = useNavigation();

  useEffect(() => {
    setOrientation('portrait');

    return () => {
      ScreenOrientation.unlockAsync();
    };
  }, []);
  return (
    <View style={styles.container} onTouchStart={() => { navigation.navigate("Sport"); }}>
      <Text style={styles.welcomeTitle}>who is the winner?</Text>
      <Text style={styles.welcomeScore}>0&nbsp;vs&nbsp;0</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 5,
    flexDirection: 'column',
    marginTop: 50
  },
  welcomeTitle: {
    borderColor: 'black',
    borderWidth: 1,
    fontSize: 40,
    textTransform: 'uppercase',
    flex: 3,
    flexDirection:'column',
  },
  welcomeScore: {
    borderColor: 'blue',
    borderWidth: 1,
    fontSize: 100,
    flex: 2,

  }
});

export default LoadingScreen;
