import React, {Component} from 'react'
import {View, Text, FlatList, ScrollView, StyleSheet, Image} from 'react-native'
import logo from "../assets/logo.png";
import Title from "../components/default-elements/Title";
import {Formik} from "formik";
import LoginSchema from "../forms/validators/login.validator";
import UserInput from "../components/form-elements/UserInput";
import mailLogo from "../assets/mail.png";
import passwordLogo from "../assets/password.png";
import SubmitButton from "../components/form-elements/SubmitButton";
import NavigateButton from "../components/default-elements/NavigateButton";
import RegisterSchema from "../forms/validators/register.validator";
import UsersService from "../services/api/users.service";


class Register extends Component {

    async register(values) {
        let response = await UsersService.register(values);
        try {
            if (response.ok) {
                let data = await response.json();
                this.props.navigation.navigate('Login');
            }
        } catch (e) {
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Title title={"S'inscrire"}/>
                    <Text style={styles.textInfos}>Confrontez vous aux meilleurs</Text>
                </View>
                <Formik
                    initialValues={{email: '', password: '', repeatedPassword: ''}}
                    onSubmit={values => this.register(values)}
                    validationSchema={RegisterSchema}>
                    {({handleChange, values, handleSubmit, errors}) => (
                        <View>
                            <UserInput errors={errors.email} source={mailLogo} name={"email"} value={values.email}
                                       placeholder={'Adresse email'} onChangeText={handleChange('email')}/>
                            <UserInput errors={errors.password} source={passwordLogo} name={"password"}
                                       value={values.password} placeholder={'Mot de passe'}
                                       onChangeText={handleChange('password')} secureTextEntry={true}/>
                            <UserInput errors={errors.passwordConfirmation} source={passwordLogo}
                                       name={"passwordConfirmation"}
                                       value={values.passwordConfirmation} placeholder={'Répetez votre mot de passe'}
                                       onChangeText={handleChange('passwordConfirmation')} secureTextEntry={true}/>
                            <SubmitButton title={"S'inscrire"} onPress={handleSubmit}/>
                        </View>
                    )
                    }
                </Formik>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        textAlign: "center",
        justifyContent: "center",
        backgroundColor: "#eceaea"
    },
    header: {
        alignItems: "center"
    },
    textInfos: {
        alignItems: "center"
    },
    register: {
        marginVertical: 10
    }
})


export default Register