import React, { useState, useReducer } from 'react';
import { Text, View, SafeAreaView, StyleSheet, FlatList } from 'react-native';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux'

// You can import from local files
import Word from './Word';
import Key from './Key';

const BLANK = ' ';


export default function Wordle() {

    const dispatch = useDispatch();

    const state = useSelector((state: RootStateOrAny) => state);

    const renderItem = ({ item }: any) => {
        return (
            <View>
                <Word letters={item.letters} />
            </View>
        );
    };

    const renderKeyBoardLetter = (char: string) => {
        return (
            <Key
                letter={char}
                status={state.letterStatus[char]}
                onPress={() => {
                    dispatch({ type: 'setLetter', value: char })
                }}
            />
        );
    };

    return (
        <SafeAreaView style={{ alignItems: 'center' }}>
            {<FlatList
                data={state.guesses}
                renderItem={(item) => renderItem(item)}
                keyExtractor={(item) => item.id}
                extraData={state.guesses}
            />}
            <View style={{ margin: 2, alignItems: 'center' }}>
                <View style={{ flexDirection: 'row' }}>
                    {renderKeyBoardLetter('A')}
                    {renderKeyBoardLetter('Z')}
                    {renderKeyBoardLetter('E')}
                    {renderKeyBoardLetter('R')}
                    {renderKeyBoardLetter('T')}
                    {renderKeyBoardLetter('Y')}
                    {renderKeyBoardLetter('U')}
                    {renderKeyBoardLetter('I')}
                    {renderKeyBoardLetter('O')}
                    {renderKeyBoardLetter('P')}
                </View>
                <View style={{ flexDirection: 'row' }}>
                    {renderKeyBoardLetter('Q')}
                    {renderKeyBoardLetter('S')}
                    {renderKeyBoardLetter('D')}
                    {renderKeyBoardLetter('F')}
                    {renderKeyBoardLetter('G')}
                    {renderKeyBoardLetter('H')}
                    {renderKeyBoardLetter('J')}
                    {renderKeyBoardLetter('K')}
                    {renderKeyBoardLetter('L')}
                    {renderKeyBoardLetter('M')}
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Key
                        letter="ENTER"
                        onPress={() => {
                            dispatch({ type: 'validate' });
                        }}
                        status={0} />
                    {renderKeyBoardLetter('w')}
                    {renderKeyBoardLetter('X')}
                    {renderKeyBoardLetter('C')}
                    {renderKeyBoardLetter('V')}
                    {renderKeyBoardLetter('B')}
                    {renderKeyBoardLetter('N')}
                    <Key
                        letter="⟵"
                        onPress={() => {
                            dispatch({ type: 'erase' })
                        }} status={0} />
                </View>
            </View>
        </SafeAreaView>
    );
}
