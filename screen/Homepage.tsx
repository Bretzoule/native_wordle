import React from 'react';
import { View, Text, Button } from 'react-native';
import { useDispatch } from 'react-redux';

// Write a home page for the app with a big button in the middle that says "Start Game" and goes to the Worlde page.
export default function Homepage({ navigation }: any) {
    const dispatch = useDispatch();
    return (

        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Worde</Text>
            <Button
                title="Start Game"
                color="#f194ff"
                onPress={() => {
                    dispatch({ type: 'initGame', value: 'react' });
                    navigation.navigate('Worlde')
                }}
            />
        </View>
    );
}