import React from 'react';
import {createStackNavigator} from "react-navigation-stack";
import Splash from "./Splash";
import {createAppContainer} from "react-navigation";
import {createBottomTabNavigator} from 'react-navigation-tabs'
import Icon from 'react-native-vector-icons/FontAwesome'

import Login from "./Login";
import Home from "./Home";
import DetailRace from "../components/race/DetailRace";
import Profile from "./Profile";
import Register from "./Register";
import Registrations from "./Registrations";
import CreateRace from "./CreateRace";
import Results from "./Results";
import SaveRaceResults from "./SaveRaceResults";

const TabNavigator = createBottomTabNavigator({
    //https://fontawesome.com/icons?d=gallery&q=profile
    Home: {
        screen: Home,
        navigationOptions: () => ({
            tabBarIcon: (tintColor) => (
                <Icon name={"meetup"}
                      color={tintColor}
                      size={24}/>
            )
        })
    }, Registrations: {
        screen: Registrations,
        navigationOptions: () => ({
            tabBarIcon: (tintColor) => (
                <Icon name={"globe"}
                      color={tintColor}
                      size={24}/>
            )
        })
    }, Results: {
        screen: Results,
        navigationOptions: () => ({
            tabBarIcon: (tintColor) => (
                <Icon name={"info-circle"}
                      color={tintColor}
                      size={24}/>
            )
        })
    },
    Profile: {
        screen: Profile,
        navigationOptions: () => ({
            tabBarIcon: (tintColor) => (
                <Icon name={"user-circle"}
                      color={tintColor}
                      size={24}/>
            )
        })
    }
}, {
    tabBarOptions: {
        activeTintColor: '#d71d1d',
        inactiveTintColor: '#473b47',
        showLabel: false,
        showIcon: true,
        options: {tabBarOptions: {currentTabIndex: 2}}, // add this
    }
})

const AppNavigator = createStackNavigator({
    Splash: {screen: Splash, navigationOptions: {headerShown: false}},
    Login: {screen: Login, navigationOptions: {headerShown: false}},
    Home: {screen: TabNavigator, navigationOptions: {headerShown: false}},
    Register: {screen: Register, navigationOptions: {headerShown: false}},
    DetailRace: {screen: DetailRace, navigationOptions: {headerShown: false}},
    CreateRace: {screen: CreateRace, navigationOptions: {headerShown: false}},
    SaveRaceResults: {screen: SaveRaceResults, navigationOptions: {headerShown: false}}
}, {
    initialRouteName: 'Splash'
})


export default createAppContainer(AppNavigator)
