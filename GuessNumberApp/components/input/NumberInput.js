import React from 'react';
import {StyleSheet, TextInput} from "react-native";
import {Colors} from "../../Colors";
import InputBlock from "./InputBlock";
import StandardButton from "../buttons/StandardButton";
import ButtonsContainer from "../buttons/ButtonsContainer";

const NumberInput = (props) => {

    return (
        <InputBlock title="Enter a number">
            <TextInput style={styles.input}
                       keyboardType="number-pad"
                       maxLength={2}
                       textAlign={'center'}
                       autoCapitalize={"none"}
                       autoCorrect={false}
                       value={props.number}
                       onChangeText={props.onChange}
            />
            <ButtonsContainer>
                <StandardButton title={'Reset'} onPress={props.onReset}/>
                <StandardButton title={'Submit'} onPress={props.onSubmit}/>
            </ButtonsContainer>
        </InputBlock>
    );
};

export default NumberInput;

const styles = StyleSheet.create({
    input: {
        backgroundColor: Colors.white,
        borderRadius: 5,
        width: '100%',
        padding: 5,
        marginTop: 20,
        marginBottom: 15,
    },
});