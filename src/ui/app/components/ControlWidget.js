import React, { Component } from 'react';
import PropTypes from 'prop-types';

import CurrentPersonaLabelledAvatarContainer from 'ui/personas/containers/CurrentPersonaLabelledAvatarContainer.js';
import PersonaStepsListContainer from 'ui/steps/containers/PersonaStepsListContainer.js';
import AllStepsListContainer from 'ui/steps/containers/AllStepsListContainer.js';

import StepsControlButtonsContainer from 'ui/steps/containers/StepsControlButtonsContainer.js';
import StepContentModeTabsContainer from 'ui/steps/containers/StepContentModeTabsContainer.js';
import StepLabelContainer from 'ui/steps/containers/StepLabelContainer.js';
import NotSelectedPersonaListContainer from 'ui/personas/containers/PersonaListContainer.js';
import PopupContainer from 'ui/shared/containers/PopupContainer.js';
import DemoOrdinatorContainer from 'ui/demos/containers/DemoOrdinatorContainer.js';
import CurrentStepContentContainer from 'ui/steps/containers/CurrentStepContentContainer.js';
import CurrentStepTitleContainer from 'ui/steps/containers/CurrentStepTitleContainer.js';

import PseudoCheckbox from 'ui/shared/components/PseudoCheckbox.js';

import DisplayModeEnum from 'enums/DisplayMode.js';

import './ControlWidget.css';

class ControlWidget extends Component {
  constructor(props) {
    super(props);

    this.togglePanel = this.togglePanel.bind(this);
    this.onClickMinimize = this.onClickMinimize.bind(this);
    this.onClickDetach = this.onClickDetach.bind(this);
    this.getToolBtnClassName = this.getToolBtnClassName.bind(this);

    this.state = {
      filterStepsByPersona: false
    };
  }

  render() {
    let className = ['ControlWidget'];

    return (
      <div className={className.join(' ')}>
        <header>
          <div className="toolbar">
            <button className="tool-btn" onClick={this.onClickMinimize}>
              <i className="fa fa-arrow-right" />
            </button>
            <button
              className={this.getToolBtnClassName('steps')}
              data-id="steps"
              onClick={this.togglePanel}
            >
              <i className="fa fa-list" />
            </button>
            <button
              className="tool-btn"
              data-id="settings"
              onClick={this.togglePanel}
            >
              <i className="fa fa-list-ol" />
            </button>
            <button
              className="tool-btn"
              onClick={() => {
                this.props.setDisplayMode('DETACHED_PAGE');
              }}
            >
              <i className="fa fa-window-restore" />
            </button>
          </div>

          <div data-id="personas" onClick={this.togglePanel}>
            <CurrentPersonaLabelledAvatarContainer />
          </div>

          <PopupContainer
            popupId="settings"
            closeOnClick={false}
            onOpen={() => {
              this.props.startDemoSettings();
            }}
          >
            <div className="side-popup-title">Demo Organizer</div>
            <DemoOrdinatorContainer />
          </PopupContainer>

          <PopupContainer className="popup-cover" popupId="personas">
            <NotSelectedPersonaListContainer />
          </PopupContainer>

          <PopupContainer popupId="steps" closeOnClick={false}>
            <div className="side-popup-title">Steps</div>

            <PseudoCheckbox
              text="&nbsp; &nbsp; Filter by Persona"
              checked={this.state.filterStepsByPersona}
              onClick={() => {
                this.setState({
                  filterStepsByPersona: !this.state.filterStepsByPersona
                });
              }}
            />
            {this.state.filterStepsByPersona ? (
              <PersonaStepsListContainer />
            ) : (
              <AllStepsListContainer />
            )}
          </PopupContainer>
        </header>

        <StepContentModeTabsContainer className="dark-theme" />
        <div className="step-content">
          <h3 className="step-title">
            <CurrentStepTitleContainer />
          </h3>
          <CurrentStepContentContainer />
        </div>

        <StepLabelContainer />
        <StepsControlButtonsContainer />
      </div>
    );
  }

  togglePanel(ev) {
    let panelId = ev.currentTarget.getAttribute('data-id');
    if (this.props.activePopup === panelId) {
      this.props.closeAllPopups();
    } else {
      this.props.openPopup(panelId);
    }
  }

  getToolBtnClassName(panelId) {
    let className = 'tool-btn';
    if (panelId === this.props.activePopup) {
      className += ' active';
    }
    return className;
  }

  onClickMinimize(ev) {
    this.props.onClickMinimize(ev);
    this.props.closeAllPopups();
  }

  onClickDetach(ev) {
    this.props.setDisplayMode(DisplayModeEnum.DETACHED_PAGE);
    this.props.closeAllPopups();
  }
}

ControlWidget.propTypes = {
  setDisplayMode: PropTypes.func.isRequired,
  startDemoSettings: PropTypes.func.isRequired,
  closeAllPopups: PropTypes.func.isRequired,
  openPopup: PropTypes.func.isRequired,
  onClickMinimize: PropTypes.func.isRequired,
  activePopup: PropTypes.string.isRequired
};

export default ControlWidget;
