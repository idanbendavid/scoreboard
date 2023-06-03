import React, { useState, useEffect } from 'react';
import { View, Image, Text, Button } from 'react-native';
import Stopwatch from '../../components/common/stopwatch';
import EndGame from '../../components/common/endGame';
import HandleTeamsScores from '../../components/common/teamScores';
import LazyLoadingImage from '../../components/common/lazyLoading';
import setOrientation from '../common/orientation';
import * as ScreenOrientation from 'expo-screen-orientation';

const HandballScreen = ({ route }) => {
    const { teamNames, backgroundImage } = route.params;
    const points = 1;
    const sport = 'handball';

    useEffect(() => {
        setOrientation('landscape');
        return () => {
            ScreenOrientation.unlockAsync();
        };
    }, []);

    return (
        <View>
            <LazyLoadingImage source={backgroundImage} />
            <Text>Handball</Text>
            <Text>
                <Stopwatch />
            </Text>
            <HandleTeamsScores home={teamNames.home} away={teamNames.away} points={points} sport={sport} />
            <EndGame />
        </View>
    );
};

export default HandballScreen;
