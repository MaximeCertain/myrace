import {createStackNavigator} from "react-navigation-stack";
import Splash from "./Splash";
import {createAppContainer} from "react-navigation";
import Login from "./Login";
import Home from "./Home";

const AppNavigator = createStackNavigator({
    Splash: {screen: Splash, navigationOptions: {headerShown: false}},
    Login: {screen: Login, navigationOptions: {headerShown: false}},
    Home:{screen: Home, navigationOptions: {headerShown: false}}
}, {
    initialRouteName: 'Splash'
})

export default createAppContainer(AppNavigator)
