import React, { Component } from 'react';

import CurrentPersonaLabelledAvatarContainer from '../../containers/CurrentPersonaLabelledAvatarContainer.js'
import PersonaStepsListContainer from '../../containers/PersonaStepsListContainer.js'
import AllStepsListContainer from '../../containers/AllStepsListContainer.js'

import StepsControlButtonsContainer from '../../containers/StepsControlButtonsContainer.js'
import StepContentContainer from '../../containers/StepContentContainer.js'
import StepLabelContainer from '../../containers/StepLabelContainer.js'
import NotSelectedPersonaListContainer from '../../containers/NotSelectedPersonaListContainer.js'
import PopupContainer from '../../containers/PopupContainer.js'


import DisplayModeEnum from '../../enums/DisplayMode.js'



import './ControlWidget.css'

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
            <button className={this.getToolBtnClassName('steps')} data-id="steps" onClick={this.togglePanel}>
              <i className="fa fa-list" />
            </button>
            <button className="tool-btn" onClick={() => { this.props.setDisplayMode('DETACHED_PAGE') }}>
              <i className="fa fa-object-ungroup" />
            </button>
          </div>

          <div data-id="personas"
               onClick={this.togglePanel}>
            <CurrentPersonaLabelledAvatarContainer />
          </div>




          <PopupContainer className="popup-cover" popupId="personas" >
            <NotSelectedPersonaListContainer />
          </PopupContainer>

          <PopupContainer popupId="steps" closeOnClick={false}>
            <div className="side-popup-title">Steps</div>

            <div className="small-pseudo-checkbox"
                 onClick={()=>{ this.setState({filterStepsByPersona: !this.state.filterStepsByPersona }); }}
              >
              Filter by persona
              <i className={this.state.filterStepsByPersona ? 'fa fa-check-square-o' : 'fa fa-square-o'}/>
            </div>
            {this.state.filterStepsByPersona ? <PersonaStepsListContainer /> : <AllStepsListContainer />}
          </PopupContainer>
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
    this.props.openPopup(this.props.activePopup === panelId ? '' : panelId );
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
    this.props.openPopup('');
  }

  onClickDetach(ev) {
    this.props.setDisplayMode(DisplayModeEnum.DETACHED_PAGE);
    this.props.openPopup('');
  }
}

export default ControlWidget;