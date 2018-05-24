import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './PersonaUrlControls.css';

class PersonaUrlControls extends Component {
  render() {
    return (
      <div className="PersonaUrlControls">
        <button
          className="url-tools-button"
          disabled={this.props.prevButtonDisabled}
          onClick={this.props.gotoPrevUrl}
        >
          <i className="fa fa-arrow-left" />
        </button>
        <button
          className="url-tools-button"
          disabled={this.props.nextButtonDisabled}
          onClick={this.props.gotoNextUrl}
        >
          <i className="fa fa-arrow-right" />
        </button>

        <button
          className="url-tools-button"
          onClick={() => {
            const curIframe = document.querySelector(
              '.ViewPort .view-frame.current'
            );
            curIframe.setAttribute('src', curIframe.getAttribute('src'));
          }}
        >
          <i className="fa fa-refresh" />
        </button>
        <input className="url-input" readOnly disabled value={this.props.url} />
      </div>
    );
  }
}

PersonaUrlControls.propTypes = {
  url: PropTypes.string.isRequired,
  prevButtonDisabled: PropTypes.bool.isRequired,
  nextButtonDisabled: PropTypes.bool.isRequired,
  gotoPrevUrl: PropTypes.func.isRequired,
  gotoNextUrl: PropTypes.func.isRequired
};

export default PersonaUrlControls;
