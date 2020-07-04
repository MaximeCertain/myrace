import React, {Component} from "react"
import {Text, StyleSheet, FlatList, ScrollView} from 'react-native';
import RaceItem from "./RaceItem";
import MessageBox from "../message/MessageBox";
import MessageForm from "../message/MessageForm";

class MessagesRace extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let {messages, raceId} = this.props
        return (
            <ScrollView style={styles.container}>
                <Text style={styles.labelForum}>Messages pré-course</Text>
                <MessageForm raceId={raceId} />
                <FlatList
                    data={messages} backgroundColor={"#FFF"}
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