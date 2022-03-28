import { View } from 'react-native';
import React from 'react';
import Wordle from '../components/Worlde';
import { Provider } from 'react-redux';
import store from '../configureStore';


export default function WorldeGame({ navigation }: any) {
  return (
    <Provider store={store}>
      <View><Wordle/></View>
    </Provider>
  );
}