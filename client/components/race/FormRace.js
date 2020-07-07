import React, {Component, useState} from 'react'
import {View, Text, FlatList, ScrollView, StyleSheet, Image, Button, TouchableOpacity} from 'react-native'
import {Formik} from "formik";
import UserInput from "../form-elements/UserInput";
import name from "../../assets/name.png";
import date from "../../assets/calendar.png";
import start from "../../assets/start.png";
import elevation from "../../assets/mountain.png";
import finish from "../../assets/finish.png";
import kilometers from "../../assets/kilometers.png";
import participation from "../../assets/participation.png";
import SubmitButton from "../form-elements/SubmitButton";
import RaceSchema from "../../forms/validators/race.validator";
import DatePickerField from "../form-elements/DatePickerField";
import {fetchFormRaces} from "../../store/dispatchers/races.dispatcher";
import {connect} from "react-redux";
import DateTimePicker from "react-native-modal-datetime-picker";
class FormRace extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isDatePickerVisible: false,
            pickedDate: ""
        };    }

    async submit(values) {
        console.log(this.state.pickedDate)
         values.date = this.state.pickedDate;
        await this.props.formRace(values)
        await this.props.navigation.navigate("Home")
    }

    //Date Picker handling methods
    hideDatePicker = () => {
        this.setState({ isDatePickerVisible: false });
    };

    handleDatePicked = date => {
        const mdate = date.toString().split(" ");
        this.setState({
            pickedDate: mdate[1] + " " + mdate[2] + ", " + mdate[3]
        });
        this.hideDatePicker();
        console.log(this.state.pickedDate);
    };

    showDatePicker = () => {
        this.setState({isDatePickerVisible: true})
        this.setState({ isDatePickerVisible: true });
    };
    render() {
        return (
            <View>
                <Formik
                    initialValues={{
                        name: '',
                        start: '',
                        finish: '',
                        kilometers: 1,
                        elevation: 0,
                        max_participants: 0,
                        description: '',
                        date: ''
                    }}
                    onSubmit={values => this.submit(values)}
                    validationSchema={RaceSchema}>
                    {({handleChange, values, handleSubmit, errors}) => (
                        <View>
                            <UserInput errors={errors.name} source={name} name={"name"} value={values.name}
                                       placeholder={'Nom de la course'} onChangeText={handleChange('name')}/>
                            <UserInput errors={errors.start} source={start} name={"start"}
                                       value={values.start} placeholder={'Adresse de départ'}
                                       onChangeText={handleChange('start')}/>
                            <UserInput errors={errors.finish} source={finish} name={"finish"}
                                       value={values.finish} placeholder={'Adresse d\'arrivée'}
                                       onChangeText={handleChange('finish')}/>
                            <UserInput errors={errors.kilometers} source={kilometers} name={"kilometers"}
                                       value={values.kilometers} placeholder={'Nombre de kilomètres'}
                                       onChangeText={handleChange('kilometers')}/>
                            <UserInput errors={errors.elevation} source={elevation} name={"elevation"}
                                       value={values.elevation} placeholder={'Denivelé positif'}
                                       onChangeText={handleChange('elevation')}/>
                            <UserInput errors={errors.max_participants} source={participation} name={"max_participants"}
                                       value={values.max_participants} placeholder={'Nombre max de participants'}
                                       onChangeText={handleChange('max_participants')}/>

                            <TouchableOpacity onPress={this.showDatePicker} style={styles.buttonDate}  >
                                <Text >{`Séléctionner la date de la course ( ${this.state.pickedDate} )`}</Text>
                            </TouchableOpacity>

                            <DateTimePicker
                                format='dd-MM-yyyy HH:mm'
                                mode="datetime"
                                isVisible={this.state.isDatePickerVisible}
                                onConfirm={this.handleDatePicked}
                                onCancel={this.hideDatePicker}
                            />

                            <UserInput errors={errors.date} source={date} name={"date"}
                                       value={values.date} placeholder={'Date de la course'}
                                       onCLi
                                       onChangeText={handleChange('name')}/>
                            <SubmitButton title={"Enregistrer"} onPress={handleSubmit}/>
                        </View>
                    )
                    }
                </Formik>
            </View>
        )
    }

}

const styles=({
    buttonDate:{
        margin:12,
        alignItems: "center",
        color:"white",
        backgroundColor: "#db4444",
        padding: 10
    }
})


const mapDispatchToProps = dispatch => {
    return {
        formRace: (body) => {
            dispatch(fetchFormRaces(body))
        }
    }
}

const mapStateToProps = state => ({
    error: state.race.error,
    loading: state.race.loading,
    races: state.race.races
})


export default connect(mapStateToProps, mapDispatchToProps)(FormRace)
