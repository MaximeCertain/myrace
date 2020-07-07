import React, {Component} from 'react'
import {View, Text, FlatList, ScrollView, StyleSheet, TouchableHighlight} from "react-native"
import {Formik} from "formik";
import RaceSchema from "../../forms/validators/race.validator";
import UserInput from "../form-elements/UserInput";
import name from "../../assets/name.png";
import start from "../../assets/start.png";
import finish from "../../assets/finish.png";
import kilometers from "../../assets/kilometers.png";
import elevation from "../../assets/mountain.png";
import participation from "../../assets/participation.png";
import DatePickerField from "../form-elements/DatePickerField";
import date from "../../assets/calendar.png";
import SubmitButton from "../form-elements/SubmitButton";
import RaceFilterSchema from "../../forms/validators/race.filter.validator";

class FilterRace extends Component {

    constructor(props) {
        super(props);
        this.state = {
            races: [],
            filtering: false
        }
    }

    render() {
        return (
        <View style={styles.container}>
            <Formik
                initialValues={{
                    kilometers: '',
                    elevation: '',
                    name: '',
                    max_participants: 1
                }} validationSchema={RaceFilterSchema}
                onSubmit={values => this.props.launchFilter(values)}>
                {({handleChange, values, handleSubmit, errors}) => (
                    <View>
                        <UserInput errors={errors.name} source={name} name={"name"} value={values.name}
                                   placeholder={'Nom de la course'} onChangeText={handleChange('name')}/>
                        <UserInput errors={errors.kilometers} source={kilometers} name={"kilometers"}
                                   value={values.kilometers} placeholder={'Nombre de kilomètres'}
                                   onChangeText={handleChange('kilometers')}/>
                        <UserInput errors={errors.elevation} source={elevation} name={"elevation"}
                                   value={values.elevation} placeholder={'Denivelé positif'}
                                   onChangeText={handleChange('elevation')}/>
                        <UserInput errors={errors.max_participants} source={participation} name={"max_participants"}
                                   value={values.max_participants} placeholder={'Nombre max de participants'}
                                   onChangeText={handleChange('max_participants')}/>
                        <SubmitButton title={"Rechercher"} onPress={handleSubmit}/>
                    </View>
                )
                }
            </Formik>
        </View>
        )
    }
}

const styles = StyleSheet.create({
        container:{
            flex: 1,
            flexDirection: "column",
            textAlign: "center",
            justifyContent: "center"
        }
    })

export default FilterRace