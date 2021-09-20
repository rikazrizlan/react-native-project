import React, { Component } from 'react';
import {View, Text, Button} from 'react-native';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import {fetchUser} from '../redux/actions';

export class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {}
        this.onSignOut = this.onSignOut.bind(this);
    }

    componentDidMount() {
        
    }

    onSignOut() {
        auth.signOut();
    }

    render() {
        return (
            <View style={{flex: 1, justifyContent: 'center'}}>
                <Text>User is logged In</Text>
                <Button 
                    title="Sign Out"
                    onPress={() => this.onSignOut()}
                />
            </View>
        )
    }
}

export default Main
