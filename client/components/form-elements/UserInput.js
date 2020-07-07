import React, {Component} from 'react'
import {StyleSheet, View, Image, TextInput, Text} from 'react-native'

class UserInput extends Component {

    render() {
        let {errors, source, name, secureTextEntry, autoCorrect, autoCapitalize, onChangeText, returnKeyType, placeholder, defaultValue, keyboardType, multiline} = this.props
        return (
            <View style={styles.container}>
                <View style={styles.inputWrapper}>
                    <Image source={source} style={styles.image}/>
                    <TextInput style={[styles.input, multiline && styles.textarea]}
                               name={name}
                               type={"datetime"}
                               defaultValue={defaultValue}
                               secureTextEntry={secureTextEntry}
                               keyboardType={keyboardType}
                               multiline={multiline}
                               autoCorrect={autoCorrect}
                               autoCapitalize={autoCapitalize}
                               onChangeText={onChangeText}
                               returnKeyType={returnKeyType}
                               placeholder={placeholder}
                               placeholderTextColor="#902929"
                               underlineColorAndroid="transparent">
                    </TextInput>
                </View>

                {errors && <Text style={styles.errors}>{this.props.errors}</Text>}

            </View>
        )
    }
}

export default UserInput

const styles = StyleSheet.create({
    input: {
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
        height: 40,
        flex: 1,
        marginHorizontal: 20,
        paddingLeft: 45,
        borderRadius: 20,
        color: '#902929',
    },
    inputWrapper: {
        flexDirection: "row",
        justifyContent: "center",
        marginVertical: 7
    },
    image: {
        position: 'absolute',
        zIndex: 99,
        width: 22,
        height: 22,
        left: 35,
        top: 9,
    },
    errors: {
        marginVertical: 5,
        marginHorizontal: 30,
        color: 'red'
    },
    textarea: {
        height: 85
    }
});

