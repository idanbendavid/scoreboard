import { StyleSheet, View } from 'react-native'
import React, { useEffect, useState } from 'react';
import setOrientation from '../common/orientation';
import * as ScreenOrientation from 'expo-screen-orientation';
import Stopwatch from '../common/stopwatch';
import HandleTeamsScores from '../points/teamScores';
import LazyLoadingImage from '../common/lazyLoading';
import EndGame from '../screens/endGame';


export default function Scoreboard({ route }) {

    const { sport, teamNames, backgroundImage, points } = route.params;
    const [isRunning, setIsRunning] = useState(false);
    const [resetScore, setResetScore] = useState(false);

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
                <Stopwatch isRunning={isRunning} setIsRunning={setIsRunning} setResetScore={setResetScore}/>
                <HandleTeamsScores home={teamNames.home} away={teamNames.away} points={points} sport={sport} isRunning={isRunning} resetScore={resetScore} setResetScore={setResetScore}/>
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
        justifyContent: 'space-between',
        padding: 5,
        alignItems: 'stretch'
    }

})