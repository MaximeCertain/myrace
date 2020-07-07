import React, {Component} from "react";
import {useField, useFormikContext} from "formik";
import DatePicker from "react-native-datepicker";
import DateTimePicker from '@react-native-community/datetimepicker';
import {Text, TouchableOpacity, View} from "react-native";

class DatePickerField extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isDatePickerVisible: false,
            pickedDate: ""
        };
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
                <TouchableOpacity onPress={this.showDatePicker}>
                    <Text>{"Séléctionner la date"}</Text>
                </TouchableOpacity>

                <DateTimePicker
                    mode="date"
                    value={this.state.pickedDate}
                    isVisible={this.state.isDatePickerVisible}
                    onConfirm={this.handleDatePicked}
                    onCancel={this.hideDatePicker}
                />
            </View>
        )
    }
}
export default DatePickerField