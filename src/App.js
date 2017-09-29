import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import ControlWidgetContainer from './containers/ControlWidgetContainer.js'
import MiniControlWidgetContainer from './containers/MiniControlWidgetContainer.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="view-port">
          <iframe className="view-frame current" src="http://example.com" />
        </div>
        <ControlWidgetContainer />
        <MiniControlWidgetContainer />
      </div>
    );
  }
}

export default App;
