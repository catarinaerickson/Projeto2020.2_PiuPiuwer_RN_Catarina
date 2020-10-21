import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Inpiu from '../pages/Inpiu';
import TabsRoute from './TabsRoute';

const { Navigator, Screen } = createStackNavigator();

function FeedStack () {
    return (
        <Navigator screenOptions={{headerShown: false}}>
                <Screen name='Feed' component={TabsRoute}/>
                <Screen name='Inpiu' component={Inpiu}/>
        </Navigator>
    )
}

export default FeedStack;