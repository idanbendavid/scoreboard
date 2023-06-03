import React from 'react';
import { View, FlatList, TouchableOpacity, Text } from 'react-native';

const sportsData = [
  { id: 1, name: 'Football', backgroundImage: require('../../../assets/football.jpg') },
  { id: 2, name: 'Basketball', backgroundImage: require('../../../assets/basketball.jpg') },
  { id: 3, name: 'Volleyball' },
  { id: 4, name: 'Handball' }
];

const SportListScreen = ({ navigation }) => {

  const handleSportPress = (sport) => {
    navigation.navigate('contestors', { sport });
  };

  const renderSportItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleSportPress(item)}>
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
