import * as React from 'react';
import { Text, View, StyleSheet, FlatList, ListRenderItemInfo } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import LetterBox from './Letterbox';
import Letter from '../types/Letter';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
// or any pure javascript modules available in npm
//import { Card } from 'react-native-paper';



export default function Word(props: { letters: Letter[] }) {

    const state = useSelector((state: RootStateOrAny) => state);

    const renderItem = (item: any) => {
        let letter = item.letter;
        let status = item.status;
        return (
            <View>
                <LetterBox letter={letter} status={status} />
            </View>
        );
    };

    return (
        <View>
            <FlatList
                data={props.letters}
                horizontal={true}
                renderItem={(item) => renderItem(item.item)}
                keyExtractor={(item) => item.id}
                extraData={props.letters}
            />
        </View>
    );
}
