import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';


const Stopwatch = () => {
  const [elapsedSeconds, setElapsedSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setElapsedSeconds((prevElapsedSeconds) => prevElapsedSeconds + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isRunning]);

  const handleStart = () => {
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setElapsedSeconds(0);
    setIsRunning(false);
  };

  const formatTime = (totalSeconds) => {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    return `${padZero(minutes)}:${padZero(seconds)}`;
  };

  const padZero = (value) => {
    return value.toString().padStart(2, '0');
  };

  return (
    <View style={styles.stopwatchContainer}>
      <Text style={styles.time}>{formatTime(elapsedSeconds)}</Text>
      <View style={styles.timeActions}>
        {!isRunning &&
          <FontAwesome name="play-circle" style={styles.play} onPress={handleStart} />
        }
        {isRunning &&
          <>
            <FontAwesome name="pause-circle" style={styles.pause} onPress={handleStop} />
            <FontAwesome name="stop-circle" style={styles.stop} onPress={handleReset} />
          </>
        }
      </View>
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
    marginLeft: 8
  },
  play: {
    fontSize: 40,
    color: 'black',
    marginLeft: 5,
  },
  pause: {
    fontSize: 40,
    color: 'black',
    marginStart:10
  },
  stop: {
    fontSize: 40,
    color: 'black',
    marginEnd: 5
  }
})


export default Stopwatch;