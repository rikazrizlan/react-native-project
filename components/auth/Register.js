import React, { Component } from 'react';
import {View, Button, TextInput } from 'react-native';

export class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email : '',
            password : '',
            name : ''
        }
    }
    render() {
        return (
            <View>
                <TextInput 
                    placeholder="name"
                    onChangeText={() => this.setState({name})}
                />
            </View>
        )
    }
}

export default Register
