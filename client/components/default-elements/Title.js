import React, {Component} from 'react'
import {Text, StyleSheet} from 'react-native'

class Title extends Component {
    render() {
        let {title} = this.props
        return (
            <Text style={[styles.title, this.props.color]}>{title}</Text>
        );
    }
}

export default Title


const styles = StyleSheet.create({
    title: {
        fontSize: 28, color: '#b13333', fontWeight: 'bold',
        marginBottom: 20, marginLeft: 10, fontFamily: "normal"
    }
})