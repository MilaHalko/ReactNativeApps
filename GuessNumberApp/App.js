import {StatusBar} from 'expo-status-bar';
import {StyleSheet, View} from 'react-native';
import EnterNumberScreen from "./screens/EnterNumberScreen";
import React, {useState} from "react";
import {Colors} from "./Colors";
import GuessScreen from "./screens/GuessScreen";
import GameOverScreen from "./screens/GameOverScreen";

export default function App() {
    const [number, setNumber] = useState(0);
    return (
        <View style={styles.container}>
            <StatusBar style="light"/>
            {/*<EnterNumberScreen/>*/}
            {/*<GuessScreen/>*/}
            {/*TODO: parameters*/}
            <GameOverScreen number={number} rounds={0}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
    },
});
