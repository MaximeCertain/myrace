import React, {Component} from 'react';
import {StyleSheet, Text, View, Button, Animated, ActivityIndicator, ScrollView, FlatList} from 'react-native';
import logo from '../assets/logo.png'
import {connect} from "react-redux";
import CssHelper from "../helpers/CssHelper";
import {getRegisteredRaces, getResultedRaces} from "../actions/races.action";
import NavigateButton from "../components/default-elements/NavigateButton";
import Title from "../components/default-elements/Title";
import RaceItem from "../components/race/RaceItem";

class Results extends Component {
    componentDidMount() {
        this.props.getResultedRaces(this.props.user.id)
    }

    render() {
        let {resultsRaces, navigation, user} = this.props;
        let color = CssHelper.randomColor()
        return (
            <ScrollView style={styles.container}>
                <View style={styles.header}>
                    <Title color={color} title={"Mes résultats"}/>
                </View>
                {resultsRaces === null && <Text>Pas encore de résultats ... Inscrivez vous à des courses !</Text>}
                <FlatList
                    data={resultsRaces} backgroundColor={"#FFF"}
                    keyExtractor={item => item.id}
                    renderItem={({item}) =>
                        <RaceItem navigation={navigation}
                                  userId={user.id}
                                  color={color}
                                  type={"result"}
                                  data={item}/>}/>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
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
        getResultedRaces: (id) => {
            dispatch(getResultedRaces(id))
        }
    }
}

const mapStateToProps = state => ({
    user: state.login.user,
    resultsRaces: state.race.resultsRaces
})

export default connect(mapStateToProps, mapDispatchToProps)(Results)