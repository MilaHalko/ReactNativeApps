import React from 'react';
import {StyleSheet, View} from "react-native";

const ButtonsContainer = (props) => {
    return (
        <View style={[styles.buttonsContainer, props.style]}>
            {props.children}
        </View>
    );
};

export default ButtonsContainer;

const styles = StyleSheet.create({
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 15,
    },
});