import React, { Component } from 'react';

import CurrentPersonaLabelledAvatarContainer from '../containers/CurrentPersonaLabelledAvatarContainer.js'
import PersonaStepsListContainer from '../containers/PersonaStepsListContainer.js'

import StepsControlButtonsContainer from '../containers/StepsControlButtonsContainer.js'
import StepContentContainer from '../containers/StepContentContainer.js'
import StepLabelContainer from '../containers/StepLabelContainer.js'
import NotSelectedPersonaListContainer from '../containers/NotSelectedPersonaListContainer.js'

import Comment from '../components/Comment.js'
import List from '../components/List.js'

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


    let items = [{id:'pippo'},{id:'pluto'},{id:'paperino'}];
    let func = (item) => {
      return <Comment key={item.id}/>;
    };
    let list = <List modelName="Comment" className="test-list" model={items} mapFunction={func} />


    return (
      <div className={className.join(' ')}>
        <header>
          <div className="toolbar">
            <button className="tool-btn" onClick={this.onClickMinimize}>
              <i className="fa fa-arrow-right" />
            </button>
            <button className={this.getToolBtnClassName('comments')} data-id="comments" onClick={this.togglePanel}>
              <i className="fa fa-comment-o" />
            </button>
            <button className={this.getToolBtnClassName('steps')} data-id="steps" onClick={this.togglePanel}>
              <i className="fa fa-list" />
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
          <SidePopup open={this.state.activePopup === 'comments'} >
            <div style={{  fontSize: '20px', textAlign: 'center', padding: '10px 0'}} >COMMENTS</div>
            {list}
          </SidePopup>
        </header>

        <button onClick={() => { this.props.setDisplayMode('DETACHED_PAGE') }}>BLA</button>
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
}

export default ControlWidget;