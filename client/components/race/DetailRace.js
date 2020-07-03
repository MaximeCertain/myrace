import React, {Component} from "react"
import {Text, ScrollView, StyleSheet, View, Image, TouchableOpacity, ImageBackground} from 'react-native';
import defaultRace from "../../assets/default_race.jpg";
import Title from "../default-elements/Title";
import TextVignet from "../default-elements/TextVignet";
import SubmitButton from "../form-elements/SubmitButton";
import DescriptionDeployment from "../default-elements/DescriptionDeployment";

class DetailRace extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.navigation.state.params.data,
            isRegister: false
        }
    }

    registerRace = () => {
        this.setState({
            isRegister: true
        })
    }

    render() {
        let {kilometers, name, Runners, createdAt, max_participants, elevation, description, id} = this.state.data
        let {short_description, isRegister} = this.state
        return (
            <ScrollView style={styles.container}>
                <View style={styles.header}>
                    <Title title={name}/>
                    <ImageBackground style={styles.image}
                                     source={defaultRace}>
                    </ImageBackground>
                </View>
                <View style={styles.infosContainer}>
                    <TextVignet label={"Kilomètres"} detail={kilometers}/>
                    <TextVignet label={"Denivelé +"} detail={elevation}/>
                    <TextVignet label={"Participants"} detail={`${Runners.length} / ${max_participants}`}/>
                </View>
                <View style={styles.description}>
                    <DescriptionDeployment description={description}/>
                </View>
                {!isRegister && <SubmitButton title={"M'inscrire à cette course"} onPress={this.registerRace}/>}
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 10
    },
    image: {
        borderTopStartRadius: 20,
        borderTopEndRadius: 20,
        borderRadius: 20,
        height: 220,
        width: "100%"
    },
    infosContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 25,
        marginVertical: 8
    },
    header: {
        marginTop: 10,
        textAlign: "center"
    },
    description: {
        paddingHorizontal: 20,
        paddingVertical: 10
    }
})

export default DetailRace