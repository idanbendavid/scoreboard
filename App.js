import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Football from './src/components/football';
import SportList from './src/components/sportList';

export default function App() {
  // const message = 'hello';
  
  // const [firstTeamName,setFirstTeamName] = useState("");
  // const [firstTeamScore, setFirstTeamScore] = useState(0);

  // const [secondTeamName,setSecondTeamName] = useState("");
  // const [secondTeamScore, setSecondTeamScore] = useState(0);
  
  // const finalScore = ['Win','Lose','Draw'];


  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        {/* <Text>hello world</Text> */}
        {/* <Text>{message} world</Text> */}
        <Football />
        <SportList/>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    // flexDirection: 'row',
    // alignItems: 'flex-start',
    // backgroundColor: 'red'
  },
  container: {
    flex: 1,
  },
});
