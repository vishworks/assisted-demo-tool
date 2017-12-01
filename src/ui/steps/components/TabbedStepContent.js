import React, { Component } from 'react';

import CurrentStepContentContainer from 'ui/steps/containers/CurrentStepContentContainer.js';
import CurrentStepBulletsContainer from 'ui/steps/containers/CurrentStepBulletsContainer.js';
import CurrentStepNumberContainer from 'ui/steps/containers/CurrentStepNumberContainer.js';
import CurrentStepTitleContainer from 'ui/steps/containers/CurrentStepTitleContainer.js';

import './TabbedStepContent.css';

class TabbedStepContent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      hasContent,
      content,
      hasBullets,
      bullets,
      displayBullets,

      showBullets
    } = this.props;

    let actualDisplayBullets = displayBullets;

    if (hasContent === false) {
      actualDisplayBullets = true;
    } else if (hasBullets === false) {
      actualDisplayBullets = false;
    }

    const renderTabButton = (icon, label, active) => (
      <div
        className={'tab-button' + (active ? ' active' : '')}
        onClick={ev => showBullets(!actualDisplayBullets)}
      >
        <i className={'tab-button-icon fa ' + icon} />
        <span className="tab-button-label">{label}</span>
      </div>
    );

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
            <span className="tab-button-label">Presenter View</span>
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
            <span className="tab-button-label">Details View</span>
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

export default TabbedStepContent;
