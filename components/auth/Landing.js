import React from 'react';
import {Text, View, Button} from 'react-native';

export default function Landing({navigation}) {
    return (
        <View style={{flex: 1, justifyContent: 'center'}}>
            <Text></Text>
            <Button 
                title="Sign up"
                onPress={() => navigation.navigate("Register")}
            />
            <Button 
                title="Sign In"
                onPress={() => navigation.navigate("Login")}
            />
        </View>
    )
}
