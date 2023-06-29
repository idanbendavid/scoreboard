import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import EndGame from '../screens/endGame';

const Stopwatch = ({ isRunning, setIsRunning, setResetScore, gameTime, gameStyle }) => {
  const [elapsedSeconds, setElapsedSeconds] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  const [currentHalf, setCurrentHalf] = useState(1);
  const [currentThird, setCurrentThird] = useState(1);
  const [currentQuarter, setCurrentQuarter] = useState(1);
  const [isExtraTime, setIsExtraTime] = useState(false);

  useEffect(() => {
    let interval;
    const timeTargets = calculateTimeTargets(gameTime, gameStyle);

    interval = setInterval(() => {
      if (isRunning) {
        setElapsedSeconds((prevElapsedSeconds) => prevElapsedSeconds + 1);
        checkNotifications(elapsedSeconds + 1, timeTargets);
      }
    }, 1000);

    if (
      (gameStyle.toLowerCase() === 'halves' && currentHalf <= timeTargets.length) ||
      (gameStyle.toLowerCase() === 'third' && currentHalf <= timeTargets.length) ||
      (gameStyle.toLowerCase() === 'quarters' && currentQuarter <= timeTargets.length) ||
      (gameStyle.toLowerCase() === 'full game' && elapsedSeconds >= timeTargets[0])
    ) {
      if (elapsedSeconds >= timeTargets[timeTargets.length - 1]) {
        setIsExtraTime(true);
      }

      if (gameStyle.toLowerCase() === 'halves' && currentHalf <= timeTargets.length) {
        const timeTarget = timeTargets[currentHalf - 1];
        if (elapsedSeconds >= timeTarget) {
          setCurrentHalf((prevHalf) => prevHalf + 1);
        }
      } else if (gameStyle.toLowerCase() === 'third' && currentThird <= timeTargets.length) {
        const timeTarget = timeTargets[currentThird - 1];
        if (elapsedSeconds >= timeTarget) {
          setCurrentThird((prevThird) => prevThird + 1);
        }
      } else if (gameStyle.toLowerCase() === 'quarters' && currentQuarter <= timeTargets.length) {
        const timeTarget = timeTargets[currentQuarter - 1];
        if (elapsedSeconds >= timeTarget) {
          setCurrentQuarter((prevQuarter) => prevQuarter + 1);
        }
      }
    }
    return () => clearInterval(interval);
  }, [isRunning, gameTime, gameStyle, elapsedSeconds, currentHalf, currentThird, currentQuarter, checkNotifications]);

  const formatTime = (totalSeconds) => {

    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    let displayText = `${padZero(minutes)}:${padZero(seconds)}`;

    if (isExtraTime) {
      return `Extra Time ${displayText}`;
    }

    if (gameStyle.toLowerCase() === 'halves') {
      displayText = `${getHalfLabel(currentHalf)} - ${displayText}`;
    } else if (gameStyle.toLowerCase() === 'third') {
      displayText = `${getThirdLabel(currentThird)} - ${displayText}`;
    } else if (gameStyle.toLowerCase() === 'quarters') {
      displayText = `${getQuarterLabel(currentQuarter)} - ${displayText}`;
    }

    return displayText;
  };

  const padZero = (value) => {
    return value.toString().padStart(2, '0');
  };


  const calculateTimeTargets = (gameTime, gameStyle) => {
    let timeTargets = [];

    switch (gameStyle.toLowerCase()) {
      case 'full game':
        timeTargets = [gameTime * 60];
        break;
      case 'halves':
        timeTargets = [(gameTime / 2) * 60, gameTime * 60];
        break;
      case 'third':
        const thirdDuration = (gameTime * 60) / 3;
        timeTargets = [
          thirdDuration * 1,
          thirdDuration * 2,
          thirdDuration * 3,
        ];
        break;
      case 'quarters':
        const quarterDuration = (gameTime * 60) / 4;
        timeTargets = [
          quarterDuration * 1,
          quarterDuration * 2,
          quarterDuration * 3,
          quarterDuration * 4,
        ];
        break;
      default:
        timeTargets = [gameTime * 60];
        break;
    }

    return timeTargets;
  };

  const getHalfLabel = (half) => {
    return `${half === 1 ? '1st Half' : '2nd Half'}`;
  };

  const getThirdLabel = (third) => {
    return `${getOrdinalSuffix(third)} third`;
  };

  const getQuarterLabel = (quarter) => {
    return `${getOrdinalSuffix(quarter)} Quarter`;
  };

  const getOrdinalSuffix = (number) => {
    const suffixes = ['th', 'st', 'nd', 'rd'];
    const relevantDigits = number % 100;

    return number + (suffixes[(relevantDigits - 20) % 10] || suffixes[relevantDigits] || suffixes[0]);
  };

  const checkNotifications = (elapsedSeconds, timeTargets) => {
    if (timeTargets.includes(elapsedSeconds)) {
      // playNotificationSound();
      // Display notification to the user
      console.log(`Time target reached: ${getQuarterLabel(elapsedSeconds)}`);
      // Replace the following line with the appropriate code for your notification system
    }
  };

  const playNotificationSound = () => {
    // Replace the following line with the appropriate code to play a notification sound
    console.log('Playing notification sound');
  };

  return (
    <View style={styles.stopwatchContainer}>
      <Text style={styles.time}>{formatTime(elapsedSeconds)}</Text>
      <View style={styles.timeActions}>
        <FontAwesome name={isRunning ? 'pause-circle' : 'play-circle'} style={styles.button} onPress={() => setIsRunning(!isRunning)} />
        <FontAwesome name="stop-circle" style={styles.button} onPress={() => setModalVisible(true)} />
      </View>
      {modalVisible && (
        <EndGame
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          setElapsedSeconds={setElapsedSeconds}
          setIsRunning={setIsRunning}
          setResetScore={setResetScore}
          formatTime={() => formatTime(0)}
          setIsExtraTime={setIsExtraTime}
          setCurrentHalf={setCurrentHalf}
          setCurrentThird={setCurrentThird}
          setCurrentQuarter={setCurrentQuarter}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  stopwatchContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  timeActions: {
    flexDirection: 'row-reverse',
  },
  time: {
    color: 'black',
    fontSize: 45,
    marginLeft: 8,
  },
  button: {
    fontSize: 40,
    color: 'black',
    marginHorizontal: 5,
  },
});

export default Stopwatch;