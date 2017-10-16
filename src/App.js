import React, { Component } from 'react';

import qs from 'query-string'

import './App.css';

import ControlWidgetContainer from './containers/ControlWidgetContainer.js'
import ControlWidgetMiniContainer from './containers/ControlWidgetMiniContainer.js'
import ViewPortContainer from './containers/ViewPortContainer.js'
import LoadingPageContainer from './containers/LoadingPageContainer.js'

import DisplayModeEnum from './enums/DisplayMode.js'

class App extends Component {

  constructor(props) {
    super(props);
    this.onHashChange = this.onHashChange.bind(this);
  }

  componentDidMount() {
    window.addEventListener('hashchange', this.onHashChange);
    let searchParams = qs.parse(window.location.search);
    if (searchParams.configUrl) {
      this.props.loadConfig(searchParams.configUrl);

      // FIXME check search parameter controlCenter. If so, do nothing and wait for the message with the state to load in redux

    } else {
      this.props.setConfigError('Error in URL: configUrl search parameter is required.');
    }

  }

  render() {



    if (this.props.configLoaded === false) {
      return <LoadingPageContainer />
    }

    if (this.props.displayMode === DisplayModeEnum.CONTROL_PAGE) {
      return <div className="App" data-displayMode="CONTROL_WIDGET">
        <ControlWidgetContainer />
      </div>;
    }

    return (
      <div className="App" data-displayMode={this.props.displayMode}>
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
