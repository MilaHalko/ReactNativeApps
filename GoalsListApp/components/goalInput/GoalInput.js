import {Button, Modal, StyleSheet, TextInput, View} from "react-native";
import {useState} from "react";

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
                <TextInput
                    placeholder="Write your goal"
                    style={styles.textInputContainer}
                    onChangeText={inputHandler}
                    value={goalText}
                />
                <View style={styles.buttonsContainer}>
                    <View style={styles.button}>
                    <Button title="Add" onPress={AddGoalHandler}/>
                    </View>
                    <View style={styles.button}>
                    <Button title={'Cancel'} onPress={props.onCancel}/>
                    </View>
                </View>
            </View>
        </Modal>
    );
}


const styles = StyleSheet.create({
    inputContainer: {
        marginHorizontal: 16,
        marginVertical: 24,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',

        flex: 1,
        justifyContent: "center",
        alignItems: "center",

    },

    textInputContainer: {
        width: '100%',
        marginBottom: 16,
        padding: 16,

        borderColor: "#ccc",
        borderWidth: 1,
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