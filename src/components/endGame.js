import { View, Text, Button, StyleSheet, Pressable } from 'react-native'
import React from 'react'

export default function EndGame() {

    return (
        <Pressable style={styles.container} onPress={() => console.log("hi")}>
            <Text style={styles.button}>End Game</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 50,
        alignSelf: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
        paddingHorizontal: 36,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'black',
        width: 150
    },
    button: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    }
})