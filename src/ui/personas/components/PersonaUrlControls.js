import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './PersonaUrlControls.css';

class PersonaUrlControls extends Component {
  render() {
    return (
      <div className="PersonaUrlControls">
        <button
          className="url-refresh-button"
          onClick={() => {
            const curIframe = document.querySelector(
              '.ViewPort .view-frame.current'
            );
            curIframe.setAttribute('src', curIframe.getAttribute('src'));
          }}
        >
          <i className="fa fa-refresh" />
        </button>
        <input className="url-input" readonly disabled value={this.props.url} />
      </div>
    );
  }
}

PersonaUrlControls.propTypes = {
  url: PropTypes.string.isRequired
};

export default PersonaUrlControls;
