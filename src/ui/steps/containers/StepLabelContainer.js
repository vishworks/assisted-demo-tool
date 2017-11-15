import { connect } from 'react-redux';

import { getStepsCount, getCurrentStepIndex } from 'state/demos/selectors.js';
import StepLabel from '../components/StepLabel.js';

const mapStateToProps = state => {
  return {
    stepIndex: getCurrentStepIndex(state),
    stepsCount: getStepsCount(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

const StepLabelContainer = connect(mapStateToProps, mapDispatchToProps)(
  StepLabel
);

export default StepLabelContainer;
