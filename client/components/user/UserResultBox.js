import React, {Component} from "react"
import {Text, StyleSheet, View, Image, TouchableOpacity, FlatList, ScrollView} from 'react-native';
import userImage from "../../assets/user.png";
import IconLabel from "../default-elements/IconLabel";
import user from "../../assets/user.png";
import Helpers from "../../helpers/Helpers";
import {color} from "react-native-reanimated";

class UserResultBox extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        let {data, position} = this.props
        return (
            <View>
                <View style={styles.container}>
                    <Text
                        style={[styles.position, position === 1 ? styles.gold : position === 2 ? styles.silver : position === 3 ? styles.brown : styles.black]}>{position}</Text>
                    <IconLabel source={user} label={`${data.lastname} ${data.firstname}`}/>
                    <Text style={styles.date}> N° {data.UserRaces.bibNumber}</Text>
                    <Text style={styles.desc}>{`${data.UserRaces.time_achieved}"`} </Text>
                </View>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        margin: 10,
        padding: 5,
        borderBottomColor: 'black',
        borderBottomWidth: 1
    },
    position: {
        fontSize: 22,
        fontWeight: "bold",
        marginRight: 3
    },
    date: {
        margin: 2,
        marginRight: 2,
        fontSize: 15
    },
    desc: {
        marginRight: 2,
        margin: 2,
        fontSize: 20
    },
    gold: {
        color: "gold"
    },
    silver: {
        color: "silver"
    },
    bronze: {
        color: "brown"
    },
    black: {
        color: "black"
    }
})

export default UserResultBox