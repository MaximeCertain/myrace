import {StatusBar} from 'expo-status-bar';
import React, {Component} from 'react';
import Navigation from './screens/Navigation'
import {StyleSheet, Text, View} from 'react-native';
import { createStackNavigator } from 'react-navigation-stack'
import Splash from "./screens/Splash";
import {createAppContainer} from "react-navigation";


class App extends Component {
    render() {
        return(
               <Navigation/>
            )
    }
}

export default App;


