import React, { Component } from 'react';

class AddNoteButton extends Component {
  render() {
    return (
      <div
        className="AddNoteButton"
        onClick={ev =>
          this.props.addNote('Note title 1', 'Bla bla bla bla bla bla')
        }
      >
        <i className="fa fa-pencil" aria-hidden="true" />
        Add Note
      </div>
    );
  }
}

export default AddNoteButton;
