import React, {Component} from 'react';
import {StyleSheet, View, Image} from 'react-native';
import UsersService from "../services/api/users.service";
import {Formik} from 'formik';
import LoginSchema from "../forms/validators/login.validator";
import logo from "../assets/logo.png";
import mailLogo from "../assets/mail.png";
import passwordLogo from "../assets/password.png";
import UserInput from "../components/form-elements/UserInput";
import Title from "../components/default-elements/Title";
import SubmitButton from "../components/form-elements/SubmitButton";
import {connect} from "react-redux";
import {login} from "../actions/users.actions";


class Login extends Component {

    async log(values) {
        let response = await UsersService.login(values);
        try {
            if (response.ok) {
                let data = await response.json();
                this.props.changeToken(data.token);
                this.props.navigation.navigate('Home');
            }
        } catch (e) {
            console.log(e.message)
        }
    }

    render() {
        console.log(this.props)
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Image source={logo}/>
                    <Title title={"My Race"}/>
                </View>
                <Formik
                    initialValues={{email: '', password: ''}}
                    onSubmit={values => this.log(values)}
                    validationSchema={LoginSchema}>
                    {({handleChange, values, handleSubmit, errors}) => (
                        <View>
                            <UserInput errors={errors.email} source={mailLogo} name={"email"} value={values.email}
                                       placeholder={'Adresse email'} onChangeText={handleChange('email')}/>
                            <UserInput errors={errors.password} source={passwordLogo} name={"password"}
                                       value={values.password} placeholder={'Mot de passe'}
                                       onChangeText={handleChange('password')} secureTextEntry={true}/>
                            <SubmitButton title={"Se connecter"} onPress={handleSubmit}/>
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
    }
})

const mapDispatchToProps = dispatch => {
    return {
        changeToken: (token) => {
            dispatch(login(token))
        }
    }
}


//avec cette fonction, le composant s'abonne aux changements choisis du store redux
const mapStateToProps = (state) => {
    //je ne veux recupérer qu'une partie du store
    return {token: state.login.token}
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)