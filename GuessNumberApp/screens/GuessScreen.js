import React, {useState} from 'react';
import {StyleSheet, Text, View} from "react-native";
import BorderedTitle from "../components/BorderedTitle";
import {Colors} from "../Colors";
import StandardButton from "../components/buttons/StandardButton";
import GuessList from "../components/guess/GuessList";
import InputBlock from "../components/input/InputBlock";
import LowerHigherBlock from "../components/input/LowerHigherBlock";

const GuessScreen = () => {
    const [guessNumbers, setGuessNumbers] = useState([Math.floor(Math.random() * 100) + 1]);
    const [currentLow, setCurrentLow] = useState(1);
    const [currentHigh, setCurrentHigh] = useState(100);
    const lowerHandler = () => {
        const currentNumber = guessNumbers[0];
        if(currentNumber < currentHigh){
            setCurrentHigh(currentNumber);
        }
        TryToGuess(currentLow, currentHigh);
    }
    const higherHandler = () => {
        const currentNumber = guessNumbers[0];
        if(currentNumber > currentLow){
            setCurrentLow(currentNumber);
        }
        TryToGuess(currentLow, currentHigh);
    }

    const TryToGuess = (currentLow, currentHigh) => {
        const number = Math.floor((currentHigh - currentLow) / 2) + currentLow;
        setGuessNumbers((currentGuessNumbers) => [number, ...currentGuessNumbers]);
    }

    return (
        <View style={styles.container}>
            <BorderedTitle text="Opponent's Guess"/>
            <View style={styles.guessContainer}>
                <Text style={styles.guessText}>{guessNumbers[0]}</Text>
            </View>
            <LowerHigherBlock lowerHandler={lowerHandler} higherHandler={higherHandler}/>
            <GuessList guessNumbers={guessNumbers}/>
        </View>
    );
};

export default GuessScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginTop: 80,
        marginBottom: 50,
        marginHorizontal: 65,
    },

    guessContainer: {
        backgroundColor: Colors.grey,
        width: '100%',
        padding: 10,
        borderRadius: 5,
        marginBottom: 105,
    },

    guessText: {
        color: Colors.white,
        fontSize: 25,
        textAlign: 'center',
    },
});