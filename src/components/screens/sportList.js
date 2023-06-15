import React from 'react';
import { View, FlatList, TouchableOpacity, Text, StyleSheet } from 'react-native';


const SportScreen = ({ navigation }) => {

  const sportsData = [
    { id: 1, name: 'Football', backgroundImage: require('../../../assets/football.jpg') },
    { id: 2, name: 'Basketball', backgroundImage: require('../../../assets/basketball.jpg') },
    { id: 3, name: 'Volleyball', backgroundImage: require('../../../assets/volleyball.jpg') },
    { id: 4, name: 'Handball', backgroundImage: require('../../../assets/handball-court.png') }
  ];

  const handleSportPress = (sport) => {
    navigation.navigate('contestors', { sport });
  };

  const renderSportItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleSportPress(item)} style={styles.sportButton}>
      <Text style={styles.sportName}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.sportsContainer}>
      <FlatList style={styles.listItem}
        data={sportsData}
        renderItem={renderSportItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};


const styles = StyleSheet.create({
  sportsContainer: {
    backgroundColor: 'black',
  },
  sportButton: {
    height: 50,
    borderStyle: 'solid',
    borderWidth: 1,
    borderBottomColor: 'blue',
  },
  sportName: {
    fontSize: 20,
    color: 'white',
    marginVertical: 10,
    marginHorizontal: 5,
    alignItems: "flex-start"
  },
  sportIcon: {
    color: 'white',
    fontSize: 24,
  }
})

export default SportScreen;
