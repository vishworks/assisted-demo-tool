import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, compose, applyMiddleware } from 'redux'
import './index.css';
import AppContainer from './containers/AppContainer';
import rootReducer from './reducers'
import thunk from 'redux-thunk'
import registerServiceWorker from './registerServiceWorker';






let store = createStore(
    rootReducer,
    // preloadedState,
    compose(
      applyMiddleware(thunk)
      // ,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
