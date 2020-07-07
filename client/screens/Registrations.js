import React, {Component} from 'react';
import {StyleSheet, Text, View, Button, Animated, ActivityIndicator, ScrollView, FlatList} from 'react-native';
import logo from '../assets/logo.png'
import {connect} from "react-redux";
import NavigateButton from "../components/default-elements/NavigateButton";
import {fetchRaces} from "../store/dispatchers/races.dispatcher";
import {getRegisteredRaces} from "../actions/races.action";
import Title from "../components/default-elements/Title";
import RaceItem from "../components/race/RaceItem";
import RegisteredRaceItem from "../components/race/RegisteredRaceItem";
import CssHelper from "../helpers/CssHelper";

class Registrations extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getRegisteredRaces(this.props.user.id)
    }

    create() {
        this.props.navigation.navigate("CreateRace")
    }

    render() {
        let {registeredRaces, navigation} = (this.props)
        let color = CssHelper.randomColor()
        return (
            <ScrollView style={styles.container}>
                <NavigateButton style={styles.button} onPress={() => this.create()} title={"Créer ma course"}/>
                <View style={styles.header}>
                    <Title color={color} title={"Mes inscriptions"}/>
                </View>
                {registeredRaces === null && <Text>Inscrit à aucune course</Text>}
                <FlatList
                    data={registeredRaces} backgroundColor={"#FFF"}
                    keyExtractor={item => item.id}
                    renderItem={({item}) =>
                        <RaceItem navigation={navigation}
                                  color={ color}
                                  type={"register"}
                                  data={item}/>}/>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container:{
      marginTop: 30
    },
    button: {
        marginHorizontal: 100
    },
    header: {
        flex: 1,
        flexDirection: "column",
        textAlign: "center",
    }
})

const mapDispatchToProps = dispatch => {
    return {
        getRegisteredRaces: (id) => {
            dispatch(getRegisteredRaces(id))
        }
    }
}

const mapStateToProps = state => ({
    races: state.race.races,
    user: state.login.user,
    registeredRaces: state.race.registeredRaces
})

export default connect(mapStateToProps, mapDispatchToProps)(Registrations)

