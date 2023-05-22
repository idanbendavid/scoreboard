import React, { useState, useEffect } from 'react';
import { View, Image, Text, Button } from 'react-native';
import Stopwatch from '../../components/common/stopwatch';
import EndGame from '../../components/common/endGame';
import setOrientation from '../common/orientation';
import * as ScreenOrientation from 'expo-screen-orientation';


const VolleyballScreen = ({ route }) => {
  const { teamNames, backgroundImage } = route.params;
  const [teamAScore, setTeamAScore] = useState(0);
  const [teamBScore, setTeamBScore] = useState(0);
  // const [miniGameScore, setMiniGameScore] = useState({
  //   teamA: 0,
  //   teamB: 0,
  // });

  useEffect(() => {
    setOrientation('landscape');

    return () => {
      // Unlock orientation when component is unmounted
      ScreenOrientation.unlockAsync();
    };
  }, []);
  
  const handleScoreTeamA = () => {
    setTeamAScore((prevScore) => prevScore + 1);
  };

  const handleScoreTeamB = () => {
    setTeamBScore((prevScore) => prevScore + 1);
  };

  return (
    <View>
      <Image source={backgroundImage} />
      <Text>Volleyball</Text>

      <Text>Team A: {teamNames.teamA}</Text>
      <Text>Score: {teamAScore}</Text>
      <Button title="Score Team A" onPress={handleScoreTeamA} />

      <Text>Team B: {teamNames.teamB}</Text>
      <Text>Score: {teamBScore}</Text>
      <Button title="Score Team B" onPress={handleScoreTeamB} />

      <Stopwatch />
      <EndGame/>
    </View>
  );
};

export default VolleyballScreen;
