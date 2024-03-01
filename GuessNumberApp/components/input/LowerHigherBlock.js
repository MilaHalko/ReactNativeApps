import React from 'react';
import {StyleSheet} from "react-native";
import StandardButton from "../buttons/StandardButton";
import InputBlock from "./InputBlock";
import ButtonsContainer from "../buttons/ButtonsContainer";
import {AntDesign} from "@expo/vector-icons";
import {Colors} from "../../Colors";

const LowerHigherBlock = (props) => {
    return (
        <InputBlock title="Higher or Lower ?" style={styles.inputBlockContainer}>
            <ButtonsContainer>
                <StandardButton title={<AntDesign name="arrowdown" size={24} color={Colors.white}/>} onPress={props.onLower}/>
                <StandardButton title={<AntDesign name="arrowup" size={24} color={Colors.white}/>} onPress={props.onHigher}/>
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