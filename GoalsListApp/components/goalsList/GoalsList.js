import {FlatList, StyleSheet, View} from "react-native";
import GoalItem from "./GoalItem";

function GoalsList(props) {
    return (
        <View style={styles.goalsContainer}>
            <FlatList
                data={props.goals}
                renderItem={(data) => {
                    return (
                        <GoalItem
                            text={data.item.text}
                            id={data.item.id}
                            OnDeleteGoalItem={props.OnDeleteGoalItem}
                        />
                    );
                }}
                keyExtractor={(item, index) => item.id}
                alwaysBounceVertical={false}
            />
        </View>
    );
}

export default GoalsList;

const styles = StyleSheet.create({
    goalsContainer: {
        flex: 6
    },
});