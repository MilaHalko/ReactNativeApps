import React from 'react';
import {Pressable, StyleSheet, Text, View} from "react-native";
import {Colors} from "../../Colors";

const StandardButton = (props) => {
    return (
        <View style={styles.buttonOuterContainer}>
            <Pressable onPress={props.onPress}
                       style={({pressed}) =>
                           pressed ?
                               [styles.buttonInnerContainer, pressed]
                               : styles.buttonInnerContainer}
                       android_ripple={{color: Colors.green}}>
                <Text style={styles.text}>{props.title}</Text>
            </Pressable>
        </View>
    );
};

export default StandardButton;

const styles = StyleSheet.create({
    buttonOuterContainer: {
        flex: 1,
        overflow: 'hidden',
        shadowColor: Colors.black,
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    buttonInnerContainer: {
        backgroundColor: Colors.yellow,
        borderRadius: 4,
    },
    text: {
        color: Colors.white,
        fontFamily: 'Manrope-Bold',
        fontSize: 17,
        padding: 10,
        textAlign: 'center',
    },
    pressed: {
        opacity: 0.75,
        backgroundColor: Colors.green,
    },
});