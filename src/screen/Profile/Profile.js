import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux'
import { global_NAVIGATE_TO_ROUTE } from '@gl/store/global/action';
import styles from './Profile.style';

class Profile extends Component {
  state = {}
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Profile</Text>
        <TouchableOpacity onPress={this._onPressSetting.bind(this)}>
          <Text style={styles.title}>Setting</Text>
        </TouchableOpacity>
      </View>
    );
  }

  _onPressSetting=()=>{
    this.props._navigate(['SettingScreen']);
  }

}

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
  _navigate: (route, params = {}, options = {}) => dispatch(global_NAVIGATE_TO_ROUTE(route, params, options))
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);