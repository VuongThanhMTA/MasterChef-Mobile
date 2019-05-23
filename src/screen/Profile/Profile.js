import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from './Profile.style';

export default class Profile extends Component {
    state = {}
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Profile</Text>
            </View>
        );
    }
}
