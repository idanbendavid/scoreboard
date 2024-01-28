import React, { useEffect, useRef } from 'react';
import { View, StyleSheet, Text, Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import setOrientation from '../common/orientation';
import * as ScreenOrientation from 'expo-screen-orientation';


const LoadingScreen = () => {

  const navigation = useNavigation();

  const fadeAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    setOrientation('portrait');

    const fade = () => {
      Animated.sequence([
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 1000, // Fade out duration
          useNativeDriver: false,
        }),
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 1000, // Fade in duration
          useNativeDriver: false,
        }),
      ]).start(() => fade());
    };

    fade();

    return () => {
      ScreenOrientation.unlockAsync();
    };
  }, [fadeAnim]);

  return (
    <View onTouchStart={() => navigation.navigate("Sport")} style={styles.container}>
      <Text style={styles.welcomeTitle}>who is the winner?</Text>
      <View style={styles.connections}>
        {<Animated.View style={{ opacity: fadeAnim }}>
          <Text style={styles.introButton}>touch to start</Text>
        </Animated.View>
        }
      </View>
      <Text style={styles.welcomeScore}>0&nbsp;vs&nbsp;0</Text>
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    flexDirection: 'row',
    justifyContent: 'center'
  },
  introButton: {
    fontSize: 30,
    textTransform: 'capitalize',
    fontWeight: '700'
  }
});

export default LoadingScreen;
