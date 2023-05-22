import React from 'react';
import { View, FlatList, TouchableOpacity, Text, Image } from 'react-native';

const sportsData = [
  { id: 1, name: 'Football' },
  { id: 2, name: 'Basketball' },
  { id: 3, name: 'Volleyball' },
  { id: 4, name: 'Tennis' },
  { id: 5, name: 'Handball' }
  // { id: 6, name: 'teamNames' }
  // { id: 1, name: 'Football', backgroundImage: require('./football.jpg') },
  // { id: 2, name: 'Basketball', backgroundImage: require('./basketball.jpg') },
  // { id: 3, name: 'Volleyball', backgroundImage: require('./volleyball.jpg') },
  // { id: 4, name: 'Tennis', backgroundImage: require('./tennis.jpg') },
  // { id: 5, name: 'Handball', backgroundImage: require('./handball.jpg') },
];

const SportListScreen = ({ navigation }) => {

  const handleSportPress = (sport) => {
    navigation.navigate('teamNames', { sport });
  };

  const renderSportItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleSportPress(item)}>
      <Image source={item.backgroundImage} />
      <Text>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View>
      <FlatList
        data={sportsData}
        renderItem={renderSportItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default SportListScreen;
