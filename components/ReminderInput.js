import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Button } from 'react-native';

const ReminderInput = (props) => {
  const [enterReminder, setEnterReminder] = useState('');

  const reminderInputHandler = (enteredText) => {
    setEnterReminder(enteredText);
  };
  return (
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
  );
};

const styles = StyleSheet.create({
  inputText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 10,
  },
  inputContainer: {
    width: '80%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
  },
});

export default ReminderInput;
