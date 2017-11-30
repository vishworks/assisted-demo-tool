import { connect } from 'react-redux';

import { openPopup } from 'state/ui/actions.js';

import AddNoteButton from '../components/AddNoteButton.js';

const mapDispatchToProps = dispatch => {
  return {
    onClick: () => dispatch(openPopup('newNoteForm'))
  };
};

const OpenNewNotePopupButtonContainer = connect(null, mapDispatchToProps)(
  AddNoteButton
);

export default OpenNewNotePopupButtonContainer;
