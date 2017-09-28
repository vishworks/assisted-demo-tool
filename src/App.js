import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import ControlWidget from './components/ControlWidget.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="view-port">
          <iframe className="view-frame current" src="http://example.com" />
        </div>
        <ControlWidget />
      </div>
    );
  }
}

export default App;
