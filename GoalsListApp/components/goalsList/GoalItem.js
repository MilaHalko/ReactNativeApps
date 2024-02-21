import {Pressable, StyleSheet, Text, View} from "react-native";

function GoalItem(props) {
    // const rippleColor = '#3d2ea5';

    return (
        <View style={styles.goalItem}>
            <Pressable
                onPress={props.OnDeleteGoalItem.bind(this, props.id)}
                android_ripple={{color: '#3d2ea5'}}
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
        backgroundColor: '#6656e0',
        borderRadius: 8
    },

    goalItemText: {
        padding: 22,
        color: 'white',
    },

    pressedItem: {
        opacity: 0.5,
    }
});
