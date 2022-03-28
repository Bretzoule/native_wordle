import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function LetterBox(props: { status: number; letter: string }) {
    let statusColor = 'white';

    if (props.status == -1) statusColor = 'white';
    else if (props.status == 0) statusColor = 'darkgrey';
    else if (props.status == 1) statusColor = 'orange';
    else if (props.status == 2) statusColor = 'green';
    return (
        <View>
            <Text style={[styles.letter, { backgroundColor: statusColor }]}>
                {props.letter}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    letter: {
        margin: 3,
        padding: 2,
        width: 40,
        height: 40,
        fontSize: 25,
        borderColor: 'black',
        borderWidth: 3,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});
