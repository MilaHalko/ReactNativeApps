import React from 'react';
import {StyleSheet, Text, View} from "react-native";
import {Colors} from "../../Colors";

const GuessLine = ({round, guessNumber}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.bold}>#{round}</Text>
            <Text style={styles.text}>{guessNumber}</Text>
        </View>
    );
};

export default GuessLine;

const styles = StyleSheet.create({
    container: {
        marginBottom: 10,
        backgroundColor: Colors.grey,
        borderWidth: 4,
        borderColor: Colors.green,
        borderRadius: 50,
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    bold: {
        color: Colors.yellow,
        fontSize: 15,
        fontWeight: 'bold',
    },
    text: {
        color: Colors.white,
        fontSize: 16,
    }
});