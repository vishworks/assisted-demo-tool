import React, { Component } from 'react';
import './App.css';

import ControlWidgetContainer from './containers/ControlWidgetContainer.js'
import MiniControlWidgetContainer from './containers/MiniControlWidgetContainer.js'
import ViewPortContainer from './containers/ViewPortContainer.js'
import LoadingPageContainer from './containers/LoadingPageContainer.js'

class App extends Component {

  constructor(props) {
    super(props);
    this.onHashChange = this.onHashChange.bind(this);
  }

  componentDidMount() {
    window.addEventListener('hashchange', this.onHashChange);
    this.props.loadConfig(window.location.hash);
  }

  render() {

    if (this.props.configLoaded === false) {
      return <LoadingPageContainer />
    }

    return (
      <div className="App">
        <ViewPortContainer />
        <ControlWidgetContainer />
        <MiniControlWidgetContainer />
      </div>
    );

  }

  onHashChange() {
    this.props.updateStateFromHash(window.location.hash);
  }
}

export default App;
