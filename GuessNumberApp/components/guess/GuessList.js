import React from 'react';
import {ScrollView} from "react-native";
import GuessLine from "./GuessLine";

const GuessList = ({guessNumbers}) => {
    return (
        <ScrollView style={{width: '100%'}}>
            {
                guessNumbers.map((number, index) => {
                    return (
                        <GuessLine round={guessNumbers.length - index} guessNumber={number}/>
                    );
                })
            }
        </ScrollView>
    );
};

export default GuessList;
