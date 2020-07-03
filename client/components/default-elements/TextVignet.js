import React, {Component} from "react"
import {Text, ScrollView, StyleSheet, View, Image, TouchableOpacity, ImageBackground} from 'react-native';
import defaultRace from "../../assets/default_race.jpg";
import Title from "../default-elements/Title";

class TextVignet extends Component {

    render() {
        let {label, detail} = this.props
        return(
                <View style={styles.infosBloc}>
                    <Text style={styles.infosLabel}>
                        {label}
                    </Text>
                    <Text style={styles.infosDetail}>
                        {detail}
                    </Text>
                </View>
        )
    }

}

const styles = StyleSheet.create({
    image:{
        borderTopStartRadius: 20,
        borderTopEndRadius: 20,
        borderRadius: 20,
        height: 220,
        width: "100%"
    },
    infosContainer:{
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 25
    },
    infosDetail:{
        fontWeight: "bold",
        fontSize: 22
    },
    infosLabel:{

    },
    infosBloc:{
        textAlign: "center"
    }
})


export default TextVignet