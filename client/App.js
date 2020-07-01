import {StatusBar} from 'expo-status-bar';
import React, {Component} from 'react';
import Navigation from './screens/Navigation'
import {Provider} from "react-redux";
import Store from './store/configureStore'



class App extends Component {
    render() {
        return(
            <Provider store={Store}>
               <Navigation/>
               </Provider>
            )
    }
}

export default App;


