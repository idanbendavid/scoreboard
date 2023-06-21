import { View, Text, Pressable, StyleSheet } from 'react-native';
import React, { useState, useEffect } from 'react';

export default function AmericanFootballPoints({ home, away, points, isRunning, resetScore ,setResetScore }) {

    const [homeScore, setHomeScore] = useState(0);
    const [awayScore, setAwayScore] = useState(0);
    const [isHomeTD, setIsHomeTD] = useState(false);
    const [isAwayTD, setIsAwayTD] = useState(false);

    const handleScore = (team, points) => {

        if (team === home) {
            setHomeScore((prevScore) => prevScore + points);
            if (points === 6) {
                setIsHomeTD(true);
            }
        }

        else if (team === away) {
            setAwayScore((prevScore) => prevScore + points);
            if (points === 6) {
                setIsAwayTD(true);
            }
        }
    }

    const handleAfterTDScore = (team, points) => {
        if (team === home) {
            setHomeScore((prevScore) => prevScore + points);
            setIsHomeTD(false);
        }
        if (team === away) {
            setAwayScore((prevScore) => prevScore + points);
            setIsAwayTD(false);
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
        <View style={americanFootballStyles.scoreContainer}>
            <View style={americanFootballStyles.homePoints}>

                {isRunning && !isHomeTD && !isAwayTD &&
                    <>
                        <Pressable onPress={() => handleScore(home, points.TouchDown)}>
                            <Text style={americanFootballStyles.points}>TD</Text>
                        </Pressable>
                        <Pressable onPress={() => handleScore(home, points.FieldGoal)}>
                            <Text style={americanFootballStyles.points}>FG</Text>
                        </Pressable>
                        <Pressable onPress={() => handleScore(home, points.safety)}>
                            <Text style={americanFootballStyles.points}>safety</Text>
                        </Pressable>
                    </>
                }
                {isRunning && isHomeTD &&
                    <>
                        <Text style={americanFootballStyles.afterTD}>conversation</Text>
                        <Pressable onPress={() => handleAfterTDScore(home, points.TDTryOrSafety)}>
                            <Text style={americanFootballStyles.points}>FG</Text>
                        </Pressable>
                        <Pressable onPress={() => handleAfterTDScore(home, points.TDExtraTD)}>
                            <Text style={americanFootballStyles.points}>TD</Text>
                        </Pressable>
                        <Pressable onPress={() => handleAfterTDScore(home, points.noScore)}>
                            <Text style={americanFootballStyles.points}>Miss</Text>
                        </Pressable>
                    </>
                }
            </View>
            <View style={americanFootballStyles.homeContainer}>
                <Text style={americanFootballStyles.home}>{home}</Text>
                <Text style={americanFootballStyles.homeScore}>{homeScore}</Text>
            </View>
            <Text style={americanFootballStyles.versus}>VS</Text>
            <View style={americanFootballStyles.awayContainer}>
                <Text style={americanFootballStyles.away}>{away}</Text>
                <Text style={americanFootballStyles.awayScore}>{awayScore}</Text>
            </View>
            <View style={americanFootballStyles.awayPoints}>
                {isRunning && !isAwayTD && !isHomeTD &&
                    <>
                        <Pressable onPress={() => handleScore(away, points.TouchDown)}>
                            <Text style={americanFootballStyles.points}>TD</Text>
                        </Pressable>
                        <Pressable onPress={() => handleScore(away, points.FieldGoal)}>
                            <Text style={americanFootballStyles.points}>FG</Text>
                        </Pressable>
                        <Pressable onPress={() => handleScore(away, points.safety)}>
                            <Text style={americanFootballStyles.points}>safety</Text>
                        </Pressable>
                    </>
                }
                {isRunning && isAwayTD &&
                    <>
                        <Text style={americanFootballStyles.afterTD}>conversation</Text>
                        <Pressable onPress={() => handleAfterTDScore(away, points.TDTryOrSafety)}>
                            <Text style={americanFootballStyles.points}>FG</Text>
                        </Pressable>
                        <Pressable onPress={() => handleAfterTDScore(away, points.TDExtraTD)}>
                            <Text style={americanFootballStyles.points}>TD</Text>
                        </Pressable>
                        <Pressable onPress={() => handleAfterTDScore(away, points.noScore)}>
                            <Text style={americanFootballStyles.points}>Miss</Text>
                        </Pressable>
                    </>
                }
            </View>
        </View>
    )
}


const americanFootballStyles = StyleSheet.create({
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
        alignItems: 'center'
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
        alignItems: 'center'
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
    },
    afterTD: {
        fontSize: 14,
        fontWeight: 'bold',
        textTransform: 'uppercase',
    }
})