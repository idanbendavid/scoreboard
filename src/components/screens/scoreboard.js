import { StyleSheet, View, Pressable, Text } from 'react-native'
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
    const [isScoreFalse, setIsScoreFalse] = useState(false);
    const [resetScore, setResetScore] = useState(false);
    const [isConnected, setIsConnected] = useState(false);

    const gameId = rnuuid.default.v4();

    useEffect(() => {
        setOrientation('landscape');

        return () => {
            ScreenOrientation.unlockAsync();
        };
    }, [setOrientation, ScreenOrientation]);

    return (
        <>
            <LazyLoadingImage source={backgroundImage} />
            <View style={styles.board}>
                {isRunning &&
                    <Pressable style={styles.mistakeButton} onPress={() => { setIsScoreFalse(true); setIsRunning(false) }}>
                        <Text style={styles.mistakeButtonText}>wrong score</Text>
                    </Pressable>
                }
                {isConnected &&
                    <ShareData gameId={gameId} sport={sport} />
                }
                <Stopwatch isRunning={isRunning} setIsRunning={setIsRunning} setResetScore={setResetScore} gameTime={gameTime} gameStyle={gameStyle} />
                <HandleTeamsScores home={home} away={away} points={points} sport={sport} setIsRunning={setIsRunning} isRunning={isRunning} resetScore={resetScore} setResetScore={setResetScore} isScoreFalse={isScoreFalse} setIsScoreFalse={setIsScoreFalse} />
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    board: {
        borderWidth: 3,
        borderColor: 'black',
        borderStyle: 'solid',
        width: '80%',
        height: '100%',
        marginHorizontal: 80,
        marginVertical: 50,
        flex: 2,
        padding: 5,
        alignItems: 'stretch'
    },
    mistakeButton: {
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        paddingVertical: 5,
        paddingHorizontal: 5,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'red',
        width: 115
    },
    mistakeButtonText: {
        color: 'white',
        fontSize: 18,
        textTransform: 'capitalize'
    }
})