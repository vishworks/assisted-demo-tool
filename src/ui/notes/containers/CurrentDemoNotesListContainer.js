import { connect } from 'react-redux';

import { getCurrentDemoNotes } from 'state/notes/selectors.js';
import { swapNotes } from 'state/notes/actions.js';

import NotesList from '../components/NotesList.js';

const mapStateToProps = state => {
  return {
    notes: getCurrentDemoNotes(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    swapNotes: (oldIndex, newIndex) => dispatch(swapNotes(oldIndex, newIndex))
  };
};

const CurrentDemoNotesListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(NotesList);

export default CurrentDemoNotesListContainer;
