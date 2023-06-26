import { StyleSheet, View } from 'react-native'
import React, { useEffect, useState } from 'react';
import setOrientation from '../common/orientation';
import * as ScreenOrientation from 'expo-screen-orientation';
import Stopwatch from '../common/stopwatch';
import HandleTeamsScores from '../points/teamScores';
import LazyLoadingImage from '../common/lazyLoading';


export default function Scoreboard({ route }) {

    const { sport, home, away, backgroundImage, points, gameTime, gameStyle } = route.params;
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
                <HandleTeamsScores home={home} away={away} points={points} sport={sport} isRunning={isRunning} resetScore={resetScore} setResetScore={setResetScore}/>
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
        marginVertical: 60,
        flex: 2,
        padding: 5,
        alignItems: 'stretch'
    }

})