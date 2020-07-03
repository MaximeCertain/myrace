import React, {Component} from 'react'
import {View, Text, FlatList, ScrollView, StyleSheet, Image} from 'react-native'
import Title from "../components/default-elements/Title";
import {Formik} from "formik";
import {connect} from "react-redux";
import UserInput from "../components/form-elements/UserInput";
import mailLogo from "../assets/mail.png";
import name from "../assets/name.png";
import description from "../assets/description.png";
import age from "../assets/age.png";
import userImage from "../assets/user.png";
import SubmitButton from "../components/form-elements/SubmitButton";
import NavigateButton from "../components/default-elements/NavigateButton";
import ProfileSchema from "../forms/validators/profile.validator";
import {fetchRaces} from "../store/dispatchers/races.dispatcher";
import {fetchEditUser} from "../store/dispatchers/users.dispatcher";


class Profile extends Component {
//1 dispatcher update ac fonction api
    //2  les  3 actions
    //3 redducer


    render() {
    let {user} = this.props
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Image source={userImage} style={styles.image} />
                    <Title title={"Modifier mon profil"}/>
                </View>
                <Formik
                    initialValues={user}
                    onSubmit={values => this.props.updateProfile(values)}
                    validationSchema={ProfileSchema}>
                    {({handleChange, values, handleSubmit, errors}) => (
                        <View>
                            <UserInput errors={errors.email} source={mailLogo} name={"email"} value={values.email} defaultValue={user.email}
                                       placeholder={'Adresse email'} onChangeText={handleChange('email')}/>
                            <UserInput errors={errors.lastname} source={name} name={"lastname"} value={values.lastname} defaultValue={user.lastname}
                                       placeholder={'Nom'} onChangeText={handleChange('lastname')}/>
                            <UserInput errors={errors.firstname} source={name} name={"firstname"} value={values.firstname} defaultValue={user.firstname}
                                       placeholder={'Prénom'} onChangeText={handleChange('firstname')}/>
                            <UserInput errors={errors.age} source={age} name={"age"} value={values.age} keyboardType={"numeric"} defaultValue={user.age}
                                       placeholder={'Age'} onChangeText={handleChange('age')}/>
                            <UserInput errors={errors.description} source={description} name={"description"} value={values.email} multiline={true} defaultValue={user.description}
                                       placeholder={'Description'} onChangeText={handleChange('description')}/>
                            <SubmitButton title={"Enregistrer"} onPress={handleSubmit}/>
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
    register: {
        marginVertical: 10
    },
    image:{

            height: 150,
        width: "100%"    }
})

//envoi le dispatch au, dispatcher
const mapDispatchToProps = dispatch => {
    return {
        updateProfile: (body) => {
            dispatch(fetchEditUser(body))
        }
    }
}

//abonnement objet user
const mapStateToProps = state => ({
    user: state.login.user
})

export default connect(mapStateToProps, mapDispatchToProps)(Profile)