import React from 'react';
import {Alert, StyleSheet, View} from "react-native";
import NumberInput from "../components/input/NumberInput";
import BorderedTitle from "../components/BorderedTitle";

const EnterNumberScreen = (props) => {
    const [enteredNumber, setEnteredNumber] = React.useState('');
    const inputResetHandler = () => {
        setEnteredNumber('');
    };
    const inputSubmitHandler = () => {
        const number = parseInt(enteredNumber);
        if (isNaN(number) || number <= 0 || number > 99) {
            Alert.alert(
                'Invalid number!',
                'Number has to be between 1 and 99.',
                [{text: 'Okay', style: 'destructive', onPress: inputResetHandler}]
            );
            return;
        }
        props.onSubmit(number);
    };

    return (
        <View style={styles.container}>
            <BorderedTitle text="Guess My Number"/>
            <NumberInput onReset={inputResetHandler}
                         onSubmit={inputSubmitHandler}
                         number={enteredNumber}
                         onChange={setEnteredNumber}
            />
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