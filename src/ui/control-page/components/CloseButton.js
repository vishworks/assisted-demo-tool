import React, { Component } from 'react';

import './CloseButton.css';

class CloseButton extends Component {
  render() {
    return (
      <div className="CloseButton" onClick={ev => window.close()}>
        <i className="fa fa-times" />
      </div>
    );
  }
}

export default CloseButton;
