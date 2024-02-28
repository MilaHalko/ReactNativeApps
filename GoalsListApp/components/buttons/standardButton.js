import React from 'react';
import {Button, View, StyleSheet} from "react-native";

const StandardButton = (props) => {
    return (
        <View style={styles.container}>
            <Button title={props.title} onPress={props.onPress} color={props.color}/>
        </View>
    );
};

export default StandardButton;

const styles = StyleSheet.create({
    container: {
        marginVertical: 16,
    },
});
