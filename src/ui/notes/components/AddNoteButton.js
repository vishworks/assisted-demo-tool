import React, { Component } from 'react';

import './AddNoteButton.css';

class AddNoteButton extends Component {
  render() {
    return (
      <div className="AddNoteButton">
        <i className="fa fa-pencil" aria-hidden="true" />
        <span className="btn-label">Add Note</span>
      </div>
    );
  }
}

export default AddNoteButton;
