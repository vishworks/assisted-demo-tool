import { connect } from 'react-redux';

import { openPopup } from 'state/ui/actions.js';

import PersonaDropdownLarge from '../components/PersonaDropdownLarge.js';

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    openPopup: popupId => {
      dispatch(openPopup(popupId));
    }
  };
};

const PersonaDropdownLargeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PersonaDropdownLarge);

export default PersonaDropdownLargeContainer;
