import React, { Component } from 'react';

import qs from 'query-string'

import './App.css';

import ControlWidgetContainer from './containers/ControlWidgetContainer.js'
import ControlWidgetMiniContainer from './containers/ControlWidgetMiniContainer.js'
import ViewPortContainer from './containers/ViewPortContainer.js'
import LoadingPageContainer from './containers/LoadingPageContainer.js'

class App extends Component {

  constructor(props) {
    super(props);
    this.onHashChange = this.onHashChange.bind(this);
  }

  componentDidMount() {
    window.addEventListener('hashchange', this.onHashChange);
    let configUrl = qs.parse(window.location.search).configUrl;
    if (configUrl) {
      this.props.loadConfig(configUrl);
    } else {
      this.props.setConfigError('Error in URL: configUrl search parameter is required.');
    }
  }

  render() {

    if (this.props.configLoaded === false) {
      return <LoadingPageContainer />
    }

    return (
      <div className="App">
        <ViewPortContainer />
        <ControlWidgetContainer />
        <ControlWidgetMiniContainer />
      </div>
    );

  }

  onHashChange() {
    this.props.updateStateFromHash(window.location.hash);
  }
}

export default App;
