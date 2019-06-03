import React, { Component } from 'react';
import {
    View,
    Text
} from 'react-native';
import { connect } from 'react-redux'
import { global_NAVIGATE_TO_ROUTE } from '@gl/store/global/action';
import styles from './Search.style';

class Search extends Component {
    state = {}
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Search</Text>
            </View>
        );
    }
}


const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
    _navigate: (route, params = {}, options = {}) => dispatch(global_NAVIGATE_TO_ROUTE(route, params, options))
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
