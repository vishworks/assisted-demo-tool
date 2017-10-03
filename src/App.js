import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import ControlWidgetContainer from './containers/ControlWidgetContainer.js'
import MiniControlWidgetContainer from './containers/MiniControlWidgetContainer.js'

class App extends Component {

  componentDidMount() {
    this.props.loadConfig();
  }

  render() {

    if (this.props.configLoaded === false) {
      return <div><h1>LOADING CONFIGURATION</h1></div>
    }

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
