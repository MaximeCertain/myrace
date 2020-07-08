import React, {Component} from 'react'
import {View, Text, FlatList, ScrollView, StyleSheet, Image} from 'react-native'
import {Formik} from "formik";
import {connect} from "react-redux";
import {NavigationActions, StackActions} from 'react-navigation';
import UserInput from "../form-elements/UserInput";
import SubmitButton from "../form-elements/SubmitButton";
import mailLogo from "../../assets/mail.png";
import name from "../../assets/name.png";
import description from "../../assets/description.png";
import age from "../../assets/age.png";
import userImage from "../../assets/user.png";
import Title from "../default-elements/Title";
import ProfileSchema from "../../forms/validators/profile.validator";
import {fetchEditUserAdmin} from "../../store/dispatchers/users.dispatcher";
import Icon from "react-native-vector-icons/FontAwesome";


class EditAdminUser extends Component {
    constructor(props) {
        super(props);

    }
   async update(values) {
       values.age = parseFloat(values.age)
       await this.props.updateProfileAdmin(values);
       this.props.navigation.navigate('ListUser');
    }

    render() {
        let user = this.props.navigation.state.params.data
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Icon name={"user-circle"}
                          color={"red"}
                          size={50}/>
                          <Title title={`Modification de ${user.lastname}`}/>
                </View>
                {user &&
                <Formik
                    initialValues={user}
                    onSubmit={values => this.update(values)}
                    validationSchema={ProfileSchema}>
                    {({handleChange, values, handleSubmit, errors}) => (
                        <View>
                            <UserInput errors={errors.email} source={mailLogo} name={"email"} value={values.email}
                                       defaultValue={user.email}
                                       placeholder={'Adresse email'} onChangeText={handleChange('email')}/>
                            <UserInput errors={errors.lastname} source={name} name={"lastname"} value={values.lastname}
                                       defaultValue={user.lastname}
                                       placeholder={'Nom'} onChangeText={handleChange('lastname')}/>
                            <UserInput errors={errors.firstname} source={name} name={"firstname"}
                                       value={values.firstname} defaultValue={user.firstname}
                                       placeholder={'Prénom'} onChangeText={handleChange('firstname')}/>
                            <UserInput errors={errors.age} source={age} name={"age"} value={values.age}
                                       keyboardType={"numeric"} defaultValue={String(user.age)}
                                       placeholder={'Age'} onChangeText={handleChange('age')}/>
                            <UserInput errors={errors.description} source={description} name={"description"}
                                       value={values.email} multiline={true} defaultValue={user.description}
                                       placeholder={'Description'} onChangeText={handleChange('description')}/>
                            <SubmitButton title={"Enregistrer"} onPress={handleSubmit}/>
                        </View>
                    )
                    }
                </Formik>}
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
    image: {
        height: 25,
        width: "100%"
    },
    logout: {
        textAlign: "right"
    }
})

//envoi le dispatch au, dispatcher
const mapDispatchToProps = dispatch => {
    return {
        updateProfileAdmin: async (body) => {
            await dispatch(fetchEditUserAdmin(body))
        }
    }
}

//abonnement objet user
const mapStateToProps = state => ({
    users: state.login.users
})

export default connect(mapStateToProps, mapDispatchToProps)(EditAdminUser)