import React, {Component} from 'react'
import {View, Text, FlatList, ScrollView, StyleSheet} from 'react-native'
import RacesService from "../services/api/races.service";
import {login} from "../actions/users.actions";
import {connect} from "react-redux";
import {bindActionCreators} from 'redux';
import fetchRaces from '../services/api/fetchRaces'
import RaceItem from "../components/race/RaceItem";
import Title from "../components/default-elements/Title";
import filter from "../assets/filter.png"
import Image from "react-native-web/src/exports/Image";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            races: [],
        }
    }

    /* componentWillMount() {
         const {fetchRaces} = this.props;
         fetchRaces();
     }*/

    async componentDidMount() {
        let response = await RacesService.list()

        let races = response;
        this.setState({
            races
        })
    }


    render() {

        let {navigation} = this.props;
        let {races} = this.state;
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


/*const mapDispatchToProps = dispatch => {
    return { fetchRaces: () => dispatch(fetchRaces()) } //note the dispatch call
}*
//dispactcher ces evenements

import {getRaces, getRacesErrors, getRacesLoading} from '../store/reducers/races.reducers';
const mapStateToProps = state => ({
    error: getRacesErrors(state),
    races: getRaces(state),
    loading: getRacesLoading(state)
})

//avec cette fonction, le composant s'abonne aux changements choisis du store redux

export default connect(mapStateToProps, mapDispatchToProps)(Home)
*/

export default Home