import React, {Component} from "react"
import {Text, ScrollView, StyleSheet, View, Image, TouchableOpacity, ImageBackground} from 'react-native';
import defaultRace from "../../assets/default_race.jpg";
import Title from "../default-elements/Title";
import TextVignet from "../default-elements/TextVignet";
import SubmitButton from "../form-elements/SubmitButton";
import DescriptionDeployment from "../default-elements/DescriptionDeployment";
import {fetchRaces, fetchRegisterRace} from "../../store/dispatchers/races.dispatcher";
import {connect} from "react-redux";
import MessagesRace from "./MessagesRace";
import Helpers from "../../helpers/Helpers";
import RankingRace from "./RankingRace";
import ManageRaceValidity from "./ManageRaceValidity";
import UnvalidatedRaceMessage from "./UnvalidatedRaceMessage";

class DetailRace extends Component {
    //cloic btn => dispatcher, load API puis refresh state redirect inscriptions si inscrition sinon reste ici
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.navigation.state.params.data,
            isRegister: false,
            type: this.props.navigation.state.params.type
        }
    }

    //est on inscrit à cette course ?
    componentDidMount() {
        this.state.data.Runners.map(r => {
            if (r.id === this.props.user.id) {
                this.setState({
                    isRegister: true
                })
            }
        })
    }

    async register() {
        await this.props.registerRace(this.state.data.id)
        this.setState({
            isRegister: true
        })
    }

    render() {
        let {kilometers, name, Runners, createdAt, max_participants, elevation, description, id, Messages, validatedAdmin, reasonAdmin} = this.state.data
        let {isRegister} = this.state
        return (
            <ScrollView style={styles.container}>
                {this.props.user.TypeUser.code === "ROLE_ADMIN" && <ManageRaceValidity race={this.state.data}/>}
                {validatedAdmin && <UnvalidatedRaceMessage reasonAdmin={reasonAdmin}/>}

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
                <View>
                    {this.state.type !== null && this.state.type === "result" && <RankingRace Runners={Runners} />}
                </View>
                <View style={styles.description}>
                    <DescriptionDeployment description={description}/>
                </View>
                {!isRegister ? <SubmitButton title={"M'inscrire à cette course"} onPress={() => this.register()}/> :
                    <MessagesRace raceId={id} messages={Messages} type={this.state.type}/>}
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

const mapDispatchToProps = dispatch => {
    return {
        registerRace: (raceId) => {
            dispatch(fetchRegisterRace(raceId))
        }
    }
}

const mapStateToProps = state => ({
    error: state.race.error,
    loading: state.race.loading,
    user: state.login.user
})

export default connect(mapStateToProps, mapDispatchToProps)(DetailRace)