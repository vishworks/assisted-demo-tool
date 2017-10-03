import React, { Component } from 'react';

import PersonaDropdownContainer from '../containers/PersonaDropdownContainer.js'
import PersonaStepsListContainer from '../containers/PersonaStepsListContainer.js'

import StepsControlButtonsContainer from '../containers/StepsControlButtonsContainer.js'

import SidePopup from './SidePopup.js'

import './ControlWidget.css'

class ControlWidget extends Component {


  constructor(props) {
    super(props);

    this.togglePanel = this.togglePanel.bind(this);
    this.onClickMinimize = this.onClickMinimize.bind(this);
    this.getToolBtnClassName = this.getToolBtnClassName.bind(this);


    this.state = {
      activePopup: ''
    };
  }

  render() {

    let className = ['ControlWidget'];
    className.push(this.props.status);




    return (
      <div className={className.join(' ')}>
        <header>
          <div className="toolbar">
            <button className="tool-btn" onClick={this.onClickMinimize}>
              <img src="img/icons/left-arrow.png" alt="Minimize" />
            </button>
            <button className={this.getToolBtnClassName('comments')} data-id="comments" onClick={this.togglePanel}>
              <img src="img/icons/comments.png" alt="Comments" />
            </button>
            <button className={this.getToolBtnClassName('steps')} data-id="steps" onClick={this.togglePanel}>
              <img src="img/icons/note-list.png" alt="User steps" />
            </button>

          </div>

          <PersonaDropdownContainer />

          <SidePopup open={this.state.activePopup === 'steps'} >
            <PersonaStepsListContainer />
          </SidePopup>
          <SidePopup open={this.state.activePopup === 'comments'} >
            COMMENTS
          </SidePopup>
        </header>


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
}

export default ControlWidget;