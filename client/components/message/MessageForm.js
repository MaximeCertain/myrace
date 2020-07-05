import React, {Component} from 'react'
import {View, Text, FlatList, ScrollView, StyleSheet} from 'react-native'
import user from "../../assets/user.png";
import TextVignet from "../default-elements/TextVignet";
import IconLabel from "../default-elements/IconLabel";
import LoginSchema from "../../forms/validators/login.validator";
import UserInput from "../form-elements/UserInput";
import mailLogo from "../../assets/mail.png";
import passwordLogo from "../../assets/password.png";
import SubmitButton from "../form-elements/SubmitButton";
import {Formik} from "formik";
import MessageSchema from "../../forms/validators/message.validator";
import {fetchSendMessage} from "../../store/dispatchers/messages.dispatcher";
import {connect} from "react-redux";

class MessageForm extends Component {
    constructor(props) {
        super(props);
    }

    async send(values) {
        await this.props.sendMessage(values, this.props.raceId, this.props.type)

    }

    render() {
        console.log(this.props)
        return (
            <Formik
                initialValues={{description: ''}}
                onSubmit={values => this.send(values)}
                validationSchema={MessageSchema}>
                {({handleChange, values, handleSubmit, errors}) => (
                    <View>
                        <UserInput errors={errors.description} source={mailLogo} name={"description"}
                                   value={values.description} multiline={true}
                                   placeholder={'Contenu du Message'} onChangeText={handleChange('description')}/>
                        <SubmitButton title={"Envoyer"} onPress={handleSubmit}/>
                    </View>
                )
                }
            </Formik>
        )

    }
}

const mapDispatchToProps = dispatch => {
    return {
        sendMessage: (body, raceId, type) => {
            dispatch(fetchSendMessage(body, raceId, type))
        }
    }
}

const mapStateToProps = state => ({
    error: state.race.error,
    loading: state.race.loading
})

export default connect(mapStateToProps, mapDispatchToProps)(MessageForm)

