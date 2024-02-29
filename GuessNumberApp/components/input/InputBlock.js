import React from 'react';
import {StyleSheet, Text, View} from "react-native";
import {Colors} from "../../Colors";

const InputBlock = (props) => {
    return (
        <View style={[styles.container, props.style]}>
            <Text style={styles.title}>{props.title}</Text>
            {props.children}
        </View>
    );
};

export default InputBlock;

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.green,
        borderRadius: 5,
        width: '60%',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        marginVertical: 20,
    },

    title: {
        fontSize: 20,
        color: Colors.white,
        marginBottom: 20,
    },
});