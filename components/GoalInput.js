import React, {useState} from 'react';
import {View, TextInput, Button, StyleSheet, Modal} from 'react-native';

const GoalInput = props => {
  const [enteredGoal, setEnteredGoal] = useState ([]);

  const goalInputHandler = enteredText => {
    setEnteredGoal (enteredText);
  };

  const addGoalHandler = () => {
    props.onAddGoal (enteredGoal);
    setEnteredGoal ('');
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Goal"
          style={styles.textInput}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <View style={styles.buttons}>
          <View style={styles.button}>
            <Button title="ADD" onPress={addGoalHandler} />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" color="red" onPress={props.onCancel} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create ({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    width: '80%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
  buttons: {
    width: '60%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    width: '30%',
  },
});
export default GoalInput;
