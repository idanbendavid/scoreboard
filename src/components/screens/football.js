import React, { useState, useEffect } from 'react';
import { View, Image, Text, Button } from 'react-native';
import Stopwatch from '../../components/common/stopwatch';
import EndGame from '../../components/common/endGame';
import setOrientation from '../common/orientation';
import * as ScreenOrientation from 'expo-screen-orientation';


const FootballScreen = ({ route }) => {
  const { teamNames, backgroundImage } = route.params;
  const [scoreA, setScoreA] = useState(0);
  const [scoreB, setScoreB] = useState(0);

  useEffect(() => {
    setOrientation('landscape');

    return () => {
      // Unlock orientation when component is unmounted
      ScreenOrientation.unlockAsync();
    };
  }, []);

  const handleIncrementScoreA = () => {
    setScoreA(scoreA + 1);
  };

  const handleIncrementScoreB = () => {
    setScoreB(scoreB + 1);
  };

  const handleSaveGame = () => {
    // Logic to save the football game
    console.log('Football game saved');
  };

  const handleDiscardGame = () => {
    // Logic to discard the football game
    console.log('Football game discarded');
  };

  return (
    <View>
      <Image source={backgroundImage} />
      <Text>Football</Text>
      <Text>{teamNames.teamA} &nbsp; VS &nbsp; {teamNames.teamB}</Text>
      <Text>{scoreA} &nbsp; VS &nbsp; {scoreB}</Text>
      <Stopwatch />
      <Button title="+1 team A" onPress={handleIncrementScoreA} />
      <Button title="+1 team B" onPress={handleIncrementScoreB} />
      <EndGame
        visible={EndGame}
        onSave={handleSaveGame}
        onDiscard={handleDiscardGame}
      />
    </View>
  );
};

export default FootballScreen;
