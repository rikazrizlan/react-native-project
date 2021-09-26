import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LandingScreen from './components/auth/Landing';
import RegisterScreen from './components/auth/Register';
import LoginScreen from './components/auth/Login';
import {View, Text, Button} from 'react-native';
import {auth} from './config/firebase';
import MainScreen from './components/Main';
import AddPostScreen from './components/main/AddPost';

// to connect redux and react native
import { Provider } from 'react-redux';
import { createStore, applyMiddleware} from 'redux';
import rootReducer from './redux/reducers';
import thunk from 'redux-thunk';

const store = createStore(rootReducer, applyMiddleware(thunk));

const Stack = createStackNavigator();

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false
    }
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
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Main">
            <Stack.Screen name="Main" component={MainScreen} options={{headerShown: false}} />
            <Stack.Screen name="AddPost" component={AddPostScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    )
  }
}

export default App