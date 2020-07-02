import React, {Component} from "react"
import {Text, StyleSheet, View, Image, TouchableOpacity} from 'react-native';

class DetailRace extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.navigation.state.params.data,
            short_description: null,
            description: null,
            isFavoris: false
        }
    }
    render() {
        let {name} = this.state.data

        return (
            <View><Text>{name}
            </Text></View>
        )
    }
}

export default DetailRace