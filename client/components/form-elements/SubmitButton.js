import React, {Component} from 'react';
import {Button, TouchableOpacity, View, StyleSheet, Text} from "react-native";

class SubmitButton extends Component {

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

const styles = StyleSheet.create({
    button: {
        borderRadius: 20,
        marginHorizontal: 20,
        backgroundColor: "red",
        textAlign: "center"
    },
    textButton:{
        padding:10,
        fontSize:16,
        color: "white",
        textAlign: "center"
    }
});


export default SubmitButton