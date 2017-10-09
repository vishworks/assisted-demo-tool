import React, { Component } from 'react';

import PersonaDropdownContainer from '../containers/PersonaDropdownContainer.js'
import PersonaStepsListContainer from '../containers/PersonaStepsListContainer.js'

import StepsControlButtonsContainer from '../containers/StepsControlButtonsContainer.js'
import StepContentContainer from '../containers/StepContentContainer.js'
import StepLabelContainer from '../containers/StepLabelContainer.js'

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
            <div className="side-popup-title">Steps</div>
            <PersonaStepsListContainer />
          </SidePopup>
          <SidePopup open={this.state.activePopup === 'comments'} >

            <div style={{  fontSize: '20px', textAlign: 'center', padding: '10px 0'}} >Comments</div>

            <div style={{ display:'flex', flexDirection: 'column', fontSize: '14px'}}>
              <div style={{ display:'flex', flexDirection: 'row', marginTop: '10px', padding: '20px'}}>
                <div>
                  <div
                    className="PersonaAvatar"
                    style={{ backgroundImage: 'url(\'img/user-1.jpg\')', minWidth: '40px', maxWidth: '40px', minHeight: '40px', maxHeight: '40px', borderWidth: '1px', marginRight: '20px' }}>
                  </div>
                </div>
                <div>
                  <div style={{ fontWeight: 'bold', fontSize: '16px'}}>Carol Schmidt</div>
                  <div>Business Manager</div>
                  <div style={{ marginTop: '20px' }}>
                    Lorem ipsum dolor sit amet, sociis et, euismod elit, erat convallis fusce pellentesque adipisci, aliquam orci libero dictumst ornare id arcu, fames id. Velit quis eu pellentesque mauris, dignissim donec, tristique dapibus praesent duis tristique.
                  </div>
                </div>
              </div>

              <div style={{ display:'flex', flexDirection: 'row', marginTop: '10px', padding: '20px'}}>
                <div>
                  <div
                    className="PersonaAvatar"
                    style={{ backgroundImage: 'url(\'img/user-2.jpg\')', minWidth: '40px', maxWidth: '40px', minHeight: '40px', maxHeight: '40px', borderWidth: '1px', marginRight: '20px' }}>
                  </div>
                </div>
                <div>
                  <div style={{ fontWeight: 'bold', fontSize: '16px'}}>Jessica Bahia</div>
                  <div>CMS Admin</div>
                  <div style={{ marginTop: '20px' }}>
                    Lorem ipsum dolor sit amet, sociis et, euismod elit, erat convallis fusce pellentesque adipisci, aliquam orci libero dictumst ornare id arcu, fames id. Velit quis eu pellentesque mauris, dignissim donec, tristique dapibus praesent duis tristique.
                  </div>
                </div>
              </div>
            </div>

          </SidePopup>
        </header>

        <div className="step-content">
          <StepContentContainer />
        </div>

        <StepLabelContainer />
        <StepsControlButtonsContainer />
        <div className="footer">
          <img src="img/entando-e.png" />
        </div>
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