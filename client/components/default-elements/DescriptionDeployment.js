import React, {Component} from 'react'
import {StyleSheet, View, Image, TextInput, Text} from 'react-native'

class DescriptionDeployment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            short_description: null,
            description: null,
        }
    }

    componentDidMount() {
        let {description} = this.props;
        let short_description = description.replace(/(<([^>]+)>)/ig, '').substr(0, 300) + "...";
        description = description.replace(/(<([^>]+)>)/ig, '');
        this.setState({short_description, description});
    }

    openDescription() {
        this.setState({
            short_description: this.state.description
        })
    }

    render() {
        let  {short_description} = this.state
        return (<View>
                <Text onPress={() => this.openDescription()}>{short_description}</Text>
            </View>

        )
    }


}

export default DescriptionDeployment