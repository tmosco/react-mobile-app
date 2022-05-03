import { StatusBar } from 'expo-status-bar';
import {
  Button,
  StyleSheet,
  View,
  FlatList,
} from 'react-native';
import React, { useState } from 'react';

import ReminderItem from './components/ReminderItem';
import ReminderInput from './components/ReminderInput';

export default function App() {
  const [reminders, setReminders] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addReminderHandler = (reminderTitle) => {
    setReminders((reminder) => [
      ...reminder,
      { key: Math.random().toString(), value: reminderTitle },
    ]);
    setIsAddMode(false)
  };
  const deleteReminder = (reminderId) => {
    setReminders((currentReminders) => {
      return currentReminders.filter((reminder) => reminder.key !== reminderId);
    });
  };

  const cancelReminderHandler = () =>{
    setIsAddMode(false)

  }


  return (
    <View style={styles.body}>
      <Button title="Add New Reminder" onPress={() => setIsAddMode(true)} />
      <ReminderInput visible = {isAddMode} onAddReminder={addReminderHandler} cancelButton={cancelReminderHandler} />
      <FlatList
        data={reminders}
        renderItem={(itemData) => (
          <ReminderItem
            id={itemData.item.key}
            title={itemData.item.value}
            onDelete={deleteReminder}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    padding: 30,
  },
});
