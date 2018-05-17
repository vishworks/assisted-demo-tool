import React, { Component } from 'react';
import PropTypes from 'prop-types';

import PopupContainer from 'ui/shared/containers/PopupContainer.js';
import DemoOrdinatorContainer from 'ui/demos/containers/DemoOrdinatorContainer.js';

import './SetupDemoButton.css';

const POPUP_ID = 'settings';

class SetupDemoButton extends Component {
  constructor(props) {
    super(props);
    this.togglePanel = this.togglePanel.bind(this);
  }

  // FIXME refactor this.props.demos into operations
  render() {
    return (
      <div className="SetupDemoButton" onClick={this.togglePanel}>
        <i className="fa fa-list-ol" />
        <PopupContainer
          className="demos-popup"
          popupId={POPUP_ID}
          closeOnClick={false}
          onOpen={() => this.props.startDemoSettings()}
        >
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

SetupDemoButton.propTypes = {
  startDemoSettings: PropTypes.func.isRequired,
  closeAllPopups: PropTypes.func.isRequired,
  openPopup: PropTypes.func.isRequired,
  activePopup: PropTypes.string.isRequired
};

export default SetupDemoButton;
