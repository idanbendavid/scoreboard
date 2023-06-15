import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import BasketballScores from './basketballScores';

const HandleTeamsScores = ({ home, away, points, sport }) => {
    const [homeScore, setHomeScore] = useState(0);
    const [awayScore, setAwayScore] = useState(0);

    const handleScore = (team, points) => {
        if (team === home) {
            setHomeScore((prevScore) => prevScore + points);
        } else if (team === away) {
            setAwayScore((prevScore) => prevScore + points);
        }
    };

    return (
        <View>
            {sport !== 'basketball' &&
                <View style={styles.scoreContainer}>
                    <MaterialIcons name="exposure-plus-1" style={styles.points} onPress={() => handleScore(home, points)} />
                    <View style={styles.homeContainer}>
                        <Text style={styles.home}>{home}</Text>
                        <Text style={styles.homeScore}>{homeScore}</Text>
                    </View>
                    <Text style={styles.versus}>VS</Text>
                    <View style={styles.awayContainer}>
                        <Text style={styles.away}>{away}</Text>
                        <Text style={styles.awayScore}>{awayScore}</Text>
                    </View>
                    <MaterialIcons name="exposure-plus-1" style={styles.points} onPress={() => handleScore(away, points)} />
                </View>
            }
            {sport === 'basketball' &&
                <BasketballScores home={home} away={away} styles={styles} points={points}/>
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
        fontSize: 40,
        borderRadius: 30
    }
})

export default HandleTeamsScores;
