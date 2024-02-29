import React from 'react';
import {Button, View, StyleSheet} from "react-native";
import {Colors} from "../../Colors";

const StandardButton = (props) => {
    return (
        <View style={styles.button}>
            <Button title={props.title} onPress={props.onPress} color={Colors.yellow}/>
        </View>
    );
};

export default StandardButton;

const styles = StyleSheet.create({
    button: {
        borderRadius: 25,
        flex: 1,
    }
});