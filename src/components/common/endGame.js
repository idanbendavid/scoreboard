import React, { useState, useEffect } from 'react';
import { View, Modal, Button, Text } from 'react-native';
import setOrientation from '../common/orientation';
import * as ScreenOrientation from 'expo-screen-orientation';


const EndGame = ({ onSave, onDiscard }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleSave = () => {
    // onSave();
    setModalVisible(false);
  };

  const handleDiscard = () => {
    // onDiscard();
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
    <View>
      <Modal visible={modalVisible} animationType="slide">
        <View>
          <Text>End Game Confirmation</Text>
          <Text>Do you want to save the game or discard it?</Text>
          <Button title="Save" onPress={handleSave} />
          <Button title="Discard" onPress={handleDiscard} />
        </View>
      </Modal>
      <Button title="End Game" onPress={() => setModalVisible(true)} />
    </View>
  );
};

export default EndGame;
