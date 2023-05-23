import React, { useState, useEffect } from 'react';
import { View, Image, Text, Button } from 'react-native';
import Stopwatch from '../../components/common/stopwatch';
import EndGame from '../../components/common/endGame';
import setOrientation from '../common/orientation';
import * as ScreenOrientation from 'expo-screen-orientation';
import HandleTeamsScores from '../common/teamScores';

const BasketballScreen = ({ route }) => {
    const { teamNames, backgroundImage } = route.params;
    const sport = 'basketball';
    const points = {
        onePoint: 1,
        twoPoint: 2,
        threePoint: 3,
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
            <Stopwatch/>
            <HandleTeamsScores teamAName={teamNames.teamA} teamBName={teamNames.teamB} points={points} sport={sport}/>
            <EndGame/>
        </View >
    );
};

export default BasketballScreen;
