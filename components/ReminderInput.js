import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Button, Modal } from 'react-native';

const ReminderInput = (props) => {
  const [enterReminder, setEnterReminder] = useState('');

  const reminderInputHandler = (enteredText) => {
    setEnterReminder(enteredText);
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
      <Button
        title="ADD"
        onPress={props.onAddReminder.bind(this, enterReminder)}
      />
    </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputText: {
    // flexDirection: 'row',
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  inputContainer: {
    width: '80%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    marginBottom:10
  },
});

export default ReminderInput;
