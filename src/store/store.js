import { applyMiddleware, combineReducers, createStore } from 'redux';
import { connect } from 'react-redux';
import {flatMapDeep} from 'lodash';
import {combineEpics, createEpicMiddleware} from 'redux-observable';
import {
  createReactNavigationReduxMiddleware,
  createReduxContainer
} from 'react-navigation-redux-helpers';
import Router from '../Router';
import reducers from './reducers';

const navMiddleware = createReactNavigationReduxMiddleware(
  state => state.nav
);

const epicMiddleware = createEpicMiddleware();
const middleWares = [navMiddleware, epicMiddleware];

if (__DEV__) {
  const { logger } = require(`redux-logger`);
  middleWares.push(logger);
}

const composeEnhancers =
  typeof window === 'object' &&
  (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && __DEV__) ?   
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) :
      (middleWares) => middleWares;

const enhancer = composeEnhancers (
  applyMiddleware(...middleWares),
);

const store = createStore(
  combineReducers(reducers),
  enhancer,
);

export const dispatch = store.dispatch;
export const getState = store.getState;
export const runEpics = () => {
  epicMiddleware.run((() => {
    const epics = require('./epics').default;
    const epicList = flatMapDeep(Object.values(epics), epic => Object.values(epic));
    return combineEpics(...epicList);
  })());
};

const App = createReduxContainer(Router);

const mapStateToProps = (state) => ({
  state: state.nav,
});

export const RouterWithState = connect(mapStateToProps)(App);

export default store;