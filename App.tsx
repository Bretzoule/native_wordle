import * as React from 'react';
import Wordle from './components/Worlde';
import { Provider } from 'react-redux';
import store from './configureStore';
import Homepage from './screen/Homepage';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Homepage} />
          <Stack.Screen name="Worlde" component={Wordle} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
