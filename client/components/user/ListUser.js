import React, {Component} from "react"
import {Text, StyleSheet, View, Image, TouchableOpacity, FlatList, ScrollView} from 'react-native';
import {fetchRaces} from "../../store/dispatchers/races.dispatcher";
import {connect} from "react-redux";
import {fetchAllUsers} from "../../actions/users.actions";
import {getAllUsers} from "../../store/dispatchers/users.dispatcher";
import RaceItem from "../race/RaceItem";
import UserAdminBox from "./UserAdminBox";
import NavigateButton from "../default-elements/NavigateButton";
import Title from "../default-elements/Title";

class ListUser extends Component {

    constructor(props) {
        super(props);
    }

    async componentDidMount() {
        await this.props.getUsers()
    }

    render() {
        let {users, navigation} = this.props;
        return (
            <ScrollView style={styles.container}>
                <Title title={"Administrer les utilisateurs"}/>
                <FlatList
                    data={users} backgroundColor={"#FFF"}
                    keyExtractor={item => item.id}
                    renderItem={({item}) =>
                        <UserAdminBox navigation={navigation}
                                  data={item}/>}/>
            </ScrollView>
        )
    }

}

const styles = StyleSheet.create({
    container:{
        marginTop:25,
        flex: 1,
        flexDirection: "row",
}
})

const mapDispatchToProps = dispatch => {
    return {
        getUsers: () => {
            dispatch(getAllUsers())
        }
    }
}

const mapStateToProps = state => ({
    users: state.login.users
})

export default connect(mapStateToProps, mapDispatchToProps)(ListUser)
