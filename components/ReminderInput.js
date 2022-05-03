import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Button, Modal } from 'react-native';

const ReminderInput = (props) => {
  const [enterReminder, setEnterReminder] = useState('');

  const reminderInputHandler = (enteredText) => {
    setEnterReminder(enteredText);
  };

  const addReminder = () => {
    props.onAddReminder(enterReminder);
    setEnterReminder('');
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputText}>
        <TextInput
          placeholder="Reminder"
          style={styles.inputContainer}
          onChangeText={reminderInputHandler}
          value={enterReminder}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="CANCEL" color="red" onPress={props.cancelButton} />
          </View>
          <View style={styles.button}>
            <Button title="ADD" onPress={addReminder} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputText: {
    // flexDirection: 'row',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  inputContainer: {
    width: '80%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '60%',
  },
  button:{
    width:"40%"
  }
});

export default ReminderInput;
