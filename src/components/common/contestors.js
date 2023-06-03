import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';

const EnterContestors = ({ navigation, route }) => {
  const [home, setHome] = useState('Home');
  const [away, setAway] = useState('Away');

  const handleStartGame = () => {
    const { sport } = route.params;
    navigation.navigate(sport.name.toLowerCase(), {
      teamNames: { home, away },
      backgroundImage: sport.backgroundImage,
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
