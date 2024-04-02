import React, { useState } from 'react';
import { View, ImageBackground, StyleSheet, ActivityIndicator } from 'react-native';

const LazyLoadingImage = ({ source }) => {
  const [isLoading, setIsLoading] = useState(true);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return (
    <>
      {isLoading &&
        <ActivityIndicator/>
      }
      <View resizeMode={'contain'}>
        <ImageBackground source={source} style={styles.image} onLoad={handleImageLoad} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  image: {
    position: 'absolute',
    width: '100%',
    height: undefined,
    aspectRatio: 2
  }
})
export default LazyLoadingImage;
