import React, {Component} from 'react'
import {
    View, Text, FlatList, ScrollView, StyleSheet, TouchableHighlight, Button, ActivityIndicator, TouchableOpacity
} from 'react-native'
import {connect} from "react-redux";
import {fetchRaces} from '../store/dispatchers/races.dispatcher'
import RaceItem from "../components/race/RaceItem";
import Title from "../components/default-elements/Title";
import CssHelper from "../helpers/CssHelper";
import Icon from "react-native-vector-icons/FontAwesome";
import FilterRace from "../components/race/FilterRace";
import RacesService from "../services/api/races.service";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            races: null,
            filtering: false
        }
    }

    async componentDidMount() {
        let r = await this.props.getRaces()
        this.setState({
            races: r
        })
    }

    /**
     * Afficher le filtre et le réinitialiser la liste
     */
    filter() {
        this.setState({filtering: !this.state.filtering})
        if (this.state.filtering) {
            this.setState({
                races: this.props.races
            })
        }
    }

    filterRaces = async values => {
        let racesWithFilter = await RacesService.filter(values);
        this.setState({
            races: racesWithFilter
        })
    }

    render() {
        let {navigation, error, loading} = this.props;
        let {races} = this.state
        if (loading) {
            return (<ActivityIndicator/>)
        }
        let color = CssHelper.randomColor()
        return (
            <ScrollView style={styles.container}>
                <View style={styles.header}>
                    {this.state.filtering ? <FilterRace launchFilter={this.filterRaces}/> :
                        <Title color={color} title={"Toutes les courses"}/>}
                    <TouchableHighlight onPress={() => this.filter()} underlayColor='#042417'>
                        <View>
                            <Icon
                                name='filter'
                                size={50}
                                color='#042'
                            />
                        </View>
                    </TouchableHighlight>

                </View>
                <FlatList
                    data={typeof races !== "undefined" ? races : this.props.races} backgroundColor={"#FFF"}
                    keyExtractor={item => item.id}
                    renderItem={({item}) =>
                        <RaceItem navigation={navigation}
                                  color={color}
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
        backgroundColor: "#e7e6e6",
        marginTop: 25
    },
    header: {
        flex: 1,
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

