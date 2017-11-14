import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, compose, applyMiddleware } from 'redux'

import 'font-awesome/css/font-awesome.min.css'
import './index.css';

import AppContainer from 'ui/app/containers/AppContainer';
import rootReducer from 'state/rootReducer.js'
import thunk from 'redux-thunk'
import registerServiceWorker from './registerServiceWorker';


import ControlPageMiddleware from './middlewares/ControlPageMiddleware.js'
import UrlHashMiddleware from './middlewares/UrlHashMiddleware.js'


let store = createStore(
    rootReducer,
    // preloadedState,
    compose(
      applyMiddleware(thunk, ControlPageMiddleware, UrlHashMiddleware)
       ,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();


// TODO refactor CSS: do not use component class names in other files (e.g. .Popup in ControlWidget.css). Inject custom classes to control children styles
// TODO switch to SASS
