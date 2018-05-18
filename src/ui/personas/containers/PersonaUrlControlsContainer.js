import { connect } from 'react-redux';

import { getCurrentPersonaUrl } from 'state/personas/selectors.js';
import PersonaUrlControls from '../components/PersonaUrlControls.js';

const mapStateToProps = state => {
  return {
    url: getCurrentPersonaUrl(state)
  };
};

const PersonaUrlControlsContainer = connect(mapStateToProps, null)(
  PersonaUrlControls
);

export default PersonaUrlControlsContainer;
