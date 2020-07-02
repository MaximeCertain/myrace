import {createStackNavigator} from "react-navigation-stack";
import Splash from "./Splash";
import {createAppContainer} from "react-navigation";
import Login from "./Login";
import Home from "./Home";
import DetailRace from "../components/race/DetailRace";

const AppNavigator = createStackNavigator({
    Splash: {screen: Splash, navigationOptions: {headerShown: false}},
    Login: {screen: Login, navigationOptions: {headerShown: false}},
    Home:{screen: Home, navigationOptions: {headerShown: false}},
    DetailRace:{screen: DetailRace, navigationOptions: {headerShown: false}}

}, {
    initialRouteName: 'Splash'
})



export default createAppContainer(AppNavigator)
