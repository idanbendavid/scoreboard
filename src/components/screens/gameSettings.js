import React, { useState } from 'react';
import { View, TextInput, Pressable, StyleSheet, Text, Button } from 'react-native';
import pointSystem from '../points/pointsSystem';
import SelectDropdown from 'react-native-select-dropdown';
import { Controller, useForm } from 'react-hook-form';

const GameSettings = ({ navigation, route }) => {

  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      home: 'Home',
      away: 'Away',
      gameTime: null,
      gameStyle: null
    }
  });

  const gameStyleOptions = ["full game", "halves", "third", "quarters"];

  const onSubmit = data => {
    const { sport } = route.params;

    navigation.navigate("scoreboard", {
      sport: sport.name.toLowerCase(),
      home: data.home,
      away: data.away,
      backgroundImage: sport.backgroundImage,
      points: pointSystem(sport.name),
      gameTime: data.gameTime,
      gameStyle: data.gameStyle
    });
  };


  return (
    <View>
      <View style={styles.teamsContainer}>
        <Text style={styles.labels}>Home Team:</Text>
        <Controller
          control={control}
          name="home"
          rules={{ required: 'team name is required' }}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <View>
              <TextInput
                inputMode='text'
                placeholder="Home"
                value={value}
                onChangeText={onChange}
                style={styles.input}
              />
              {error && (<Text style={styles.error}>{error.message}</Text>)}
            </View>
          )}
        />

        <Text style={styles.labels}>Away Team:</Text>

        <Controller
          control={control}
          name="away"
          rules={{ required: 'team name is required' }}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <View>
              <TextInput
                inputMode='text'
                placeholder="Away"
                value={value}
                onChangeText={onChange}
                style={styles.input}
              />
              {error && (<Text style={styles.error}>{error.message}</Text>)}
            </View>
          )}
        />
      </View>


      <Text style={styles.labels}>Game Time:</Text>
      <Controller
        control={control}
        name={"gameTime"}
        rules={{ required: 'please include the game target time' }}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <View>
            <TextInput
              value={value}
              inputMode='numeric'
              placeholder="Minutes"
              onChangeText={onChange}
              style={styles.input}
            />
            {error && (<Text style={styles.error}>{error.message}</Text>)}
          </View>
        )}
      />


      <Text style={styles.labels}>Game Style:</Text>
      <Controller
        control={control}
        name="gameStyle"
        rules={{ required: 'must select the style of the game' }}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <View>
            <SelectDropdown
              value={value}
              data={gameStyleOptions}
              buttonStyle={styles.buttonStyles}
              rowTextStyle={styles.rowTextStyle}
              onSelect={(selectedItem) => {
                onChange(selectedItem)
              }}
            />
            {error && (<Text style={styles.error}>{error.message}</Text>)}
          </View>
        )}
      />
      <Pressable onPress={handleSubmit(onSubmit)}>
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
    backgroundColor: '#e6e6e6'
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
