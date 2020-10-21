import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

import Profile from '../pages/Profile';
import Search from '../pages/Search';
import Feed from '../pages/Feed';

const { Navigator, Screen } = createBottomTabNavigator();


function TabsRoute() {
    return (
        <Navigator
            tabBarOptions={{
                style:{
                    elevation: 0,
                    shadowOpacity: 0,                 
                },
                tabStyle: {
                    alignItems: 'center',
                    justifyContent: 'center',
                },
                iconStyle: {
                    flex: 1,
                },
                showLabel: false,
            }}
        >
            <Screen 
                name='Feed' 
                component={ Feed }
                options={{
                    tabBarIcon: ({focused}) => {
                        return focused? 
                            (<AntDesign name="home" size={25} color='#ffe600' />)
                        :
                            (<AntDesign name="home" size={25} color='#808080' />)
                    }
                }}
            />
            <Screen 
                name='Profile' 
                component={ Profile }
                options={{
                    tabBarIcon: ({focused}) => {
                        return focused?
                            (<AntDesign name="search1" size={25} color="#ffe600" />)
                        :
                            (<AntDesign name="search1" size={25} color="#c0c0c0" />)
                    }
                }}
            />
            <Screen 
                name='Search' 
                component={ Search }
                options={{
                    tabBarIcon: ({focused}) => {
                        return focused?
                            (<MaterialIcons name="person-outline" size={30} color="#ffe600" />)
                        :
                            (<MaterialIcons name="person-outline" size={30} color="#c0c0c0" />)
                    }
                }}
            />            
        </Navigator>
    )
}

export default TabsRoute;