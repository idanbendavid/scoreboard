import React, { useState, useEffect } from 'react';
import { View, Image, Text, Button } from 'react-native';
import Stopwatch from '../../components/common/stopwatch';
import EndGame from '../../components/common/endGame';
import setOrientation from '../common/orientation';
import * as ScreenOrientation from 'expo-screen-orientation';



const HandballScreen = ({ route }) => {
    const { teamNames, backgroundImage } = route.params;
    const [teamAScore, setTeamAScore] = useState(0);
    const [teamBScore, setTeamBScore] = useState(0);

    const handleScore = (team) => {
        if (team === 'teamA') {
            setTeamAScore((prevScore) => prevScore + 1);
        } else if (team === 'teamB') {
            setTeamBScore((prevScore) => prevScore + 1);
        }
    };

    useEffect(() => {
        setOrientation('landscape');

        return () => {
            // Unlock orientation when component is unmounted
            ScreenOrientation.unlockAsync();
        };
    }, []);

    return (
        <View>
            <Image source={backgroundImage} />
            <Text>Handball</Text>

            <Text>Team A: {teamNames.teamA}</Text>
            <Text>Score: {teamAScore}</Text>
            <Button title="Score Team A" onPress={() => handleScore('teamA')} />

            <Text>Team B: {teamNames.teamB}</Text>
            <Text>Score: {teamBScore}</Text>
            <Button title="Score Team B" onPress={() => handleScore('teamB')} />

            <Stopwatch />
            <EndGame/>
        </View>
    );
};

export default HandballScreen;
