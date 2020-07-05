import React, {Component} from 'react';
import {StyleSheet, Text, View, Button, Animated, ActivityIndicator} from 'react-native';
import logo from '../assets/logo.png'
import {connect} from "react-redux";
import {Formik} from "formik";
import LoginSchema from "../forms/validators/login.validator";
import UserInput from "../components/form-elements/UserInput";
import mailLogo from "../assets/mail.png";
import passwordLogo from "../assets/password.png";
import SubmitButton from "../components/form-elements/SubmitButton";

class SaveRaceResults extends Component {

    constructor(props) {
        super(props);

    }

    render() {
        console.log(this.props)
        return (<View>
            <Formik
                initialValues={{bibNumber: '', time_achieved: ''}}
                onSubmit={values => this.log(values)}
                validationSchema={LoginSchema}>
                {({handleChange, values, handleSubmit, errors}) => (
                    <View>
                        <UserInput errors={errors.bibNumber} source={mailLogo} name={"bibNumber"} value={values.bibNumber}
                                   placeholder={'Dossard de course'} onChangeText={handleChange('bibNumber')}/>
                        <UserInput errors={errors.time_achieved} source={passwordLogo} name={"time_achieved"}
                                   value={values.time_achieved} placeholder={'Temps réalisé'}
                                   onChangeText={handleChange('time_achieved')} secureTextEntry={true}/>
                        <SubmitButton title={"Valider"} onPress={handleSubmit}/>
                    </View>
                )
                }
            </Formik>
        </View>)
    }
}


export default SaveRaceResults