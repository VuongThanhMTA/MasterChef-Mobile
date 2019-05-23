import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from './Cooking.style';

export default class Cooking extends Component {
    state = {}
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Cooking</Text>
            </View>
        );
    }
}
