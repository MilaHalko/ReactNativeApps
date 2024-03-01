import {StatusBar} from 'expo-status-bar';
import {ImageBackground, SafeAreaView, StyleSheet} from 'react-native';
import React, {useState} from "react";
import {LinearGradient} from "expo-linear-gradient";
import EnterNumberScreen from "./screens/EnterNumberScreen";
import GuessScreen from "./screens/GuessScreen";
import GameOverScreen from "./screens/GameOverScreen";

export default function App() {
    const [userNumber, setUserNumber] = useState();
    const [gameOver, setGameOver] = useState(false);

    const pickedNumberHandler = (number) => {
        setUserNumber(number);
    };
    const gameOverHandler = () => {
        setGameOver(true);
    };

    let screen = <EnterNumberScreen onSubmit={pickedNumberHandler}/>;

    if (userNumber) {
        screen = <GuessScreen userNumber={userNumber} onGameOver={gameOverHandler}/>;
    }

    if (gameOver && userNumber) {
        screen = <GameOverScreen userNumber={userNumber}/>;
    }

    return (
        <LinearGradient colors={['#2a383a', '#3f4b4d', '#595959']} style={styles.container}>
            <ImageBackground source={require('./assets/images/background.jpg')}
                             resizeMode={'cover'}
                             style={styles.container}
                             imageStyle={styles.backgroundImage}>
                <StatusBar style="light"/>
                <SafeAreaView style={styles.container}>
                    {screen}
                </SafeAreaView>
            </ImageBackground>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backgroundImage: {
        opacity: 0.07,
    }
});
