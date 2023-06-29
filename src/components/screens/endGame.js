import React, { useEffect } from 'react';
import { View, Modal, Pressable, Text, StyleSheet } from 'react-native';
import setOrientation from '../common/orientation';


const EndGame = ({ modalVisible, setModalVisible, setElapsedSeconds, setIsRunning, setResetScore, formatTime, setIsExtraTime, setCurrentHalf, setCurrentQuarter, setCurrentThird }) => {

  const continueToPlay = () => {
    setModalVisible(false);
    setIsRunning(true);
  };

  const resetGameData = () => {
    setIsRunning(false);
    setElapsedSeconds(0);
    formatTime(0);
    setIsExtraTime(false);
    setCurrentHalf(1);
    setCurrentThird(1);
    setCurrentQuarter(1);
    setResetScore(true);
    setModalVisible(false);
  };

  useEffect(() => {
    setOrientation('landscape');

    if (modalVisible) {
      setIsRunning(false);
    }
  }, [setOrientation]);

  return (
    <View>
      <Modal visible={modalVisible} animationType="fade" >
        <View>
          <Text style={styles.headline}>End Game Confirmation</Text>
          <Text style={styles.question}>Do you want to end the game and reset the time and score?</Text>
          <View style={styles.modalActions}>
            <Pressable title="reset" onPress={resetGameData}>
              <Text style={styles.reset}>reset</Text>
            </Pressable>
            <Pressable title="play" onPress={continueToPlay}>
              <Text style={styles.play}>play</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  headline: {
    fontSize: 30,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    textAlign: 'center',
    marginTop: 10
  },
  question: {
    fontSize: 20,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    textAlign: 'center',
    marginVertical: 10
  },
  modalActions: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  play: {
    backgroundColor: 'green',
    color: 'white',
    fontSize: 30,
    textTransform:'capitalize',
    padding: 5
  },
  reset: {
    backgroundColor: 'red',
    color: 'white',
    fontSize: 30,
    textTransform:'capitalize',
    padding: 5
  }
})

export default EndGame;
