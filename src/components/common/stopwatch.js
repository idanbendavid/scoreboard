import React, { useState, useEffect } from 'react';
import { Text, Button, View } from 'react-native';

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
    <View>
      <Text>{formatTime(elapsedSeconds)}</Text>
      {isRunning ? (
        <Button title="Stop" onPress={handleStop} />
      ) : (
        <Button title="Start" onPress={handleStart} />
      )}
      <Button title="Reset" onPress={handleReset} />
    </View>
  );
};

export default Stopwatch;