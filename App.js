import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoadingScreen from './src/components/screens/loadingScreen';
import SportsListScreen from './src/components/screens/sportList';
import FootballScreen from './src/components/screens/football';
import BasketballScreen from './src/components/screens/basketball';
import VolleyballScreen from './src/components/screens/volleyball';
import TennisScreen from './src/components/screens/tennis';
import HandballScreen from './src/components/screens/handball';
import EnterTeamNamesScreen from './src/components/common/teamNames';
import EndGame from './src/components/common/endGame';

const Stack = createStackNavigator();

function App() {
  
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="loading">
        <Stack.Screen name="loading" component={LoadingScreen} />
        <Stack.Screen name="sportList" component={SportsListScreen} />
        <Stack.Screen name="football" component={FootballScreen} />
        <Stack.Screen name="basketball" component={BasketballScreen} />
        <Stack.Screen name="volleyball" component={VolleyballScreen} />
        <Stack.Screen name="tennis" component={TennisScreen} />
        <Stack.Screen name="handball" component={HandballScreen} />
        <Stack.Screen name="teamNames" component={EnterTeamNamesScreen} />
        <Stack.Screen name="endGame" component={EndGame} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
