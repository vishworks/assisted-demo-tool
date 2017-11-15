import { connect } from 'react-redux';

import { getActivePopup } from 'state/ui/selectors.js';
import { closeAllPopups, openPopup } from 'state/ui/actions.js';
import { startDemoSettings } from 'state/demos/actions.js';

import SetupDemoButton from '../components/SetupDemoButton.js';

const mapStateToProps = state => {
  return {
    activePopup: getActivePopup(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeAllPopups: () => dispatch(closeAllPopups()),
    openPopup: popupId => dispatch(openPopup(popupId)),
    startDemoSettings: () => dispatch(startDemoSettings())
  };
};

const SetupDemoButtonContainer = connect(mapStateToProps, mapDispatchToProps)(
  SetupDemoButton
);

export default SetupDemoButtonContainer;
