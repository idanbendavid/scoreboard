import { View, Text, Pressable, StyleSheet } from 'react-native';
import React, { useState } from 'react';

export default function BasketballScores({ home, away, points }) {

    const [homeScore, setHomeScore] = useState(0);
    const [awayScore, setAwayScore] = useState(0);

    const handleScore = (team, points) => {
        if (team === home) {
            setHomeScore((prevScore) => prevScore + points);
        } else if (team === away) {
            setAwayScore((prevScore) => prevScore + points);
        }
    }

    return (
        <View style={basketballStyles.scoreContainer}>
            <View style={basketballStyles.homeContainer}>
                <Text style={basketballStyles.home}>{home}</Text>
                <Text style={basketballStyles.homeScore}>{homeScore}</Text>
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
            </View>
            <Text style={basketballStyles.versus}>VS</Text>
            <View style={basketballStyles.awayContainer}>
                <Text style={basketballStyles.away}>{away}</Text>
                <Text style={basketballStyles.awayScore}>{awayScore}</Text>
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
            </View>
        </View>
    )
}

const basketballStyles = StyleSheet.create({
    scoreContainer: {
        flexDirection: 'row-reverse',
        alignItems: 'center',
        justifyContent: 'center',
    },
    homeContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '35%',
    },
    home: {
        color: 'black',
        textTransform: 'capitalize',
        fontSize: 40,
        marginTop: 5,
    },
    homeScore: {
        color: 'black',
        fontSize: 50,
        fontWeight: 'bold',
    },
    homePoints: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 10
    },
    awayContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '35%',
    },
    away: {
        color: 'black',
        textTransform: 'capitalize',
        fontSize: 40,
        marginTop: 5
    },
    awayScore: {
        color: 'black',
        fontSize: 50,
        fontWeight: 'bold',
    },
    awayPoints: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 10
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
        marginHorizontal: 10
    }
})