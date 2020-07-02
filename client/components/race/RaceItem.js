import React, {Component} from "react"
import {Text, StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import defaultRace from "../../assets/default_race.jpg";
import runner from "../../assets/runner.png";
import mountains from "../../assets/mountain.png";

import Title from "../default-elements/Title";
import IconLabel from "../default-elements/IconLabel";
import Helpers from "../../helpers/Helpers";

class RaceItem extends Component {
    constructor(props) {
        super(props);
    }

    details() {
        let {navigation, data} = this.props;
        console.log(data)
        navigation.navigate('DetailRace', {
                data: data
            }
        );
    }


    render() {
        let {kilometers, name, Runners, createdAt, max_participants, elevation} = this.props.data

        return (
            <TouchableOpacity onPress={() => this.details()}>
                <View style={styles.container}>
                    <Text style={styles.title}>{name}</Text>
                    <View style={styles.informations}>
                        <Text style={styles.infoLabel}>{`${kilometers} km `} </Text>
                        <Text style={styles.infoLabel}>{Helpers.getDate(createdAt)}</Text>
                    </View>
                    <View style={styles.informations}>
                        <IconLabel source={runner} label={`${Runners.length} / ${max_participants}`}/>
                        <IconLabel source={mountains} label={`${elevation}m`}/>
                    </View>
                    <Image style={styles.image} source={defaultRace}/>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    image: {
        borderTopStartRadius: 20,
        borderTopEndRadius: 20,
        marginTop: 10,
        borderRadius: 20,
        height: 150,
        width: "100%"
    },
    container: {
        backgroundColor: '#f8f7f7',
        paddingHorizontal: 20,
        paddingVertical: 12,
        marginVertical: 10
    },
    title: {
        color: "#a30505",
        fontSize: 28,
        fontWeight: 'bold'
    },
    informations: {
        marginVertical: 3,
        flexDirection: "row",
        marginHorizontal: 20,
        justifyContent: "space-between"
    },
    infoLabel: {
        color: "#a30505",
    }
})
export default RaceItem