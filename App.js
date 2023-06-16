import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoadingScreen from './src/components/screens/loadingScreen';
import SportScreen from './src/components/screens/sportList';
import EnterContestors from './src/components/screens/contestors';
import EndGame from './src/components/screens/endGame';
import Scoreboard from './src/components/screens/scoreboard';

const Stack = createStackNavigator();

function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* ---------------  initial route  ------------------ */}
        <Stack.Screen name="welcome" component={LoadingScreen} />
        {/* ---------------  initial route  ------------------ */}

        <Stack.Screen name="Sport" component={SportScreen} />
        <Stack.Screen name="contestors" component={EnterContestors} />
        <Stack.Screen options={{ headerShown: false }} name="scoreboard" component={Scoreboard} />
        <Stack.Screen options={{ headerShown: true }} name="endGame" component={EndGame} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
