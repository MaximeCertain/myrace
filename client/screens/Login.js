import React, {Component} from 'react';
import {StyleSheet, View, Image, ActivityIndicator} from 'react-native';
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
import {login, logout} from "../actions/users.actions";
import NavigateButton from "../components/default-elements/NavigateButton";

class Login extends Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.logout()
    }

    async log(values) {
        let response = await UsersService.login(values);
        try {
            if (response.ok) {
                let data = await response.json();
                this.props.changeToken(data);
                this.props.navigation.navigate('Home');
            }
        } catch (e) {
            console.log(e.message)
        }
    }

    register() {
        this.props.navigation.navigate('Register');
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Image source={logo} resizeMode={"cover"}/>
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
                <View style={styles.register}>
                    <NavigateButton title={"S'inscrire"} onPress={() => this.register()}/>
                </View>
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
    register: {
        marginVertical: 10
    }
})

//dispactcher ces evenements
const mapDispatchToProps = dispatch => {
    return {
        changeToken: (data) => {
            dispatch(login(data))
        },
        logout: () => {
            dispatch(logout())
        }
    }
}


//avec cette fonction, le composant s'abonne aux changements choisis du store redux
const mapStateToProps = (state) => {
    //je ne veux recupérer qu'une partie du store
    return {
        token: state.login.token
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)