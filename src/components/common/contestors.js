import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import pointSystem from './pointsSystem';

const EnterContestors = ({ navigation, route }) => {
  const [home, setHome] = useState('Home');
  const [away, setAway] = useState('Away');

  const handleStartGame = () => {
    const { sport } = route.params;
    navigation.navigate("scoreboard", {
      sport: sport.name.toLowerCase(),
      teamNames: { home, away },
      backgroundImage: sport.backgroundImage,
      points: pointSystem(sport.name)
    });
  };

  return (
    <View>
      <TextInput
        placeholder="Home"
        value={home}
        onChangeText={setHome}
      />
      <TextInput
        placeholder="Away"
        value={away}
        onChangeText={setAway}
      />
      <Button title="Start Game" onPress={handleStartGame} />
    </View>
  );
};

export default EnterContestors;
