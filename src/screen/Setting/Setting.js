import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import styles from './Setting.style';
import { connect } from 'react-redux'
import { global_NAVIGATE_TO_ROUTE } from '@gl/store/global/action';
import { global_GO_BACK } from '@gl/store/global/action';


class Setting extends Component {
  state = {}
  render() {
    return (
      <View style={styles.container}>

        <Text style={styles.title}>Setting</Text>
        <TouchableOpacity onPress={this._onBack.bind(this)}>
          <Text style={styles.title}>Back</Text>
        </TouchableOpacity>
      </View>
    );
  }
  _onBack = () => {
    this.props._onBack();
  }
}

const goBack = dispatch => () => dispatch(global_GO_BACK());

const mapStateToProps = state => ({

});

const mapDispatchToProps = (dispatch, ownProps) => ({
  _onBack: ownProps.onBack || goBack(dispatch),
  _navigate: (route, params = {}, options = {}) => dispatch(global_NAVIGATE_TO_ROUTE(route, params, options))
});

export default connect(mapStateToProps, mapDispatchToProps)(Setting);