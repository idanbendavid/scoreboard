import React, { useState, useEffect } from 'react';
import { View, Image, Text, Button } from 'react-native';
import Stopwatch from '../../components/common/stopwatch';
import EndGame from '../../components/common/endGame';
import HandleTeamsScores from '../../components/common/teamScores';
import LazyLoadingImage from '../../components/common/lazyLoading';
import setOrientation from '../common/orientation';
import * as ScreenOrientation from 'expo-screen-orientation';


const VolleyballScreen = ({ route }) => {
  const { teamNames, backgroundImage } = route.params;
  const points = 1;
  const sport = 'volleyball';

  // const [miniGameScore, setMiniGameScore] = useState({
  //   teamA: 0,
  //   teamB: 0,
  // });

  useEffect(() => {
    setOrientation('landscape');
    return () => {
      ScreenOrientation.unlockAsync();
    };
  }, []);


  return (
    <View>
      <LazyLoadingImage source={backgroundImage} />
      <Text>Volleyball</Text>
      <Stopwatch />
      <HandleTeamsScores home={teamNames.home} away={teamNames.away} points={points} sport={sport} />
      <EndGame />
    </View>
  );
};

export default VolleyballScreen;
