import React from 'react';
import {View, Text, Button} from 'react-native';
import {auth} from '../../config/firebase';

export default function Profile() {

    const onSignOut = () => {
        auth.signOut();
    }

    return (
        <View style={{flex: 1, justifyContent: 'center'}}>
            <Text>Profile</Text>
            <Button 
                title="Sign Out"
                onPress={() => onSignOut()}
            />
        </View>
    )
}
