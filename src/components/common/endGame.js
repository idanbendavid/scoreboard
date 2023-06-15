import React, { useState, useEffect } from 'react';
import { View, Modal, Button, Text, StyleSheet, TouchableOpacity  } from 'react-native';
import setOrientation from '../common/orientation';
import * as ScreenOrientation from 'expo-screen-orientation';


const EndGame = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleSave = () => {
    setModalVisible(false);
  };

  const handleDiscard = () => {
    setModalVisible(false);
  };

  useEffect(() => {
    setOrientation('landscape');

    return () => {
      // Unlock orientation when component is unmounted
      ScreenOrientation.unlockAsync();
    };
  }, []);

  return (
    <View style={styles.endGameContainer}>
      <Modal visible={modalVisible} animationType="slide">
        <View>
          <Text>End Game Confirmation</Text>
          <Text>Do you want to save the game or discard it?</Text>
          <Button title="Save" onPress={handleSave} />
          <Button title="Discard" onPress={handleDiscard} />
        </View>
      </Modal>
      <TouchableOpacity title="End Game" onPress={() => setModalVisible(true)} style={styles.endGameDisplay}>
      <Text style={styles.text}>End Game</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  endGameContainer:{
    alignItems: 'center',
    marginTop: 10
  },
  endGameDisplay:{
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
})

export default EndGame;
