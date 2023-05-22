import React, { useState } from 'react';
import { View, Image } from 'react-native';

const LazyLoadingImage = ({ source }) => {
  const [isLoading, setIsLoading] = useState(true);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return (
    <View>
      {isLoading && <ActivityIndicator />}
      <Image source={source} onLoad={handleImageLoad} />
    </View>
  );
};

export default LazyLoadingImage;
