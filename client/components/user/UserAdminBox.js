import React, {Component} from "react"
import {Text, StyleSheet, View, Image, TouchableOpacity, FlatList, ScrollView} from 'react-native';
import userImage from "../../assets/user.png";
import IconLabel from "../default-elements/IconLabel";
import user from "../../assets/user.png";
import Helpers from "../../helpers/Helpers";
import {color} from "react-native-reanimated";
import SubmitButton from "../form-elements/SubmitButton";
import NavigateButton from "../default-elements/NavigateButton";
import {fetchDeleteUserAdmin, fetchEditUserAdmin} from "../../store/dispatchers/users.dispatcher";
import {connect} from "react-redux";

class UserAdminBox extends Component {

    constructor(props) {
        super(props);
    }

    formUser() {
        let {data, navigation} = this.props;
        navigation.navigate('EditAdminUser', {
                data: data,
                navigation: navigation
            }
        );
    }


    render() {
        let {data, navigation} = this.props
        return (
            <View>
                <View style={styles.container}>
                    <IconLabel source={user} label={`${data.lastname} ${data.firstname}`}/>
                    <View style={styles.buttons}>
                    <NavigateButton title={"Modifier L'utilisateur"} onPress={() => this.formUser()}/>
                    <SubmitButton title={"Bannir à vie"} onPress={() => this.props.deleteProfileAdmin(data.id)}/>
                    </View>
                </View>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        margin: 10,
        padding: 5,
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        flexDirection: "column",
        textAlign: "center",
        justifyContent: "center"
    },
    buttons:{
        paddingVertical: 5
    }
})

//envoi le dispatch au, dispatcher
const mapDispatchToProps = dispatch => {
    return {
        deleteProfileAdmin: async (id) => {
            await dispatch(fetchDeleteUserAdmin(id))
        }
    }
}

//abonnement objet user
const mapStateToProps = state => ({
    users: state.login.users
})

export default connect(mapStateToProps, mapDispatchToProps)(UserAdminBox)