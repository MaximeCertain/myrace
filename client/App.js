import {StatusBar} from 'expo-status-bar';
import React, {Component} from 'react';
import Navigation from './screens/Navigation'
import {Provider} from "react-redux";
import {store, persistor} from './store/configureStore'
import {PersistGate} from "redux-persist/integration/react";


class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <Navigation/>
                </PersistGate>
            </Provider>
        )
    }
}

export default App;


