import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import reducer from './reducers/reducer'
import login from "./reducers/users.reducers";
import race from "./reducers/races.reducers";

import thunk from "redux-thunk";
import {persistStore, persistReducer} from 'redux-persist';
import {PersistGate} from "redux-persist/integration/react";
import AsyncStorage from '@react-native-community/async-storage';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage
}

const combinedReducers = combineReducers({
    login, race
})

const persistedReducer = persistReducer(persistConfig, combinedReducers)

export const store = createStore(persistedReducer,
    applyMiddleware(thunk)
)

export const persistor = persistStore(store)
