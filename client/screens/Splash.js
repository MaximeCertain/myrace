import React, {Component} from 'react';
import {StyleSheet, Text, View, Button, Animated, ActivityIndicator} from 'react-native';
import logo from '../assets/logo.png'
import {connect} from "react-redux";

class Splash extends Component {

    constructor(props) {
        super(props);
        this.state = {
            fadeIn: new  Animated.Value(0)
        }
    }

    componentDidMount() {
        this.fadeInAnimation();
    }

    fadeInAnimation = () => {
        let {token} = this.props
        Animated.timing(this.state.fadeIn, {
            toValue: 1,
            duration: 1000
        }).start(() => this.props.navigation.navigate(token != null ? 'Home' : 'Login')
         );
    }

    render() {
        let {fadeIn} = this.state;
        return (
            <View style={styles.container}>
                <ActivityIndicator size={"large"} color={"red"} animated={true}/>
                <Animated.Image
                    style={{opacity: fadeIn}}
                    source={logo}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#FFF"
    }
});

//avec cette fonction, le composant s'abonne aux changements choisis du store redux
const mapStateToProps = (state) => {
    //je ne veux recupérer qu'une partie du store
    return {
        token: state.login.token
    }
}

export default connect(mapStateToProps, null)(Splash)