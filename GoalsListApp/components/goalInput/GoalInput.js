import {Image, Modal, StyleSheet, TextInput, View} from "react-native";
import {useState} from "react";
import StandardButton from "../buttons/standardButton";
import {Colors} from "../../Colors";

export default function InputBlock(props) {
    const [goalText, setGoalText] = useState('');

    function inputHandler(text) {
        setGoalText(text);
    }

    function AddGoalHandler() {
        // TODO: Add Notification
        if (goalText === '') return;
        props.onAdd(goalText);
        setGoalText('');
    }

    return (
        <Modal visible={props.isVisible} animationType={"slide"}>
            <View style={styles.inputContainer}>
                <Image source={require('../../assets/images/goalIcon.png')} style={styles.image}/>
                <TextInput
                    placeholder="Write your goal"
                    style={styles.textInputContainer}
                    onChangeText={inputHandler}
                    value={goalText}
                />
                <View style={styles.buttonsContainer}>
                    <View style={styles.button}>
                        <StandardButton title={'Cancel'} onPress={props.onCancel} color={Colors.darkGrey}/>
                    </View>
                    <View style={styles.button}>
                        <StandardButton title={'Add'} onPress={AddGoalHandler} color={Colors.blue}/>
                    </View>
                </View>
            </View>
        </Modal>
    );
}


const styles = StyleSheet.create({
    inputContainer: {
        paddingHorizontal: 16,
        paddingTop: 10,
        paddingBottom: 38,
        backgroundColor: '#252a33',

        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },

    image: {
        width: 100,
        height: 100,
        marginBottom: 16,
    },

    textInputContainer: {
        width: '100%',
        marginBottom: 16,
        padding: 16,

        backgroundColor: Colors.white,
        borderColor: Colors.lightGrey,
        borderWidth: 2,
        borderRadius: 8,
    },

    buttonsContainer: {
        flexDirection: "row",
        width: '100%',
        justifyContent: "space-evenly",
    },

    button: {
        width: 125,
    }
});