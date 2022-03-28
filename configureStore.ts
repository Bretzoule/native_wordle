import { createStore, StoreEnhancer } from 'redux'
// import { persistStore, persistReducer } from 'redux-persist'
// import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

//import rootReducer from './reducers'

import reducer from './reducer/reducer'

const store = createStore(reducer);
export default store

// const persistConfig = {
//     key: 'root',
//     storage,
// }

// let preloadedState: StoreEnhancer<unknown, unknown> | undefined;
// const preloadedGameState = JSON.parse(await (storage.getItem('gameState')) ?? '{}');

// const persistedReducer = persistReducer(persistConfig, reducer)

// if (preloadedGameState) {
//     preloadedState = preloadedGameState;
// } else {
//     preloadedState = reducer(undefined, { type: '@@INIT' });
// }

// export default () => {
//     let store = createStore(persistedReducer, preloadedState)
//     let persistor = persistStore(store)
//     return { store, persistor }
// }