import React, { Component } from 'react';
import PropTypes from 'prop-types';

import qs from 'query-string';

import './App.css';

import ControlWidgetContainer from 'ui/app/containers/ControlWidgetContainer.js';
import ControlWidgetMiniContainer from 'ui/app/containers/ControlWidgetMiniContainer.js';
import ControlPageContainer from 'ui/app/containers/ControlPageContainer.js';
import ViewPortContainer from 'ui/app/containers/ViewPortContainer.js';
import LoadingPageContainer from 'ui/app/containers/LoadingPageContainer.js';
import PersonaTabsContainer from 'ui/personas/containers/PersonaTabsContainer.js';
import PersonaUrlControlsContainer from 'ui/personas/containers/PersonaUrlControlsContainer.js';

import DisplayModeEnum from 'enums/DisplayMode.js';

class App extends Component {
  componentDidMount() {
    let searchParams = qs.parse(window.location.search);
    if (searchParams.configUrl) {
      // FIXME do this with a search parameter
      if (window.name !== 'ControlPage') {
        this.props.loadConfig(searchParams.configUrl);
      }
    } else {
      this.props.setConfigError(
        'Error in URL: configUrl search parameter is required.'
      );
    }
  }

  render() {
    if (this.props.configLoaded === false) {
      return <LoadingPageContainer />;
    }

    if (this.props.displayMode === DisplayModeEnum.CONTROL_PAGE) {
      return (
        <div className="App" data-display-mode="CONTROL_WIDGET">
          <ControlPageContainer />
        </div>
      );
    }

    return (
      <div className="App" data-display-mode={this.props.displayMode}>
        <div className="tabbed-viewport">
          <PersonaTabsContainer />
          <PersonaUrlControlsContainer />
          <ViewPortContainer />
        </div>
        <ControlWidgetContainer />
        <ControlWidgetMiniContainer />
      </div>
    );
  }
}

App.propTypes = {
  loadConfig: PropTypes.func.isRequired,
  setConfigError: PropTypes.func.isRequired,
  displayMode: PropTypes.string.isRequired
};

export default App;
