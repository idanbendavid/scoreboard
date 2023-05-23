import React, { useState } from 'react';
import { View, Button, Text } from 'react-native';

const HandleTeamsScores = ({ teamAName, teamBName, points, sport }) => {
    const [teamAScore, setTeamAScore] = useState(0);
    const [teamBScore, setTeamBScore] = useState(0);

    const handleScore = (team, points) => {
        if (team === teamAName) {
            setTeamAScore((prevScore) => prevScore + points);
        } else if (team === teamBName) {
            setTeamBScore((prevScore) => prevScore + points);
        }
    };

    return (
        <View>
            {sport !== 'basketball' &&
                <>
                    <View>
                        <Text>{teamAName}</Text>
                        <Text>{teamAScore}</Text>
                        <Button title='a+1' onPress={() => handleScore(teamAName, points)}></Button>
                    </View>
                    <View>
                        <Text>{teamBName}</Text>
                        <Text>{teamBScore}</Text>
                        <Button title='b+1' onPress={() => handleScore(teamBName, points)}></Button>
                    </View>
                </>
            }
            {sport === 'basketball' &&
                <>
                    <View>
                        <Text>{teamAName}</Text>
                        <Text>{teamAScore}</Text>
                        <Button title="1 Point" onPress={() => handleScore(teamAName, points.onePoint)} />
                        <Button title="2 Points" onPress={() => handleScore(teamAName, points.twoPoint)} />
                        <Button title="3 Points" onPress={() => handleScore(teamAName, points.threePoint)} />

                    </View>
                    <View>
                        <Text>{teamBName}</Text>
                        <Text>{teamBScore}</Text>
                        <Button title="1 Point" onPress={() => handleScore(teamBName, points.onePoint)} />
                        <Button title="2 Points" onPress={() => handleScore(teamBName, points.twoPoint)} />
                        <Button title="3 Points" onPress={() => handleScore(teamBName, points.threePoint)} />
                    </View>

                </>
            }
        </View>
    );
};

export default HandleTeamsScores;
