import React, { Component } from 'react';

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

export default AddNoteButton;
