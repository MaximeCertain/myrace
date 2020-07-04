import React, {Component} from 'react'
import {View, Text, FlatList, ScrollView, StyleSheet} from 'react-native'
import user from "../../assets/user.png";
import TextVignet from "../default-elements/TextVignet";
import IconLabel from "../default-elements/IconLabel";
import Helpers from "../../helpers/Helpers";

class MessageBox extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let {description, User, createdAt} = (this.props.data)
        return (
            <View style={styles.container}>
                <IconLabel source={user} label={`${User.lastname} ${User.firstname}`}/>
                <Text style={styles.date}>le {Helpers.getDate(createdAt)}</Text>
                <Text style={styles.desc}>{description}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        margin: 10,
        padding: 5
    },
    date: {
        margin: 2,
        padding: 5,
        fontSize: 15
    },
    desc: {
        margin: 2,
        padding: 5,
        fontSize: 22
    }
})

export default MessageBox

