import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Write your goal" style={styles.textInputContainer}/>
        <Button title="Add goal"/>
      </View>
      <View style={styles.goalsContainer}>
        <Text>All your goals...</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 50,
    paddingHorizontal: 16,
    flex: 1,
  },

  inputContainer: {
    marginBottom: 24,
    
    flex: 1,
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: "center",

    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },

  textInputContainer: {
    width: '70%',
    padding: 8,
    marginRight: 8,
    
    borderColor: "#ccc",
    borderWidth: 1,
  },

  goalsContainer: {
    flex: 5
  }

});
