import * as React from 'react';
import {
  Text,
  View,
  Button,
  StyleSheet,
  Image,
  TouchableOpacity,
  GestureResponderEvent,
} from 'react-native';

export default function Key(props: { status: number; onPress: ((event: GestureResponderEvent) => void) | undefined; letter: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; }) {
  let statusColor = 'white';

  if (props.status == -1) statusColor = 'white';
  else if (props.status == 0) statusColor = 'darkgrey';
  else if (props.status == 1) statusColor = 'orange';
  else if (props.status == 2) statusColor = 'green';
  return (
    <TouchableOpacity
      style={[styles.letter, { backgroundColor: statusColor }]}
      onPress={props.onPress}>
      <Text>{props.letter}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  letter: {
    margin: 2,
    padding: 5,
    fontSize: 20,
    borderColor: 'black',
    borderWidth: 2,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
