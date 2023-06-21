import { View, Text, Pressable, StyleSheet } from 'react-native';
import React, { useState, useEffect } from 'react';

export default function BasketballPoints({ home, away, points, isRunning , resetScore, setResetScore}) {

    const [homeScore, setHomeScore] = useState(0);
    const [awayScore, setAwayScore] = useState(0);

    const handleScore = (team, points) => {
        if (team === home) {
            setHomeScore((prevScore) => prevScore + points);
        } else if (team === away) {
            setAwayScore((prevScore) => prevScore + points);
        }
    }

    useEffect(() => {
        if (resetScore) {
            setAwayScore(0);
            setHomeScore(0);
            setResetScore(false);
        }
    }, [resetScore, setAwayScore, setHomeScore,setResetScore])


    return (
        <View style={basketballStyles.scoreContainer}>
            {isRunning &&
                <View style={basketballStyles.homePoints}>
                    <Pressable onPress={() => handleScore(home, points.onePoint)}>
                        <Text style={basketballStyles.points}>+1</Text>
                    </Pressable>
                    <Pressable onPress={() => handleScore(home, points.twoPoint)}>
                        <Text style={basketballStyles.points}>+2</Text>
                    </Pressable>
                    <Pressable onPress={() => handleScore(home, points.threePoint)}>
                        <Text style={basketballStyles.points}>+3</Text>
                    </Pressable>
                </View>
            }
            <View style={basketballStyles.homeContainer}>
                <Text style={basketballStyles.home}>{home}</Text>
                <Text style={basketballStyles.homeScore}>{homeScore}</Text>
            </View>
            <Text style={basketballStyles.versus}>VS</Text>
            <View style={basketballStyles.awayContainer}>
                <Text style={basketballStyles.away}>{away}</Text>
                <Text style={basketballStyles.awayScore}>{awayScore}</Text>
            </View>
            {isRunning &&
                <View style={basketballStyles.awayPoints}>
                    <Pressable onPress={() => handleScore(away, points.onePoint)}>
                        <Text style={basketballStyles.points}>+1</Text>
                    </Pressable>
                    <Pressable onPress={() => handleScore(away, points.twoPoint)}>
                        <Text style={basketballStyles.points}>+2</Text>
                    </Pressable>
                    <Pressable onPress={() => handleScore(away, points.threePoint)}>
                        <Text style={basketballStyles.points}>+3</Text>
                    </Pressable>
                </View>
            }
        </View>
    )
}

const basketballStyles = StyleSheet.create({
    scoreContainer: {
        flexDirection: 'row-reverse',
        alignItems: 'center',
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
        color: 'black',
        fontSize: 50,
        fontWeight: 'bold',
    },
    homePoints: {
        flexDirection: 'column',
        justifyContent: 'center',
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
        color: 'black',
        fontSize: 50,
        fontWeight: 'bold',
    },
    awayPoints: {
        flexDirection: 'column',
        justifyContent: 'center',
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
        borderRadius: 25,
        marginVertical: 5
    }
})