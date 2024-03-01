import React from 'react';
import {StyleSheet, Text} from "react-native";
import {Colors} from "../Colors";

const BorderedTitle = (props) => {
    return (
        <Text style={styles.title}>{props.text}</Text>
    );
};

export default BorderedTitle;

const styles = StyleSheet.create({
    title: {
        fontFamily: 'Manrope-Bold',
        fontSize: 25,
        color: Colors.light,
        borderWidth: 3,
        borderColor: Colors.light,
        borderRadius: 5,

        marginBottom: 25,
        padding: 10,
    }
});