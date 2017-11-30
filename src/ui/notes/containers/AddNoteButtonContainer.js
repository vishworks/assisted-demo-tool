import { connect } from 'react-redux';

import { addNote } from 'state/notes/actions.js';

import AddNoteButton from '../components/AddNoteButton.js';

const mapDispatchToProps = dispatch => {
  return {
    addNote: (title, text) => dispatch(addNote(title, text))
  };
};

const AddNoteButtonContainer = connect(null, mapDispatchToProps)(AddNoteButton);

export default AddNoteButtonContainer;
