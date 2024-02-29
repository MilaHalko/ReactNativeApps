import React from 'react';
import {View, StyleSheet, Text, Image} from "react-native";
import BorderedTitle from "../components/BorderedTitle";
import {Colors} from "../Colors";
import ButtonsContainer from "../components/buttons/ButtonsContainer";
import StandardButton from "../components/buttons/StandardButton";

const GameOverScreen = (props) => {
    return (
        <View style={styles.container}>
            <BorderedTitle text="Game Over"/>
            <Image source={require('../assets/images/gameOverImage.png')} style={styles.image}/>
            <Text style={styles.text}>Your phone guessed the number
                <Text style={styles.bold}> {props.number} </Text>
                in
                <Text style={styles.bold}> {props.rounds} </Text>
                rounds
            </Text>
            <ButtonsContainer style={styles.buttonContainer}>
                <StandardButton title={'New Game'} onPress={() => {console.log('New Game')}}/>
            </ButtonsContainer>
        </View>
    );
};

export default GameOverScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    image: {
        width: 200,
        height: 180,
        marginBottom: 20,
    },

    text: {
        fontSize: 22,
        color: Colors.light,
        textAlign: 'center',
        width: '85%',
        lineHeight: 35,
    },

    bold: {
        fontWeight: 'bold',
        color: Colors.white
    },

    buttonContainer: {
        marginTop: 20,
        width: '50%',
    },
});