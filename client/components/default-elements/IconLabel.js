import React, {Component} from 'react'
import {StyleSheet, View, Image, TextInput, Text} from 'react-native'

class IconLabel extends Component {
    render() {
        let {source, label} = this.props;
        return (
            <View style={styles.iconLabelWrapper}>
                <Image source={source} style={styles.icon}/>
                <Text style={[styles.label, this.props.color]}>
                    {label}
                </Text>
            </View>
        )
    }
}

export default IconLabel

const styles = StyleSheet.create({
    icon: {
        position: 'absolute',
        marginRight: 10,
        width: 22,
        height: 22,
    }, label: {
        color: "rgb(163, 5, 5)",
        paddingLeft: 25
    },
    iconLabelWrapper: {
        flexDirection: "row",
        alignItems: "flexStart"
    }
})