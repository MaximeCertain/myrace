import React, {Component} from "react"
import {Text, StyleSheet, FlatList, ScrollView} from 'react-native';
import RaceItem from "./RaceItem";
import MessageBox from "../message/MessageBox";
import MessageForm from "../message/MessageForm";
import {fetchRaces} from "../../store/dispatchers/races.dispatcher";
import {connect} from "react-redux";

class MessagesRace extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let {messages, raceId, type} = this.props
        let messagesPrinted = messages.filter(m => {
            return (type === "result" ? m.TypeMessageId == 2 : m.TypeMessageId==1)
        });
        return (
            <ScrollView style={styles.container}>
                <Text
                    style={styles.labelForum}>{this.props.type === "result" ? "Discutez de vos résultats !" : "Messages d'avant course"}
                </Text>
                <MessageForm raceId={raceId} type={this.props.type}/>
                <FlatList
                    data={messagesPrinted} backgroundColor={"#FFF"}
                    keyExtractor={item => item.id}
                    renderItem={({item}) =>
                        <MessageBox
                            data={item}/>}
                />
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        margin: 10,
        padding: 5
    },
    labelForum: {
        fontSize: 22,
        color: "blue"
    }
})


export default MessagesRace