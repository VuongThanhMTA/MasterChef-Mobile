import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from './Search.style';

export default class Search extends Component {
    state = {}
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Search</Text>
            </View>
        );
    }
}
