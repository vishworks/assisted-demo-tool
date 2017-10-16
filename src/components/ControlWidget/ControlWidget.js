import React, { Component } from 'react';

import CurrentPersonaLabelledAvatarContainer from '../../containers/CurrentPersonaLabelledAvatarContainer.js'
import PersonaStepsListContainer from '../../containers/PersonaStepsListContainer.js'

import StepsControlButtonsContainer from '../../containers/StepsControlButtonsContainer.js'
import StepContentContainer from '../../containers/StepContentContainer.js'
import StepLabelContainer from '../../containers/StepLabelContainer.js'
import NotSelectedPersonaListContainer from '../../containers/NotSelectedPersonaListContainer.js'

import List from '../List.js'

import DisplayModeEnum from '../../enums/DisplayMode.js'

import SidePopup from './../SidePopup.js'

import './ControlWidget.css'

class ControlWidget extends Component {


  constructor(props) {
    super(props);

    this.togglePanel = this.togglePanel.bind(this);
    this.onClickMinimize = this.onClickMinimize.bind(this);
    this.onClickDetach = this.onClickDetach.bind(this);
    this.getToolBtnClassName = this.getToolBtnClassName.bind(this);


    this.state = {
      activePopup: ''
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
            <button className={this.getToolBtnClassName('steps')} data-id="steps" onClick={this.togglePanel}>
              <i className="fa fa-list" />
            </button>
            <button className="tool-btn" onClick={() => { this.props.setDisplayMode('DETACHED_PAGE') }}>
              <i className="fa fa-object-ungroup" />
            </button>
          </div>

          <CurrentPersonaLabelledAvatarContainer />

          <div className="persona-dropdown-trigger"
               data-id="personas"
               onClick={this.togglePanel}>
            <i className={this.state.activePopup === 'personas' ? 'fa fa-angle-up' : 'fa fa-angle-down'} />
          </div>

          <SidePopup className="popup-bottom" open={this.state.activePopup === 'personas'} >
            <NotSelectedPersonaListContainer />
          </SidePopup>

          <SidePopup open={this.state.activePopup === 'steps'} >
            <div className="side-popup-title">Steps</div>
            <PersonaStepsListContainer />
          </SidePopup>
        </header>

        <div className="step-content">
          <h3>{this.props.currentStepName}</h3>
          <StepContentContainer />
        </div>

        <StepLabelContainer />
        <StepsControlButtonsContainer />
      </div>
    );
  }

  togglePanel(ev) {
    let panelId = ev.currentTarget.getAttribute('data-id');
    this.setState({ activePopup: this.state.activePopup === panelId ? '' : panelId });
  }

  getToolBtnClassName(panelId) {
    let className = 'tool-btn';
    if (panelId === this.state.activePopup) {
      className += ' active';
    }
    return className;
  }


  onClickMinimize(ev) {
    this.props.onClickMinimize(ev);
    this.setState({ activePopup: '' });
  }

  onClickDetach(ev) {
    this.props.setDisplayMode(DisplayModeEnum.DETACHED_PAGE)
    this.setState({ activePopup: '' });
  }
}

export default ControlWidget;