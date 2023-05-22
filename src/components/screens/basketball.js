import React, { useState, useEffect } from 'react';
import { View, Image, Text, Button } from 'react-native';
import Stopwatch from '../../components/common/stopwatch';
import EndGame from '../../components/common/endGame';
import setOrientation from '../common/orientation';
import * as ScreenOrientation from 'expo-screen-orientation';



const BasketballScreen = ({ route }) => {
    const { teamNames, backgroundImage } = route.params;
    const [teamAScore, setTeamAScore] = useState(0);
    const [teamBScore, setTeamBScore] = useState(0);

    // const handleScore = (team, points) => {
    //     setTeamScores((prevScores) => ({
    //         ...prevScores,
    //         team: prevScores[teamScores.teamA] + points,
    //         team: prevScores[teamScores.teamB] + points,
    //     }));
    // };

    const handleScore = (team, points) => {
        if (team === teamNames.teamA) {
            setTeamAScore(teamAScore + points);
        } else if (team === teamNames.teamB) {
            setTeamBScore(teamBScore + points);
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
            <Text>Basketball</Text>

            <Text>
                {teamNames.teamA}
                &nbsp; VS &nbsp;
                {teamNames.teamB}
            </Text>
            <Text>
                {teamAScore}
                &nbsp; VS &nbsp;
                {teamBScore}
            </Text>

            <Button title="1 Point" onPress={() => handleScore(teamNames.teamA, 1)} />
            <Button title="2 Points" onPress={() => handleScore(teamNames.teamA, 2)} />
            <Button title="3 Points" onPress={() => handleScore(teamNames.teamA, 3)} />

            <Button title="1 Point" onPress={() => handleScore(teamNames.teamB, 1)} />
            <Button title="2 Points" onPress={() => handleScore(teamNames.teamB, 2)} />
            <Button title="3 Points" onPress={() => handleScore(teamNames.teamB, 3)} />

            <Stopwatch />
            <EndGame
                visible={EndGame}
            />
        </View >
    );
};

export default BasketballScreen;
