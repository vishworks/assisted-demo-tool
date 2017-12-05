import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './AddNoteButton.css';

class AddNoteButton extends Component {
  render() {
    return (
      <div className="AddNoteButton" onClick={this.props.onClick}>
        <i className="fa fa-pencil" aria-hidden="true" />
        <span className="btn-label">Add Note</span>
      </div>
    );
  }
}

AddNoteButton.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default AddNoteButton;
