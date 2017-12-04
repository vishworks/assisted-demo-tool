import { connect } from 'react-redux';

import { getCurrentStepTitle } from 'state/demos/selectors.js';
import ControlPage from '../components/ControlPage.js';

const mapStateToProps = state => {
  return {
    currentStepTitle: getCurrentStepTitle(state)
  };
};

const ControlPageContainer = connect(mapStateToProps, null)(ControlPage);

export default ControlPageContainer;
