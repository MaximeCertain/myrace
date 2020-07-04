import React, {Component} from 'react'
import {View, Text, FlatList, ScrollView, StyleSheet, Image} from 'react-native'
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

class FormRace extends Component {
    constructor(props) {
        super(props);
    }

    async submit(values) {
        await this.props.formRace(values)
        await this.props.navigation.navigate("Home")
    }

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
                            <DatePickerField/>
                            <UserInput errors={errors.date} source={date} name={"date"}
                                       value={values.date} placeholder={'Date de la course'}
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
