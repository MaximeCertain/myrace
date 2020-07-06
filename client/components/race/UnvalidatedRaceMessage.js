import React, {Component} from "react"
import {Text, StyleSheet, View, Image, TouchableOpacity} from 'react-native';

class UnvalidatedRaceMessage extends Component {
    render() {
        let {reasonAdmin} = this.props
        return (
            <View style={styles.container}>
                <Text style={styles.failedMessage}>Cette course n'a malheureusement pas été retenue par notre équipe</Text>
                <Text>Raison : {reasonAdmin} </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        margin: 10,
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        borderTopColor: 'black',
        borderTopWidth: 1,
        padding:10,
    },
    failedMessage:{
        marginBottom:6,
        fontSize: 16,
        fontWeight: "bold",
        color: "red"

    }
})

export default UnvalidatedRaceMessage