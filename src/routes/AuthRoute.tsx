import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../pages/Login';
import FeedStack from './FeedRoute';

const { Navigator, Screen } = createStackNavigator();

function AuthStack() {
    return (
            <Navigator screenOptions={{headerShown: false}}>
                <Screen name='Login' component={Login}/>
            </Navigator>
    )
}

export default AuthStack;