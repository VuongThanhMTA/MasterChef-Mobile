import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { connect } from 'react-redux';
import store, { RouterWithState, runEpics } from '@gl/store';
import AppContainer from '@gl/screen/Main';

import EStyleSheet from 'react-native-extended-stylesheet';
EStyleSheet.build({});

export default class App extends Component {

  componentDidMount() {
    runEpics();
  }

  render() {
    return (
      <Provider store={store}>
        <RouterWithState />
      </Provider>
    );
  }
}

