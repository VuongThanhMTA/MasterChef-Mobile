import { createStackNavigator, createAppContainer } from 'react-navigation';

import HomeScreen from "@gl/screen/Home";
import CookingScreen from '@gl/screen/Cooking';
import SearchScreen from '@gl/screen/Search';
import ProfileScreen from '@gl/screen/Profile';


export default createStackNavigator({
    HomeScreen,
    CookingScreen,
    SearchScreen,
    ProfileScreen
}, {
        headerMode: 'none',
        initialRouteName: 'HomeScreen',
    });
