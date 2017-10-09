import React, { Component } from 'react';
import './App.css';

import ControlWidgetContainer from './containers/ControlWidgetContainer.js'
import MiniControlWidgetContainer from './containers/MiniControlWidgetContainer.js'
import ViewPortContainer from './containers/ViewPortContainer.js'

import LoadingPage from './components/LoadingPage.js'

class App extends Component {

  componentDidMount() {
    this.props.loadConfig();
  }

  render() {

    if (this.props.configLoaded === false) {
      return <LoadingPage />
    }

    return (
      <div className="App">
        <ViewPortContainer />
        <ControlWidgetContainer />
        <MiniControlWidgetContainer />
      </div>
    );

  }
}

export default App;
