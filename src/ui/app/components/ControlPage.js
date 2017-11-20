import React, { Component } from 'react';

import HorizontalDemoListContainer from 'ui/demos/containers/HorizontalDemoListContainer.js';
import CloseButton from 'ui/shared/components/CloseButton.js';
import SetupDemoButton from 'ui/demos/containers/SetupDemoButtonContainer.js';
import PersonaDropdownLargeContainer from 'ui/personas/containers/PersonaDropdownLargeContainer.js';
import BigStepsListContainer from 'ui/steps/containers/BigStepsListContainer.js';
import BigActiveStepNumberDisplayContainer from 'ui/steps/containers/BigActiveStepNumberDisplayContainer.js';
import BigTimerContainer from 'ui/demos/containers/BigTimerContainer.js';
import CurrentDemoNameContainer from 'ui/demos/containers/CurrentDemoNameContainer.js';

import './ControlPage.css';

class ControlPage extends Component {
  render() {
    let className = ['ControlPage'];

    return (
      <div className={className.join(' ')}>
        <div className="header">
          <div className="header-left">
            <HorizontalDemoListContainer />
          </div>
          <div className="header-right">
            <PersonaDropdownLargeContainer />
            <SetupDemoButton />
            <CloseButton />
          </div>
        </div>
        <div className="layout-row main-content">
          <div className="layout-col-1">
            <div className="layout-header">
              <div className="font-header-title">Steps index</div>
            </div>
            <BigStepsListContainer />
          </div>
          <div className="layout-col-2">
            <div className="layout-header">
              <BigActiveStepNumberDisplayContainer />
              <BigTimerContainer />
              <CurrentDemoNameContainer />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ControlPage;
