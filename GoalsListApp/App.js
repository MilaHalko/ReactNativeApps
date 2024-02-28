import {StatusBar, StyleSheet, View} from 'react-native';
import {useState} from "react";
import GoalInput from "./components/goalInput/GoalInput";
import GoalsList from "./components/goalsList/GoalsList";
import StandardButton from "./components/buttons/standardButton";
import {Colors} from "./Colors";

export default function App() {
    const [goals, setGoals] = useState([]);
    const [modalIsVisible, setModalIsVisible] = useState(false);

    function AddGoalHandler(goalText) {
        setGoals((goals) =>
            [
                ...goals,
                {text: goalText, id: Math.random().toString()},
            ])
        EndAddGoalHandler();
    }

    function DeleteGoalItemHandler(id) {
        setGoals((goals) => goals.filter((goal) => goal.id !== id));
    }

    function StartAddGoalHandler() {
        setModalIsVisible(true);
    }

    function EndAddGoalHandler() {
        setModalIsVisible(false);
    }

    return (
        <>
            <StatusBar barStyle={"light-content"} backgroundColor={Colors.darkBlue}/>
            <View style={styles.container}>
                <StandardButton title={'Press to ADD GOAL'} onPress={StartAddGoalHandler} color={Colors.darkBlue}/>
                <GoalInput onAdd={AddGoalHandler} onCancel={EndAddGoalHandler} isVisible={modalIsVisible}/>
                <GoalsList goals={goals} OnDeleteGoalItem={DeleteGoalItemHandler}/>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 50,
        paddingHorizontal: 16,
        backgroundColor: Colors.background,
        flex: 1,
        flexDirection: "column-reverse"
    },
});