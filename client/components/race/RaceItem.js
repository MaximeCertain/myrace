import React, {Component} from "react"
import {Text, StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import defaultRace from "../../assets/default_race.jpg";
import runner from "../../assets/runner.png";
import mountains from "../../assets/mountain.png";
import alert from "../../assets/alert.png";
import Title from "../default-elements/Title";
import IconLabel from "../default-elements/IconLabel";
import Helpers from "../../helpers/Helpers";
import CssHelper from "../../helpers/CssHelper";
import NavigateButton from "../default-elements/NavigateButton";

class RaceItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            type: "default"
        }
    }

    componentDidMount() {
        this.setState({
            type: this.props.type
        })
    }

    details() {
        let {navigation, data, type} = this.props;

        navigation.navigate('DetailRace', {
                data: data,
                type: type
            }
        );
    }


    render() {
        let {kilometers, name, Runners, createdAt, max_participants, elevation, date, User, validatedAdmin} = this.props.data
        let {color} = this.props
        let isRegisteredScreen = this.props.type === "register"
        return (
            <TouchableOpacity onPress={() => this.details()}>
                <View style={styles.container}>
                    {validatedAdmin && <Text style={styles.noRace}>{"La course n'aura pas lieu !"}</Text>}
                    {(this.props.userId && User.id === this.props.userId)
                    &&
                    <NavigateButton onPress={() => this.props.navigation.navigate("SaveRaceResults", {race: this.props.data})}
                                    title={"Votre Course s'est déroulée ! Enregister les résultats"}/>
                    }
                    <Text style={[styles.title, color]}>{name} </Text>
                    <View style={[styles.informations, color]}>
                        <Text style={color}>{`${kilometers} km `} </Text>
                        <Text
                            style={color}>{this.state.type === "register" ? Helpers.extractDurationDate(date) : Helpers.getDate(date)} </Text>
                    </View>
                    <View style={styles.informations}>
                        <IconLabel color={color} source={runner}
                                   label={`${Runners && Runners.length} / ${max_participants}`}/>
                        <IconLabel color={color} source={mountains} label={`${elevation}m`}/>
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
        justifyContent: "space-between",
        color: "blue"
    },
    infoLabel: {
        color: "#a30505",
    },
    infosRegister: {
        color: "#053aa3",
    },
    infosResults: {
        color: "#3ca305",
    },
    infosRegisteredLabel: {
        fontSize: 22,
        color: "#a30505",
        fontWeight: "bold"
    },
    noRace:{
        fontWeight: "bold",
        fontSize: 19,
        color:"red",
        textAlign: "center"
    }
})
export default RaceItem