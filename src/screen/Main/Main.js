import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

import HomeScreen from "@gl/screen/Home";
import CookingScreen from '@gl/screen/Cooking';
import SearchScreen from '@gl/screen/Search';
import ProfileScreen from '@gl/screen/Profile';



export default Tab = createBottomTabNavigator({
    HomeScreen: {
        screen: HomeScreen
    },
    CookingScreen: {
        screen: CookingScreen
    },
    SearchScreen: {
        screen: SearchScreen
    },
    ProfileScreen: {
        screen: ProfileScreen
    },
}, {
        initialRouteName: 'HomeScreen',
        tabBarPosition: 'bottom'
    });

// export default createAppContainer(Tab);
