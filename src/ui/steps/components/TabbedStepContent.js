import React, { Component } from 'react';
import PropTypes from 'prop-types';

import CurrentStepContentContainer from 'ui/steps/containers/CurrentStepContentContainer.js';
import CurrentStepPresenterContentContainer from 'ui/steps/containers/CurrentStepPresenterContentContainer.js';
import CurrentStepNumberContainer from 'ui/steps/containers/CurrentStepNumberContainer.js';
import CurrentStepTitleContainer from 'ui/steps/containers/CurrentStepTitleContainer.js';

import './TabbedStepContent.css';

class TabbedStepContent extends Component {
  render() {
    const {
      hasContent,
      hasPresenterContent,
      displayPresenterContent,
      showPresenterContent
    } = this.props;

    let actualDisplayPresenterContent = displayPresenterContent;

    if (hasContent === false) {
      actualDisplayPresenterContent = true;
    } else if (hasPresenterContent === false) {
      actualDisplayPresenterContent = false;
    }

    const tabContent = actualDisplayPresenterContent ? (
      <CurrentStepPresenterContentContainer />
    ) : (
      <CurrentStepContentContainer />
    );

    return (
      <div className="TabbedStepContent">
        <div className="tab-buttons-row">
          <div
            className={
              'tab-button' +
              (actualDisplayPresenterContent ? ' active' : '') +
              (!hasPresenterContent ? ' disabled' : '')
            }
            onClick={ev => {
              !actualDisplayPresenterContent && showPresenterContent(true);
            }}
          >
            <i className="tab-button-icon fa fa-list" />
            <span className="tab-button-label">Presenter Mode</span>
          </div>
          <div
            className={
              'tab-button' +
              (!actualDisplayPresenterContent ? ' active' : '') +
              (!hasContent ? ' disabled' : '')
            }
            onClick={ev => {
              actualDisplayPresenterContent && showPresenterContent(false);
            }}
          >
            <i className="tab-button-icon fa fa-bullseye" />
            <span className="tab-button-label">Training Mode</span>
          </div>
        </div>
        <div className="tab-content">
          <div className="tab-header-step-number">
            Step <CurrentStepNumberContainer />
          </div>
          <div className="tab-header-step-title">
            <CurrentStepTitleContainer />
          </div>
          <div className="tab-body">{tabContent}</div>
        </div>
      </div>
    );
  }
}

TabbedStepContent.propTypes = {
  hasContent: PropTypes.bool.isRequired,
  hasPresenterContent: PropTypes.bool.isRequired,
  displayPresenterContent: PropTypes.bool.isRequired,
  showPresenterContent: PropTypes.func.isRequired
};

export default TabbedStepContent;
