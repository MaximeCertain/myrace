import React, {Component} from 'react'
import {View, Text, FlatList, ScrollView, StyleSheet, Image, Button} from 'react-native'
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
import {fetchFormRaces, fetchManageRaceValidity} from "../../store/dispatchers/races.dispatcher";
import {connect} from "react-redux";
import RaceValidationSchema from "../../forms/validators/race.validation.validator";
import InputCheckbox from "../form-elements/InputCheckbox";

class ManageRaceValidity extends Component {
    constructor(props) {
        super(props);
        this.state = {
            race: this.props.race
        }
    }

  async  submit(values) {
        let race = this.state.race;
        race.reasonAdmin = values.reasonAdmin;
        ///Updating nested arrays : https://stackoverflow.com/questions/43638938/updating-an-object-with-setstate-in-react
      await this.props.updateRace(race)
    }

    render() {
        let {race} = this.state;
        console.log(race)

        return (
            <View style={styles.container}>
                <Text style={styles.titleForm}>Légalité de la course</Text>
                <Formik
                    initialValues={{
                        reasonAdmin: race.reasonAdmin
                    }}
                    onSubmit={values => this.submit(values)}
                    validationSchema={RaceValidationSchema}>
                    {({handleChange, values, handleSubmit, errors}) => (
                        <View>
                            <InputCheckbox value={race.validatedAdmin} name={"validatedAdmin"}
                                           errors={errors.validatedAdmin} label={"Refuser l'organisation de la course"}
                                           onChangeText={handleChange('validatedAdmin')}
                                           onValueChange={() =>
                                               this.setState(prevState => ({
                                                   race: {
                                                       ...prevState.race,
                                                       validatedAdmin: !this.state.race.validatedAdmin
                                                   }
                                               }))
                                           }/>
                            <UserInput errors={errors.reasonAdmin} name={"reasonAdmin"}
                                       defaultValue={values.reasonAdmin}
                                       value={values.reasonAdmin} placeholder={'Raison du refus ?'}
                                       onChangeText={handleChange('reasonAdmin')}/>
                            <SubmitButton title={"Enregistrer"} onPress={handleSubmit}/>
                        </View>
                    )
                    }
                </Formik>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        margin: 20,
        flexDirection: "column"
    },
    titleForm:{
        fontSize:22,
        fontWeight: "bold",
        marginBottom:10
    }
});

const mapDispatchToProps = dispatch => {
    return {
        updateRace: (body) => {
            dispatch(fetchManageRaceValidity(body))
        }
    }
}

const mapStateToProps = state => ({
    error: state.race.error,
    loading: state.race.loading,
    races: state.race.races
})


export default connect(null, mapDispatchToProps)(ManageRaceValidity)
