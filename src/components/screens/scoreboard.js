import { StyleSheet, View } from 'react-native'
import React, { useEffect, useState } from 'react';
import setOrientation from '../common/orientation';
import * as ScreenOrientation from 'expo-screen-orientation';
import Stopwatch from '../common/stopwatch';
import HandleTeamsScores from '../points/teamScores';
import LazyLoadingImage from '../common/lazyLoading';
import ShareData from '../common/shareData';
import * as rnuuid from 'react-native-uuid';

export default function Scoreboard({ route }) {

    const { sport, home, away, backgroundImage, points, gameTime, gameStyle } = route.params;

    const [isRunning, setIsRunning] = useState(false);
    const [resetScore, setResetScore] = useState(false);
    const [isConnected, setIsConnected] = useState(false);

    const gameId = rnuuid.default.v4();

    useEffect(() => {
        setOrientation('landscape');

        return () => {
            ScreenOrientation.unlockAsync();
        };
    }, [setOrientation, ScreenOrientation]);

    // share data will be displayed to logged usesrs
    return (
        <>
            <LazyLoadingImage source={backgroundImage} />
            <View style={styles.board}>
                {isConnected &&
                    <ShareData gameId={gameId} sport={sport} />
                }
                <Stopwatch isRunning={isRunning} setIsRunning={setIsRunning} setResetScore={setResetScore} gameTime={gameTime} gameStyle={gameStyle} />
                <HandleTeamsScores home={home} away={away} points={points} sport={sport} isRunning={isRunning} resetScore={resetScore} setResetScore={setResetScore} />
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
        marginVertical: 50,
        flex: 2,
        padding: 5,
        alignItems: 'stretch'
    }

})