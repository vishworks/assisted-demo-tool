import React, { Component } from 'react';

import CurrentStepContentContainer from 'ui/steps/containers/CurrentStepContentContainer.js';
import CurrentStepNumberContainer from 'ui/steps/containers/CurrentStepNumberContainer.js';
import CurrentStepTitleContainer from 'ui/steps/containers/CurrentStepTitleContainer.js';
import StepContentModeTabsContainer from 'ui/steps/containers/StepContentModeTabsContainer.js';

import './TabbedStepContent.css';

class TabbedStepContent extends Component {
  render() {
    return (
      <div className="TabbedStepContent">
        <div className="tab-buttons-row">
          <StepContentModeTabsContainer />
        </div>
        <div className="tab-content">
          <div className="tab-header-step-number">
            Step <CurrentStepNumberContainer />
          </div>
          <div className="tab-header-step-title">
            <CurrentStepTitleContainer />
          </div>
          <div className="tab-body">
            <CurrentStepContentContainer />
          </div>
        </div>
      </div>
    );
  }
}

export default TabbedStepContent;
