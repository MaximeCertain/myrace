import React, {Component} from 'react'
import {View, Text, FlatList, ScrollView, StyleSheet} from 'react-native'
import RacesService from "../services/api/races.service";
import {login} from "../actions/users.actions";
import {connect} from "react-redux";
import {bindActionCreators} from 'redux';
import {fetchRaces} from '../store/dispatchers/races.dispatcher'
import RaceItem from "../components/race/RaceItem";
import Title from "../components/default-elements/Title";
import filter from "../assets/filter.png"
import Image from "react-native-web/src/exports/Image";
import ActivityIndicator from "react-native-web/dist/exports/ActivityIndicator";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            races: [],
        }
    }

    async componentDidMount() {
        await this.props.getRaces()
    }

    render() {
        let {navigation, error, loading, races} = this.props;
        if(loading){
            return (<ActivityIndicator/>)
        }
        return (
            <ScrollView style={styles.container}>
                <View style={styles.header}>
                    <Title title={"Prochaines courses"}/>
                </View>
                {races === null && <Title title={'null'}/>}
                <FlatList
                    data={races} backgroundColor={"#FFF"}
                    keyExtractor={item => item.id}
                    renderItem={({item}) =>
                        <RaceItem navigation={navigation}
                                  data={item}/>}/>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        textAlign: "center",
        backgroundColor: "#e7e6e6"
    },
    header: {
        flexDirection: "row"
    }
})

const mapDispatchToProps = dispatch => {
    return {
        getRaces: () => {
            dispatch(fetchRaces())
        }
    }
}

const mapStateToProps = state => ({
    error: state.race.error,
    loading: state.race.loading,
    races: state.race.races
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)

