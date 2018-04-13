import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';

import 'font-awesome/css/font-awesome.min.css';
import './index.css';

import AppContainer from 'ui/app/containers/AppContainer';
import rootReducer from 'state/rootReducer.js';
import thunk from 'redux-thunk';
import registerServiceWorker from './registerServiceWorker';

import ControlPageMiddleware from './middlewares/ControlPageMiddleware.js';
import UrlHashMiddleware from './middlewares/UrlHashMiddleware.js';

// persistent state management
import { getPersistedState } from 'helpers/LocalStorageUtils.js';
import PersistStateSubscription from 'subscriptions/PersistStateSubscription.js';

// FIXME remove this when test-config is not needed
import { parse } from 'qs';
let obj = parse(
  window.location.search && window.location.search.replace('?', '')
);
if (!obj.configUrl) {
  window.location.search = 'configUrl=test-config/config_1.json';
}

let preloadedState = getPersistedState();

const enhancers = [
  applyMiddleware(thunk, ControlPageMiddleware, UrlHashMiddleware)
];
if (window.__REDUX_DEVTOOLS_EXTENSION__) {
  enhancers.push(window.__REDUX_DEVTOOLS_EXTENSION__());
}

let store = createStore(rootReducer, preloadedState, compose(...enhancers));

store.subscribe(PersistStateSubscription(store));

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();

// TODO refactor CSS: do not use component class names in other files (e.g. .Popup in ControlWidget.css). Inject custom classes to control children styles
// TODO switch to SASS
