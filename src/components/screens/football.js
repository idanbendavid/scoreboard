import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ImageBackground, Image } from 'react-native';
import Stopwatch from '../../components/common/stopwatch';
import EndGame from '../../components/common/endGame';
import setOrientation from '../common/orientation';
import * as ScreenOrientation from 'expo-screen-orientation';
import HandleTeamsScores from '../common/teamScores';
import LazyLoadingImage from '../common/lazyLoading';

const FootballScreen = ({ route }) => {

  const { teamNames, backgroundImage } = route.params;
  const points = 1;
  const sport = 'football';

  useEffect(() => {
    setOrientation('landscape');
    return () => {
      ScreenOrientation.unlockAsync();
    };
  }, []);

  return (
    <>
    <LazyLoadingImage source={backgroundImage} />
      <View style={styles.FootballScreenContainer}>
        <Stopwatch />
        <HandleTeamsScores home={teamNames.home} away={teamNames.away} points={points} sport={sport} />
        <EndGame />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  FootballScreenContainer: {
    marginTop: 50
  },
})
export default FootballScreen;
