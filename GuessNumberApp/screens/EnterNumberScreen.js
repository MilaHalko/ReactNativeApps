import React from 'react';
import {View, StyleSheet} from "react-native";
import NumberInput from "../components/input/NumberInput";
import BorderedTitle from "../components/BorderedTitle";

const EnterNumberScreen = () => {
    const inputResetHandler = () => {
        console.log('Resetting...')
    };
    const inputSubmitHandler = () => {
        console.log('Submitting...')
    };

    return (
        <View style={styles.container}>
            <BorderedTitle text="Guess My Number"/>
            <NumberInput onReset={inputResetHandler} onSubmit={inputSubmitHandler}/>
        </View>
    );
};

export default EnterNumberScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});