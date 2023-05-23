import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoadingScreen from './src/components/screens/loadingScreen';
import SportsListScreen from './src/components/screens/sportList';
import FootballScreen from './src/components/screens/football';
import BasketballScreen from './src/components/screens/basketball';
import VolleyballScreen from './src/components/screens/volleyball';
import HandballScreen from './src/components/screens/handball';
import EnterTeamNamesScreen from './src/components/common/teamNames';
import EndGame from './src/components/common/endGame';

const Stack = createStackNavigator();

function App() {
  
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* ---------------  initial route  ------------------ */}
        <Stack.Screen name="welcome" component={LoadingScreen} />
        {/* ---------------  initial route  ------------------ */}

        <Stack.Screen name="sportList" component={SportsListScreen} />
        <Stack.Screen name="contestors" component={EnterTeamNamesScreen} />

        <Stack.Screen name="football" component={FootballScreen} />
        <Stack.Screen name="basketball" component={BasketballScreen} />
        <Stack.Screen name="volleyball" component={VolleyballScreen} />
        <Stack.Screen name="handball" component={HandballScreen} />
        <Stack.Screen name="endGame" component={EndGame} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
