import React from 'react';
import {ScrollView} from "react-native";
import GuessLine from "./GuessLine";

const GuessList = (props) => {
    return (
        <ScrollView style={{width: '100%'}}>
            {
                props.guessNumbers.map((number, index) => {
                    return (
                        <GuessLine key={index} guessNumber={number}/>
                    );
                })
            }
        </ScrollView>
    );
};

export default GuessList;
