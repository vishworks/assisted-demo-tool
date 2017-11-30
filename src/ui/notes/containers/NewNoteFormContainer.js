import { connect } from 'react-redux';

import { addNote } from 'state/notes/actions.js';
import { closeAllPopups } from 'state/ui/actions.js';

import NewNoteForm from '../components/NewNoteForm.js';

const mapDispatchToProps = dispatch => {
  return {
    addNote: (title, text) => {
      dispatch(closeAllPopups());
      dispatch(addNote(title, text));
    }
  };
};

const NewNoteFormContainer = connect(null, mapDispatchToProps)(NewNoteForm);

export default NewNoteFormContainer;
