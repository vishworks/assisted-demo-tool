import React, { Component } from 'react';
import PropTypes from 'prop-types';

import AddNoteButton from '../components/AddNoteButton.js';

import './NewNoteForm.css';

class NewNoteForm extends Component {
  addNote = () => {
    let title = this.titleInput.value,
      text = this.textInput.value;
    if (title && text) {
      this.props.addNote(title, text);
      this.titleInput.value = '';
      this.textInput.value = '';
    }
  };

  render() {
    return (
      <div className="NewNoteForm">
        <div className="input-group title-input-group">
          <label className="form-label" htmlFor="NewNoteForm_note-title">
            Title
          </label>
          <input
            type="text"
            id="NewNoteForm_note-title"
            placeholder="Insert title..."
            ref={el => {
              this.titleInput = el;
            }}
          />
        </div>
        <div className="input-group text-input-group">
          <label className="form-label" htmlFor="NewNoteForm_note-title">
            Text
          </label>
          <textarea
            type="text"
            id="NewNoteForm_note-text"
            placeholder="Insert text..."
            ref={el => {
              this.textInput = el;
            }}
          />
        </div>
        <div className="bottom-row">
          <AddNoteButton onClick={ev => this.addNote()} />
        </div>
      </div>
    );
  }
}

NewNoteForm.propTypes = {
  addNote: PropTypes.func.isRequired
};

export default NewNoteForm;
