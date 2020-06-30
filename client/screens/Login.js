import React, {Component} from 'react';
import {StyleSheet, TextInput, View, Button, Text, TouchableHighlight, Animated} from 'react-native';
import UsersService from "../services/api/users.service";
import {useForm} from 'react-hook-form';
import {Formik, Field, Form, ErrorMessage} from 'formik';
import LoginSchema from "../forms/validators/login.validator";
import logo from "../assets/logo.png";

class Login extends Component {

    async log(values) {
        let response = await UsersService.login(values);
        try {
            if (response.ok) {
                let data = await response.json();
                this.props.navigation.navigate('Home');
                console.log(data)
            } else {
                console.log("fail")
            }
        } catch (e) {
            console.log(e.message)
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Animated.Image style={styles.image}
                    source={logo}/>
                <Formik
                    initialValues={{email: '', password: ''}}
                    onSubmit={values => this.log(values)}
                    validationSchema={LoginSchema}>
                    {({handleChange, values, handleSubmit, errors}) => (
                        <View>
                            <TextInput
                                style={styles.input}
                                name='email'
                                value={values.email}
                                onChangeText={handleChange('email')}
                                placeholder='Adresse email'
                                autoCapitalize='none'
                            />
                            <Text style={{color: 'red'}}>{errors.email}</Text>
                            <TextInput
                                style={styles.input}
                                name='password'
                                value={values.password}
                                onChangeText={handleChange('password')}
                                placeholder='Mot de passe'
                                secureTextEntry
                            />
                            <Text style={{color: 'red'}}>{errors.email}</Text>
                            <View>
                                <Button
                                    style={styles.input}
                                    buttonType='outline'
                                    onPress={handleSubmit}
                                    title='LOGIN'
                                    buttonColor='#039BE5'
                                />
                            </View>
                        </View>
                    )
                    }
                </Formik>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    image:{
      marginBottom: 50
    },
    container: {
        flex: 1,
        paddingHorizontal: 10,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#eceaea"
    },
    input: {
        width: "100%",
        fontSize: 26,
        marginBottom: 20,
        marginHorizontal: 20,
        borderRadius: 10
    }
})
export default Login