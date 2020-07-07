import React, {Component} from "react"
import {Text, StyleSheet, View, Image, TouchableOpacity, FlatList, ScrollView} from 'react-native';
import MessageBox from "../message/MessageBox";
import UserResultBox from "../user/UserResultBox";

class RankingRace extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let {Runners} = this.props

        Runners.sort(function (a, b) {
            return (a.UserRaces.time_achieved > b.UserRaces.time_achieved) ? 1 : ((b.UserRaces.time_achieved > a.UserRaces.time_achieved) ? -1 : 0);
        });
        return (
            <View>
                <Text>
                    <FlatList
                        data={Runners} backgroundColor={"#FFF"}
                        keyExtractor={item => item.id}
                        renderItem={({item, index}) =>
                            <UserResultBox
                                position={index + 1}
                                data={item}/>}
                    />
                </Text>
            </View>)
    }
}

export default RankingRace