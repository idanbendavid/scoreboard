import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react';
import { MaterialIcons } from '@expo/vector-icons';


export default function VolleyballPoints({ home, away, points, setIsRunning, isRunning, resetScore, isScoreFalse, setIsScoreFalse, setResetScore }) {

    let totalGameSets = 3;

    const [homeScore, setHomeScore] = useState(0);
    const [awayScore, setAwayScore] = useState(0);
    const [homeSetScore, setHomeSetScore] = useState(0);
    const [awaySetScore, setAwaySetScore] = useState(0);


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


    const decideSetWinningTeam = () => {
        if (homeScore === awayScore) {
            setIsRunning(true);
        }
        if (homeScore >= 21 && (homeScore - awayScore >= 2)) {
            setHomeSetScore(prevScore => prevScore + 1);
            setHomeScore(0);
            setAwayScore(0);
        } else if (awayScore >= 21 && (awayScore - homeScore >= 2)) {
            setAwaySetScore(prevScore => prevScore + 1);
            setHomeScore(0);
            setAwayScore(0);
        }

        decideWinningTeam();
    };

    const decideWinningTeam = () => {

        if ((totalGameSets / 2) < homeSetScore) {
            setIsRunning(false);
            alert(`${home} Wins`);
            setResetScore(true);
            setAwayScore(0);
            setHomeScore(0);
            setAwaySetScore(0);
            setHomeSetScore(0);
        } else if ((totalGameSets / 2) < awaySetScore) {
            setIsRunning(false);
            alert(`${away} Wins`);
            setResetScore(true);
            setAwayScore(0);
            setHomeScore(0);
            setAwaySetScore(0);
            setHomeSetScore(0);
        }
        return;
    };

    useEffect(() => {
        if (resetScore) {
            setAwayScore(0);
            setHomeScore(0);
            setAwaySetScore(0);
            setHomeSetScore(0);
            setIsRunning(false);
        }

        decideSetWinningTeam();
        decideWinningTeam();
    }, [homeScore, awayScore, resetScore])


    return (
        <>
            <View style={styles.scoreContainer}>
                <View style={styles.tableContainer}>
                    <View style={styles.tableHeadRow}>
                        <View style={styles.headRowCell}>
                            <Text style={styles.headRowCellText}>BEST OF 3</Text>
                        </View>
                        <View style={styles.headRowCell}>
                            <Text style={styles['set']}>SETS WON</Text>
                        </View>
                        <View style={styles.headRowCell}>
                            <Text style={styles.headRowCellText}>SCORE</Text>
                        </View>
                        <View style={styles.headRowCell}>
                            <Text style={styles['pointHeader']}>UPDATE</Text>
                        </View>
                    </View>
                    <View style={styles.tableDataRow}>
                        <View style={styles.DataRowCell}>
                            <Text style={styles.DataRowCellText}>{home}</Text>
                        </View>
                        <View style={styles.DataRowCell}>
                            <Text style={styles.DataRowCellText}>{homeSetScore}</Text>
                        </View>
                        <View style={styles.DataRowCell}>
                            <Text style={styles.DataRowCellText}>{homeScore}</Text>
                        </View>
                        {isRunning &&
                            <View style={styles.DataRowCell}>
                                <Text style={styles.DataRowCellText}>
                                    <MaterialIcons name="exposure-plus-1" style={styles['points']} onPress={() => handleScore(home, points)} />
                                </Text>
                            </View>
                        }
                        {isScoreFalse == true && !isRunning &&
                            <View style={styles.DataRowCell}>
                                <Text style={styles.DataRowCellText}>
                                    <MaterialIcons name="exposure-minus-1" style={styles['points']} onPress={() => handleScore(home, points)} />
                                </Text>
                            </View>
                        }
                    </View>
                    <View style={styles.tableDataRow}>
                        <View style={styles.DataRowCell}>
                            <Text style={styles.DataRowCellText}>{away}</Text>
                        </View>
                        <View style={styles.DataRowCell}>
                            <Text style={styles.DataRowCellText}>{awaySetScore}</Text>
                        </View>
                        <View style={styles.DataRowCell}>
                            <Text style={styles.DataRowCellText}>{awayScore}</Text>
                        </View>
                        {isRunning &&
                            <View style={styles.DataRowCell}>
                                <Text style={styles.DataRowCellText}>
                                    <MaterialIcons name="exposure-plus-1" style={styles['points']} onPress={() => handleScore(away, points)} />
                                </Text>
                            </View>
                        }
                        {isScoreFalse == true && !isRunning &&
                            <View style={styles.DataRowCell}>
                                <Text style={styles.DataRowCellText}>
                                    <MaterialIcons name="exposure-minus-1"  style={styles['points']} onPress={() => handleScore(away, points)} />
                                </Text>
                            </View>
                        }
                    </View>
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    tableContainer: {
        marginTop: 10,
        width: '90%',
        borderWidth: 1,
        alignSelf:'center',
    },
    tableHeadRow: {
        flexDirection: 'row-reverse',
        justifyContent: "space-between",
        paddingLeft: 5,
    },
    headRowCellText: {
        fontSize: 20,
        fontWeight: 'bold',
        textTransform: 'uppercase'
    },
    tableDataRow: {
        flexDirection: 'row-reverse',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderTopWidth: 1,
        paddingHorizontal: 5,
    },
    DataRowCellText: {
        textTransform: 'uppercase',
        fontSize: 40,
    },
    set:{
        borderRightWidth: 1,
        borderLeftWidth: 1,
        fontSize: 20,
        fontWeight: 'bold',
        paddingHorizontal: 20, 
    },
    pointHeader:{
        borderRightWidth: 1,
        borderLeftWidth: 1,
        fontSize: 20,
        fontWeight: 'bold',
        paddingHorizontal: 15, 
    },
    points: {
        backgroundColor: 'blue',
        color: 'white',
        fontSize: 40,
    },   
})