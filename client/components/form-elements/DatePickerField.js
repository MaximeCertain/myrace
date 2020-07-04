import React, {Component} from "react";
import { useField, useFormikContext } from "formik";
import DatePicker from "react-native-datepicker";

class DatePickerField extends Component{
    render(){
        return (
            <DatePicker
                style={{width: 200}}
                date={null}
                mode="date"
                placeholder="select date"
                format="YYYY-MM-DD"
                minDate="2016-05-01"
                maxDate="2016-06-01"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                customStyles={{
                    dateIcon: {
                        position: 'absolute',
                        left: 0,
                        top: 4,
                        marginLeft: 0
                    },
                    dateInput: {
                        marginLeft: 36
                    }
                    // ... You can check the source to find the other keys.
                }}
             //   onDateChange={(date) => {this.setState({date: date})}}
            />
        )
    }
} /*= ({ ...props }) => {
    const { setFieldValue } = useFormikContext();
    const [field] = useField(props);
    return (
        <DatePicker
            {...field}
            {...props}
            selected={(field.value && new Date(field.value)) || null}
            onChange={val => {
                setFieldValue(field.name, val);
            }}
        />
    );
};*/

export default DatePickerField