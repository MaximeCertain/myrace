import React, {Component} from 'react';
import {Button, TouchableOpacity, View, StyleSheet, Text, CheckBox} from "react-native";

class InputCheckbox extends Component {

    render() {
     let   {value, onValueChange, name, errors} = this.props
        return (
            <View style={styles.container}>
                <CheckBox value={value} name={name} errors={errors}
                          onValueChange={onValueChange}
                          title={"Refuser l'organisation de la course"}/>
                <Text>{"Refuser l'organisation de la course"}</Text>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container:{
        flexDirection: "row"
    }
})

export default InputCheckbox