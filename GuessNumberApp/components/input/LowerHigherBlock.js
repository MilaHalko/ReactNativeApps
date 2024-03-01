import React from 'react';
import {StyleSheet} from "react-native";
import StandardButton from "../buttons/StandardButton";
import InputBlock from "./InputBlock";
import ButtonsContainer from "../buttons/ButtonsContainer";

const LowerHigherBlock = (props) => {
    return (
        <InputBlock title="Higher or Lower ?" style={styles.inputBlockContainer}>
            <ButtonsContainer>
                <StandardButton title="LOWER" onPress={props.onLower}/>
                <StandardButton title="HIGHER" onPress={props.onHigher}/>
            </ButtonsContainer>
        </InputBlock>
    );
};

export default LowerHigherBlock;

const styles = StyleSheet.create({
    inputBlockContainer: {
        width: '100%',
    },
});