import React, {useEffect, useState} from 'react';
import {Alert, StyleSheet, Text, View} from "react-native";
import BorderedTitle from "../components/BorderedTitle";
import {Colors} from "../Colors";
import GuessList from "../components/guess/GuessList";
import LowerHigherBlock from "../components/input/LowerHigherBlock";

let minBound = 1;
const GenerateNumber = (min, max) => {
    let number = Math.floor(Math.random() * (max - min)) + min;
    return number === min ? number + 1 : number;
};

let maxBound = 100;

const GuessScreen = ({userNumber, onGameOver}) => {
    const [guessNumbers, setGuessNumbers] = useState([Math.floor(Math.random() * 100) + 1]);

    useEffect(() => {
        if(guessNumbers[0] === userNumber){
            onGameOver();
        }
    }, [guessNumbers, userNumber, onGameOver]);


    const guessHandler = (direction) => { // direction is 'lower' or 'higher'
        if((direction === 'lower' && guessNumbers[0] < userNumber) ||
            (direction === 'higher' && guessNumbers[0] > userNumber)){
            Alert.alert(
                "Don't lie!",
                "You know that this is wrong...",
                [{text: 'Sorry!', style: 'cancel'}]
            );
            return;
        }

        direction === 'lower' ? maxBound = guessNumbers[0] : minBound = guessNumbers[0];
        setGuessNumbers((number) => [GenerateNumber(minBound, maxBound), ...number]);
    }

    return (
        <View style={styles.container}>
            <BorderedTitle text="Opponent's Guess"/>
            <View style={styles.guessContainer}>
                <Text style={styles.guessText}>{guessNumbers[0]}</Text>
            </View>
            <LowerHigherBlock
                onLower={guessHandler.bind(this, 'lower')}
                onHigher={guessHandler.bind(this, 'higher')}/>
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