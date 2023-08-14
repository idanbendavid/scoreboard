import React, { useEffect } from 'react';
import { View, StyleSheet, Text, Pressable } from 'react-native';
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
    <View style={styles.container}>
      <Text style={styles.welcomeTitle}>who is the winner?</Text>
      <Text style={styles.welcomeScore}>0&nbsp;vs&nbsp;0</Text>
      <View style={styles.connections}>
        <View>
          <Pressable onPress={() => navigation.navigate("Sign In")}>
            <Text>Sign In</Text>
          </Pressable>
        </View>
        &nbsp;
        <View>
          <Pressable onPress={() => navigation.navigate("Sport")}>
            <Text>play as guest</Text>
          </Pressable>
        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 6,
    flexDirection: 'column',
    marginTop: 50
  },
  welcomeTitle: {
    borderColor: 'black',
    borderWidth: 1,
    fontSize: 40,
    textTransform: 'uppercase',
    flex: 3,
    flexDirection: 'column',
  },
  welcomeScore: {
    borderColor: 'blue',
    borderWidth: 1,
    fontSize: 100,
    flex: 2,
  },
  connections: {
    flex: 1,
    flexDirection: 'row'
  }
});

export default LoadingScreen;
