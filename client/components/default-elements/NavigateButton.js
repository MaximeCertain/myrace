import React, {Component} from 'react'
import {StyleSheet, View, Image, TextInput, Text, TouchableOpacity} from 'react-native'

class NavigateButton extends Component {

    render() {
        return (
            <View>
                <TouchableOpacity onPress={this.props.onPress} style={styles.button}>
                    <Text style={styles.textButton}>{this.props.title}</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default NavigateButton
const styles = StyleSheet.create({
    button: {
        borderRadius: 20,
        marginHorizontal: 20,
        backgroundColor: "rgba(103,20,113,0.88)",
        textAlign: "center"
    },
    textButton:{
        padding:10,
        fontSize:16,
        color: "white",
        textAlign: "center"
    }
});
