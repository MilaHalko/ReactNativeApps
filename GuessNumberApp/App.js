import {StatusBar} from 'expo-status-bar';
import {ImageBackground, SafeAreaView, StyleSheet} from 'react-native';
import React, {useState} from "react";
import {LinearGradient} from "expo-linear-gradient";
import EnterNumberScreen from "./screens/EnterNumberScreen";
import GuessScreen from "./screens/GuessScreen";
import GameOverScreen from "./screens/GameOverScreen";
import {useFonts} from "expo-font";
import AppLoading from "expo-app-loading";

export default function App() {
    const [userNumber, setUserNumber] = useState();
    const [gameOver, setGameOver] = useState(false);
    const [rounds, setRounds] = useState(0);

    const [fontsLoaded] = useFonts({
        'Manrope-Regular': require('./assets/fonts/Manrope-Regular.ttf'),
        'Manrope-Bold': require('./assets/fonts/Manrope-Bold.ttf')
    });

    if (!fontsLoaded) {
        return <AppLoading/>;
    }

    const pickedNumberHandler = (number) => {
        setUserNumber(number);
    };
    const gameOverHandler = (numberOfRounds) => {
        setGameOver(true);
        setRounds(numberOfRounds);
    };

    const newGameHandler = () => {
        setGameOver(false);
        setUserNumber(null);
        setRounds(0);
    }

    let screen = <EnterNumberScreen onSubmit={pickedNumberHandler}/>;

    if (userNumber) {
        screen = <GuessScreen userNumber={userNumber} onGameOver={gameOverHandler}/>;
    }

    if (gameOver && userNumber) {
        screen = <GameOverScreen userNumber={userNumber} rounds={rounds} onNewGame={newGameHandler}/>;
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
