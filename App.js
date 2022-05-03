import { StatusBar } from 'expo-status-bar';
import {
  Button,
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  FlatList,
} from 'react-native';
import React, { useState } from 'react';

import ReminderItem from './components/ReminderItem';
import ReminderInput from './components/ReminderInput';

export default function App() {
  const [reminders, setReminders] = useState([]);

  const addReminderHandler = (reminderTitle) => {
    setReminders((reminder) => [
      ...reminder,
      { key: Math.random().toString(), value: reminderTitle },
    ]);
  };
  const deleteReminder = (reminderId) => {
    setReminders((currentReminders) => {
      return currentReminders.filter((reminder) => reminder.key !== reminderId);
    });
  };


  return (
    <View style={styles.body}>
      <ReminderInput onAddReminder={addReminderHandler} />
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
