import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import BasketballPoints from './basketballPoints';
import AmericanFootballPoints from './americanFootballPoints';

const HandleTeamsPoints = ({ home, away, points, sport, setIsRunning, isRunning, resetScore, setResetScore, isScoreFalse, setIsScoreFalse }) => {
    const [homeScore, setHomeScore] = useState(0);
    const [awayScore, setAwayScore] = useState(0);

    const handleScore = (team, points) => {
        if (points === 0) {
            setIsScoreFalse(false);
            setIsRunning(true);
            return;
        }

        if (isScoreFalse == true) {
            if (team === home) {
                setHomeScore((prevScore) => Math.max(0, prevScore - points));
                setIsRunning(true);
            } else if (team === away) {
                setAwayScore((prevScore) => Math.max(0, prevScore - points));
                setIsRunning(true);
            }
            setIsScoreFalse(false);
        } else {
            if (team === home) {
                setHomeScore((prevScore) => prevScore + points);
            } else if (team === away) {
                setAwayScore((prevScore) => prevScore + points);
            }
        }
    };

    useEffect(() => {
        if (resetScore) {
            setAwayScore(0);
            setHomeScore(0);
            setResetScore(false);
        }
    }, [resetScore, setAwayScore, setHomeScore, setResetScore])


    return (
        <View>
            {sport !== 'Basketball' && sport !== 'American Football' &&
                <View style={styles.scoreContainer}>
                    {isRunning &&
                        <MaterialIcons name="exposure-plus-1" style={styles.points} onPress={() => handleScore(home, points)} />
                    }
                    {isScoreFalse == true && !isRunning &&
                        <View>
                            <MaterialIcons name="exposure-minus-1" style={styles.points} onPress={() => handleScore(home, points)} />
                        </View>
                    }
                    <View style={styles.homeContainer}>
                        <Text style={styles.home}>{home}</Text>
                        <Text style={styles.homeScore}>{homeScore}</Text>
                    </View>
                    <Text style={styles.versus}>VS</Text>
                    <View style={styles.awayContainer}>
                        <Text style={styles.away}>{away}</Text>
                        <Text style={styles.awayScore}>{awayScore}</Text>
                    </View>
                    {isRunning &&
                        <MaterialIcons name="exposure-plus-1" style={styles.points} onPress={() => handleScore(away, points)} />
                    }
                    {isScoreFalse == true && !isRunning &&
                        <View>
                            <MaterialIcons name="exposure-minus-1" style={styles.points} onPress={() => handleScore(away, points)} />
                        </View>
                    }
                </View>
            }
            {sport === 'Basketball' &&
                <BasketballPoints home={home} away={away} points={points} isRunning={isRunning} setIsRunning={setIsRunning} resetScore={resetScore} setResetScore={setResetScore} isScoreFalse={isScoreFalse} setIsScoreFalse={setIsScoreFalse} />
            }
            {sport === 'American Football' &&
                <AmericanFootballPoints home={home} away={away} points={points} isRunning={isRunning} setIsRunning={setIsRunning} resetScore={resetScore} setResetScore={setResetScore} isScoreFalse={isScoreFalse} setIsScoreFalse={setIsScoreFalse} />
            }
        </View>
    );
};

const styles = StyleSheet.create({
    scoreContainer: {
        display: 'flex',
        flexDirection: 'row-reverse',
        alignItems: 'center',
        width: '100%',
        justifyContent: 'space-evenly',
    },
    homeContainer: {
        alignItems: 'center',
    },
    home: {
        color: 'black',
        textTransform: 'capitalize',
        fontSize: 40,
    },
    homeScore: {
        color: 'white',
        fontSize: 50,
        fontWeight: 'bold',
    },
    awayContainer: {
        alignItems: 'center',
    },
    away: {
        color: 'black',
        textTransform: 'capitalize',
        fontSize: 40,
    },
    awayScore: {
        color: 'white',
        fontSize: 50,
        fontWeight: 'bold',
    },
    versus: {
        color: 'black',
        fontSize: 60,
        fontWeight: 'bold',
    },
    points: {
        backgroundColor: 'grey',
        color: 'black',
        fontSize: 30,
        padding: 5,
        borderRadius: 20
    }
})

export default HandleTeamsPoints;
