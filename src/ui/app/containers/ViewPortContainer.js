import { connect } from 'react-redux';

import { getCurrentPersonaId } from 'state/personas/selectors.js';
import { getCurrentDemoPersonasUrls } from 'state/urlHistory/selectors.js';

import ViewPort from '../components/ViewPort.js';

const mapStateToProps = state => {
  return {
    currentPersonaId: getCurrentPersonaId(state),
    currentPersonasUrls: getCurrentDemoPersonasUrls(state)
  };
};

const ViewPortContainer = connect(mapStateToProps, null)(ViewPort);

export default ViewPortContainer;
