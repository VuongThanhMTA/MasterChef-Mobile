import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from './Home.style';

export default class Home extends Component {
    state = {}
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Home</Text>
            </View>
        );
    }
}
