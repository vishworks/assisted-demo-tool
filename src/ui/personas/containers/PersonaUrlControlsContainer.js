import { connect } from 'react-redux';

import {
  getCurrentUrl,
  getCurrentUrlIsFirst,
  getCurrentUrlIsLast
} from 'state/urlHistory/selectors.js';
import { gotoNextUrl, gotoPrevUrl } from 'state/urlHistory/actions.js';

import PersonaUrlControls from '../components/PersonaUrlControls.js';

const mapStateToProps = state => {
  return {
    url: getCurrentUrl(state),
    prevButtonDisabled: getCurrentUrlIsFirst(state),
    nextButtonDisabled: getCurrentUrlIsLast(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    gotoPrevUrl: () => dispatch(gotoPrevUrl()),
    gotoNextUrl: () => dispatch(gotoNextUrl())
  };
};

const PersonaUrlControlsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PersonaUrlControls);

export default PersonaUrlControlsContainer;
