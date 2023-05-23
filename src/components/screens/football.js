import React, { useEffect } from 'react';
import { View, Image, Text, Button } from 'react-native';
import Stopwatch from '../../components/common/stopwatch';
import EndGame from '../../components/common/endGame';
import setOrientation from '../common/orientation';
import * as ScreenOrientation from 'expo-screen-orientation';
import HandleTeamsScores from '../common/teamScores';

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
    <View>
      <Image source={backgroundImage} />
      <Text>Football</Text>
      <Stopwatch />
      <HandleTeamsScores teamAName={teamNames.teamA} teamBName={teamNames.teamB} points={points} sport={sport}/>
      <EndGame />
    </View>
  );
};

export default FootballScreen;
