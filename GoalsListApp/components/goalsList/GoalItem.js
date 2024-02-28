import {Pressable, StyleSheet, Text, View} from "react-native";
import {Colors} from "../../Colors";

function GoalItem(props) {

    return (
        <View style={styles.goalItem}>
            <Pressable
                onPress={props.OnDeleteGoalItem.bind(this, props.id)}
                android_ripple={{color: Colors.darkBlue}}
                style={({pressed}) => pressed && styles.pressedItem}
            >
                <Text key={props.text} style={styles.goalItemText}>{props.text}</Text>
            </Pressable>
        </View>
    );
}

export default GoalItem;

const styles = StyleSheet.create({
    goalItem: {
        marginVertical: 8,
        backgroundColor: Colors.blue,
        borderRadius: 8
    },

    goalItemText: {
        padding: 22,
        color: Colors.white,
    },

    pressedItem: {
        opacity: 0.5,
    }
});
