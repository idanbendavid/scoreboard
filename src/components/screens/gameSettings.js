import React, { useState } from 'react';
import { View, TextInput, Pressable, StyleSheet, Text } from 'react-native';
import pointSystem from '../points/pointsSystem';
import SelectDropdown from 'react-native-select-dropdown';

const GameSettings = ({ navigation, route }) => {

  const gameStyleOptions = ["full game", "halves", "thirds", "quarters"];

  const [form, setForm] = useState({
    home: 'Home',
    away: 'Away',
    gameTime: null,
    gameStyle: ''
  })


  const onSubmit = () => {
    const { sport } = route.params;

    navigation.navigate("scoreboard", {
      sport: sport.name.toLowerCase(),
      backgroundImage: sport.backgroundImage,
      points: pointSystem(sport.name),
      form
    });
  };


  return (
    <View>
      <Text style={styles.labels}>Home Team:</Text>

      <TextInput
        inputMode='text'
        placeholder="Home"
        value={form.home}
        onChangeText={home => { setForm({ ...form, home }) }}
        style={styles.input}
      />

      <Text style={styles.labels}>Away Team:</Text>
      <TextInput
        inputMode='text'
        placeholder="Away"
        value={form.away}
        onChangeText={away => { setForm({ ...form, away }) }}
        style={styles.input}
      />

      <Text style={styles.labels}>Game Time:</Text>
      <TextInput
        value={form.gameTime}
        inputMode='numeric'
        placeholder="Minutes"
        onChangeText={gameTime => { setForm({ ...form, gameTime}) }}
        style={styles.input}
      />

      <Text style={styles.labels}>Game Style:</Text>
      <SelectDropdown
        value={gameStyleOptions[0]}
        data={gameStyleOptions}
        buttonTextStyle={styles.buttonStyles}
        rowTextStyle={styles.rowTextStyle}
        onSelect={(selectedItem) => { setForm({ ...form, gameStyle: selectedItem }) }}
      />

      <Pressable onPress={onSubmit}>
        <Text style={styles.startGameButton}>start game</Text>
      </Pressable>
    </View>
  );
};


const styles = StyleSheet.create({
  teamsContainer: {
    marginTop: 10
  },
  input: {
    height: 40,
    marginHorizontal: 12,
    marginVertical: 6,
    borderWidth: 1,
    padding: 10,
  },
  labels: {
    paddingHorizontal: 12,
    paddingVertical: 5,
    fontSize: 16
  },
  startGameButton: {
    backgroundColor: '#2196F3',
    color: 'white',
    textAlign: 'center',
    alignSelf: 'center',
    padding: 5,
    fontSize: 18,
    textTransform: 'capitalize',
    marginTop: 20
  },
  dropdownView: {
    marginBottom: 20,
  },
  buttonStyles: {
    alignItems: 'center',
    textTransform: 'capitalize'
  },
  rowTextStyle: {
    textTransform: 'capitalize',
  },
  error: {
    color: 'red',
    alignSelf: 'center',
    marginVertical: 5
  },
});
export default GameSettings;
