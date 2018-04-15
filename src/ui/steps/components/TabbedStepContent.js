import React, { Component } from 'react';
import PropTypes from 'prop-types';

import CurrentStepContentContainer from 'ui/steps/containers/CurrentStepContentContainer.js';
import CurrentStepBulletsContainer from 'ui/steps/containers/CurrentStepBulletsContainer.js';
import CurrentStepNumberContainer from 'ui/steps/containers/CurrentStepNumberContainer.js';
import CurrentStepTitleContainer from 'ui/steps/containers/CurrentStepTitleContainer.js';

import './TabbedStepContent.css';

class TabbedStepContent extends Component {
  render() {
    const { hasContent, hasBullets, displayBullets, showBullets } = this.props;

    let actualDisplayBullets = displayBullets;

    if (hasContent === false) {
      actualDisplayBullets = true;
    } else if (hasBullets === false) {
      actualDisplayBullets = false;
    }

    const tabContent = actualDisplayBullets ? (
      <CurrentStepBulletsContainer />
    ) : (
      <CurrentStepContentContainer />
    );

    return (
      <div className="TabbedStepContent">
        <div className="tab-buttons-row">
          <div
            className={
              'tab-button' +
              (actualDisplayBullets ? ' active' : '') +
              (!hasBullets ? ' disabled' : '')
            }
            onClick={ev => {
              !actualDisplayBullets && showBullets(true);
            }}
          >
            <i className="tab-button-icon fa fa-list" />
            <span className="tab-button-label">Presenter Mode</span>
          </div>
          <div
            className={
              'tab-button' +
              (!actualDisplayBullets ? ' active' : '') +
              (!hasContent ? ' disabled' : '')
            }
            onClick={ev => {
              actualDisplayBullets && showBullets(false);
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
  hasBullets: PropTypes.bool.isRequired,
  displayBullets: PropTypes.bool.isRequired,
  showBullets: PropTypes.func.isRequired
};

export default TabbedStepContent;
