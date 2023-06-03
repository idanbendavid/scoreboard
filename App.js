import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoadingScreen from './src/components/screens/loadingScreen';
import SportsListScreen from './src/components/screens/sportList';
import FootballScreen from './src/components/screens/football';
import BasketballScreen from './src/components/screens/basketball';
import VolleyballScreen from './src/components/screens/volleyball';
import HandballScreen from './src/components/screens/handball';
import EnterContestors from './src/components/common/contestors';
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
        <Stack.Screen name="contestors" component={EnterContestors} />

        <Stack.Screen options={{headerShown: false}} name="football" component={FootballScreen} />
        <Stack.Screen options={{headerShown: false}} name="basketball" component={BasketballScreen} />
        <Stack.Screen options={{headerShown: false}} name="volleyball" component={VolleyballScreen} />
        <Stack.Screen options={{headerShown: false}} name="handball" component={HandballScreen} />
        <Stack.Screen options={{headerShown: true}} name="endGame" component={EndGame} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
