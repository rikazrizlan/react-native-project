import React, { Component } from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import {fetchUser} from '../redux/actions';
import FeedScreen from './main/Feed';
import ProfileScreen from './main/Profile';

const Tab = createMaterialBottomTabNavigator();

const EmptyScreen = () => {
    return (null);
}

export class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
        this.props.fetchUser();
    }

    render() {
        return (
            <Tab.Navigator initialRouteName="Feed" labeled={false}>
                <Tab.Screen name="Feed" component={FeedScreen} 
                    options={{
                        tabBarIcon: ({color, size}) => (
                            <MaterialCommunityIcons name="home" color={color} size={26} />
                        )
                    }}
                />
                <Tab.Screen name="AddPostContainer" component={EmptyScreen} 
                    listeners={({navigation}) => ({
                        tabPress: event => {
                            event.preventDefault();
                            navigation.navigate("AddPost")
                        }
                    })}
                    options={{
                        tabBarIcon: ({color, size}) => (
                            <MaterialCommunityIcons name="plus-box" color={color} size={26} />
                        )
                    }}
                />
                <Tab.Screen name="Profile" component={ProfileScreen} 
                    options={{
                        tabBarIcon: ({color, size}) => (
                            <MaterialCommunityIcons name="account-circle" color={color} size={26} />
                        )
                    }}
                />
            </Tab.Navigator>
        )
    }
}

//to access the redux store
const mapStateToProps = (store) => ({
    currentUser: store.userState.currentUser
})
//to bind the actions to this component
const mapDispatchProps = (dispacth) => bindActionCreators({fetchUser}, dispacth);

export default connect(mapStateToProps, mapDispatchProps)(Main);
