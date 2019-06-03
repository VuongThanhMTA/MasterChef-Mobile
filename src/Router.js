import { createStackNavigator } from 'react-navigation';
import { Easing, Animated, Platform } from 'react-native';

import SettingScreen from '@gl/screen/Setting';
import MainScreen from '@gl/screen/Main';

export default createStackNavigator({
    MainScreen,
    SettingScreen,
}, {
        headerMode: 'none',
        initialRouteName: 'MainScreen',
    });
