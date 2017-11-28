import React, { Component } from 'react';

import PopupContainer from 'ui/shared/containers/PopupContainer.js';
import DemoOrdinatorContainer from 'ui/demos/containers/DemoOrdinatorContainer.js';

import './SetupDemoButton.css';

const POPUP_ID = 'settings';

class SetupDemoButton extends Component {
  constructor(props) {
    super(props);
    this.togglePanel = this.togglePanel.bind(this);
  }

  render() {
    return (
      <div className="SetupDemoButton" onClick={this.togglePanel}>
        <i className="fa fa-gear" />
        <PopupContainer
          popupId={POPUP_ID}
          closeOnClick={false}
          onOpen={() => {
            this.props.startDemoSettings(this.props.demos);
          }}
        >
          <div className="side-popup-title">Settings</div>
          <DemoOrdinatorContainer />
        </PopupContainer>
      </div>
    );
  }

  togglePanel(ev) {
    if (this.props.activePopup === POPUP_ID) {
      this.props.closeAllPopups();
    } else {
      this.props.openPopup(POPUP_ID);
    }
  }
}

export default SetupDemoButton;
