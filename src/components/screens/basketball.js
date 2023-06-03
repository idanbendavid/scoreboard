import React, { useState, useEffect } from 'react';
import { View, Image, Text, Button } from 'react-native';
import Stopwatch from '../../components/common/stopwatch';
import EndGame from '../../components/common/endGame';
import setOrientation from '../common/orientation';
import * as ScreenOrientation from 'expo-screen-orientation';
import HandleTeamsScores from '../common/teamScores';
import LazyLoadingImage from '../../components/common/lazyLoading';


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
            <LazyLoadingImage source={backgroundImage} />
            <Stopwatch />
            <HandleTeamsScores home={teamNames.home} away={teamNames.away} points={points} sport={sport} />
            <EndGame />
        </View >
    );
};

export default BasketballScreen;
