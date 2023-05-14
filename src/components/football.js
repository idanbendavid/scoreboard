import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import lockLandscapeOrientation from '../hook/orientation';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import EndGame from './endGame';

export default function Football(props) {

    useEffect(() => {
        lockLandscapeOrientation();
    }, []);

    const [firstTeamName, setFirstTeamName] = useState(props.firstTeamName);
    const [firstTeamScore, setFirstTeamScore] = useState(0);

    const [secondTeamName, setSecondTeamName] = useState(props.secondTeamName);
    const [secondTeamScore, setSecondTeamScore] = useState(0);


    return (
        <>
            {/* <Ionicons name="football" size={40} color="black" /> */}
            <View style={styles.timeContainer}>
                <Text style={styles.time}>00:00</Text>
            </View>
            <View style={styles.competes}>
                <Text style={styles.teamName}>{firstTeamName}</Text>
                <Text style={styles.teamName}>{secondTeamName}</Text>
            </View>
            <View style={styles.score}>
                <View style={styles.resultFirst}>
                    <Ionicons name="add" size={40} color="black" onPress={()=> setFirstTeamScore(firstTeamScore+1)} />
                    <Text style={styles.resultFirst}>{firstTeamScore} </Text>
                    <AntDesign name="minus" size={40} color="black" onPress={()=> setFirstTeamScore(firstTeamScore-1)} />
                </View>
                <View>
                    <Text style={styles.vs}>VS</Text>
                </View>
                <View style={styles.resultSecond}>
                    <Ionicons name="add" size={40} color="black" onPress={()=> setSecondTeamScore(secondTeamScore+1)}/>
                    <Text style={styles.resultSecond}>{secondTeamScore}</Text>
                    <AntDesign name="minus" size={40} color="black" onPress={()=> setSecondTeamScore(secondTeamScore-1)}/>
                </View>
            </View>
            <EndGame />
        </>
    )
}

const styles = StyleSheet.create({
    timeContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 45,
    },
    time: {
        fontSize: 40
    },
    competes: {
        marginVertical: 20,
        flexDirection: 'row-reverse',
        justifyContent: 'space-around'
    },
    teamName: {
        textTransform: 'capitalize',
        fontSize: 30
    },
    score: {
        marginTop: 30,
        justifyContent: "space-around",
        flexDirection: 'row-reverse',
    },
    vs: {
        fontSize: 50
    },
    resultFirst: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        fontSize: 50,
    },
    resultSecond: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        fontSize: 50,
    }
})
