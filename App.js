import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LandingScreen from './components/auth/Landing';
import RegisterScreen from './components/auth/Register';
import LoginScreen from './components/auth/Login';
import {View, Text, Button} from 'react-native';
import {auth} from './config/firebase';

const Stack = createStackNavigator();

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false
    }
    this.onSignOut = this.onSignOut.bind(this);
  }

  componentDidMount() {
    auth.onAuthStateChanged((user) => {
      if(!user) {
        this.setState({
          loggedIn : false,
          loaded : true
        })
      } else {
        this.setState({
          loggedIn : true,
          loaded : true
        })
      }
    })
  }

  onSignOut() {
    auth.signOut();
  }

  render() {
    const {loggedIn, loaded} = this.state;
    if(!loaded) {
      return (
        <View style={{flex: 1, justifyContent: 'center'}}>
          <Text>Loading...</Text>
        </View>
      )
    }

    if(!loggedIn) {
      return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Landing">
            <Stack.Screen name="Landing" component={LandingScreen} options={{headerShown: false}} />
            <Stack.Screen name="Register" component={RegisterScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      );
    }
   
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

export default App