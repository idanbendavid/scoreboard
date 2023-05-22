import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';

const EnterTeamNamesScreen = ({ navigation, route }) => {
  const [teamA, setTeamA] = useState('');
  const [teamB, setTeamB] = useState('');

  const handleStartGame = () => {
    const { sport } = route.params;
    navigation.navigate(sport.name.toLowerCase(), {
      teamNames: { teamA, teamB },
      backgroundImage: sport.backgroundImage,
    });
  };

  return (
    <View>
      <TextInput
        placeholder="Team A"
        value={teamA}
        onChangeText={setTeamA}
      />
      <TextInput
        placeholder="Team B"
        value={teamB}
        onChangeText={setTeamB}
      />
      <Button title="Start Game" onPress={handleStartGame} />
    </View>
  );
};

export default EnterTeamNamesScreen;
