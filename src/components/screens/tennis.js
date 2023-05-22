import React, { useState, useEffect } from 'react';
import { View, Image, Text, Button } from 'react-native';
import Stopwatch from '../../components/common/stopwatch';
import EndGame from '../../components/common/endGame';
import setOrientation from '../common/orientation';
import * as ScreenOrientation from 'expo-screen-orientation';



const TennisScreen = ({ route }) => {
  const { teamNames, backgroundImage, numSets } = route.params;
  const [playerScores, setPlayerScores] = useState({
    playerA: 0,
    playerB: 0,
  });
  const [miniGameScores, setMiniGameScores] = useState({
    playerA: 0,
    playerB: 0,
  });

  useEffect(() => {
    setOrientation('landscape');

    return () => {
      // Unlock orientation when component is unmounted
      ScreenOrientation.unlockAsync();
    };
  }, []);

  const scoreLabels = ['0', '15', '30', '40', 'Advantage', 'Game'];

  const handleScore = (player) => {
    const opponent = player === 'playerA' ? 'playerB' : 'playerA';
    const playerScore = playerScores[player];
    const opponentScore = playerScores[opponent];
    const miniGameScore = miniGameScores[player];

    if (playerScore === 'Game' || playerScore === 'Advantage') {
      // Player already won the game or has advantage, increment set score
      setPlayerScores((prevScores) => ({
        ...prevScores,
        [player]: prevScores[player] + 1,
      }));
    } else if (playerScore === 40 && opponentScore === 40) {
      // Deuce or advantage
      if (miniGameScore === 5) {
        // Deuce, reach 6-6
        if (miniGameScores[opponent] === 6) {
          // Tiebreaker
          // Implement tiebreaker logic here
        } else {
          // Increment mini game score
          setMiniGameScores((prevScores) => ({
            ...prevScores,
            [player]: prevScores[player] + 1,
          }));
        }
      } else {
        // Increment regular scores
        const newScore = (miniGameScore === 3) ? 'Game' : (miniGameScore + 1);
        setMiniGameScores((prevScores) => ({
          ...prevScores,
          [player]: newScore,
        }));
      }
    } else {
      // Increment regular scores
      const newScore = (playerScore === '40') ? 'Game' : (playerScore + 15);
      setPlayerScores((prevScores) => ({
        ...prevScores,
        [player]: newScore,
      }));
    }
  };


  return (
    <View>
      <Image source={backgroundImage} />
      <Text>Tennis</Text>

      <Text>
        {teamNames.teamA}
        &nbsp; VS &nbsp;
        {teamNames.teamB}
      </Text>

      {/* <Stopwatch /> */}
      <EndGame />
    </View>
  );
};

export default TennisScreen;
