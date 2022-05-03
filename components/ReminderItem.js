import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View ,TouchableHighlight} from 'react-native';

const ReminderItem = (props) => {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={props.onDelete.bind(this,props.id)}>
      <View style={styles.listItem} on>
        <Text>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1,
    marginVertical: 5,
  },
});

export default ReminderItem;
