import React, {Component} from 'react';
import {StyleSheet, Text, View, Button, Animated, ActivityIndicator, ScrollView} from 'react-native';
import name from '../assets/name.png'
import {connect} from "react-redux";
import {Formik} from "formik";
import LoginSchema from "../forms/validators/login.validator";
import UserInput from "../components/form-elements/UserInput";
import runnerLogo from "../assets/runner.png";
import passwordLogo from "../assets/password.png";
import SubmitButton from "../components/form-elements/SubmitButton";
import Title from "../components/default-elements/Title";
import ResultValidator from "../forms/validators/result.validator";
import UsersService from "../services/api/users.service";
import RacesService from "../services/api/races.service";

class SaveRaceResults extends Component {

    constructor(props) {
        super(props);
        this.state = {
            race: this.props.navigation.state.params.race
        }
    }

    async submitForm(values,userId) {
        console.log(values)
        let response = await RacesService.sendResult(this.state.race.id, userId, values);
    }

    render() {
        return (
            <ScrollView>
                <Title title={`Entrez/Modifiez les résultats de ${this.state.race.name}`}/>
                {this.state.race.Runners.map(runner => {
                    return (
                        <View style={styles.blocForm}>
                            <Text>{`${runner.lastname} ${runner.firstname}`}</Text>
                            <Formik
                                initialValues={{
                                    bibNumber: runner.UserRaces.bibNumber,
                                    time_achieved: runner.UserRaces.time_achieved
                                }}
                                onSubmit={values => this.submitForm(values,runner.id)}
                                validationSchema={ResultValidator}>
                                {({handleChange, values, handleSubmit, errors}) => (
                                    <View>
                                        <UserInput errors={errors.bibNumber} source={name} name={"bibNumber"}
                                                   value={values.bibNumber} defaultValue={runner.UserRaces.bibNumber}
                                                   placeholder={'Dossard de course'}
                                                   onChangeText={handleChange('bibNumber')}/>
                                        <UserInput errors={errors.time_achieved} source={runnerLogo}
                                                   name={"time_achieved"} defaultValue={runner.UserRaces.time_achieved}
                                                   value={values.time_achieved} placeholder={'Temps réalisé'}
                                                   onChangeText={handleChange('time_achieved')}/>
                                        <SubmitButton title={"Valider"} onPress={handleSubmit}/>
                                    </View>
                                )
                                }
                            </Formik>
                        </View>
                    )
                })}
            </ScrollView>)
    }
}

const styles = StyleSheet.create({
    blocForm: {
        margin: 10
    }
})


export default SaveRaceResults