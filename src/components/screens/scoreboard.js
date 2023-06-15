import { StyleSheet, View } from 'react-native'
import React, { useEffect } from 'react';
import setOrientation from '../common/orientation';
import * as ScreenOrientation from 'expo-screen-orientation';
import Stopwatch from '../common/stopwatch';
import HandleTeamsScores from '../common/teamScores';
import LazyLoadingImage from '../common/lazyLoading';
import EndGame from '../common/endGame';


export default function Scoreboard({ route }) {

    const { sport, teamNames, backgroundImage, points } = route.params;

    useEffect(() => {
        setOrientation('landscape');
        return () => {
            ScreenOrientation.unlockAsync();
        };
    }, []);

    return (
        <>
            <LazyLoadingImage source={backgroundImage} />
            <View style={styles.board}>
                <Stopwatch />
                <HandleTeamsScores home={teamNames.home} away={teamNames.away} points={points} sport={sport} />
                <EndGame />
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    board: {
        borderWidth: 3,
        borderColor: 'black',
        borderStyle: 'solid',
        width: '60%',
        height: '100%',
        marginHorizontal: 160,
        marginVertical: 40,
        flex: 3,
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems:'stretch'
    }

})