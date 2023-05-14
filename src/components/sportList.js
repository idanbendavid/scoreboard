import { View, Text, StyleSheet, FlatList, SafeAreaView } from 'react-native'
import React from 'react';
import { Ionicons } from '@expo/vector-icons';

export default function SportList() {

    const DATA = [
        { id: 'f', title: "football" },
        { id: 'b', title: "basketball" },
        { id: 'v', title: "volleyball" },
        { id: 't', title: "tennis" },
        { id: 'h', title: "handball" }
    ];

    const Item = ({ title }) => (
        <View>
            <Text style={styles.item} onPress={() => selectedActivity(title)}>{title}</Text>
        </View>
    );

    function selectedActivity(name) {
        console.log(name)
    }

    return (
        <SafeAreaView>
            <Text style={styles.listTitle}>select activity</Text>
            <View style={styles.flatList}>
                <Ionicons name="basketball-outline" size={24} color="black" />
                <FlatList
                    data={DATA}
                    renderItem={({ item }) => <Item title={item.title} />}
                    keyExtractor={item => item.id}>
                </FlatList>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    listTitle: {
        alignSelf: 'center',
        fontSize: 30,
        marginTop: 50,
        textTransform: 'capitalize',
        textDecorationLine: 'underline'
    },
    item: {
        textTransform: 'capitalize',
        fontSize: 25,
        color: 'black',
        padding: 15
    },
    flatList: {
        marginTop: 20,
    }
});