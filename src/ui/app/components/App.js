import React, { Component } from 'react';

import qs from 'query-string'

import './App.css';

import ControlWidgetContainer from 'ui/control-widget/containers/ControlWidgetContainer.js'
import ControlWidgetMiniContainer from 'ui/control-widget-mini/containers/ControlWidgetMiniContainer.js'
import ControlPageContainer from 'ui/control-page/containers/ControlPageContainer.js'
import ViewPortContainer from 'ui/app/containers/ViewPortContainer.js'
import LoadingPageContainer from 'ui/app/containers/LoadingPageContainer.js'

import DisplayModeEnum from 'enums/DisplayMode.js'

class App extends Component {

  componentDidMount() {

    let searchParams = qs.parse(window.location.search);
    if (searchParams.configUrl) {

      // FIXME do this with a search parameter
      if (window.name !== 'ControlPage') {
        this.props.loadConfig(searchParams.configUrl);
      }

    } else {
      this.props.setConfigError('Error in URL: configUrl search parameter is required.');
    }

  }

  render() {



    if (this.props.configLoaded === false) {
      return <LoadingPageContainer />
    }

    if (this.props.displayMode === DisplayModeEnum.CONTROL_PAGE) {
      return <div className="App" data-display-mode="CONTROL_WIDGET">
        <ControlPageContainer />
      </div>;
    }

    return (
      <div className="App" data-display-mode={this.props.displayMode}>
        <ViewPortContainer />
        <ControlWidgetContainer />
        <ControlWidgetMiniContainer />
      </div>
    );

  }
}

export default App;
