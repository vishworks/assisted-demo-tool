import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, compose, applyMiddleware } from 'redux'

import 'font-awesome/css/font-awesome.min.css'
import './index.css';

import AppContainer from './containers/AppContainer';
import rootReducer from './reducers'
import thunk from 'redux-thunk'
import registerServiceWorker from './registerServiceWorker';


import ControlPageMiddleware from './middlewares/ControlPageMiddleware.js'



let store = createStore(
    rootReducer,
    // preloadedState,
    compose(
      applyMiddleware(ControlPageMiddleware, thunk)
   //    ,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
