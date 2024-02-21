import {Button, StyleSheet, View} from 'react-native';
import {useState} from "react";
import GoalInput from "./components/goalInput/GoalInput";
import GoalsList from "./components/goalsList/GoalsList";

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
        <View style={styles.container}>
            <Button title={'Press to ADD your GOAL ;)'} onPress={StartAddGoalHandler} color={'#fdca40'}/>
            <GoalInput onAdd={AddGoalHandler} onCancel={EndAddGoalHandler} isVisible={modalIsVisible}/>
            <GoalsList goals={goals} OnDeleteGoalItem={DeleteGoalItemHandler}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 50,
        paddingHorizontal: 16,
        backgroundColor: '#fff',
        flex: 1,
        flexDirection: "column-reverse"
    },
});