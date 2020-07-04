import React, {Component} from 'react'
import {View, Text, FlatList, ScrollView, StyleSheet, Image} from 'react-native'
import Title from "../components/default-elements/Title";
import FormRace from "../components/race/FormRace";
import {fetchFormRaces} from "../store/dispatchers/races.dispatcher";
import {connect} from "react-redux";


class CreateRace extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <View>
                <Title title={"Création de ma course"}/>
                <FormRace navigation={this.props.navigation}/>
            </View>
        )
    }
}


export default CreateRace

