import { connect } from 'react-redux';

import { prevStep } from 'state/demos/actions.js';

import { getIsFirstStep } from 'state/demos/selectors.js';

import PrevStepButton from '../components/PrevStepButton.js';

const mapStateToProps = state => {
  return {
    isFirstStep: getIsFirstStep(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    prevStep: () => {
      dispatch(prevStep());
    }
  };
};

const PrevStepButtonContainer = connect(mapStateToProps, mapDispatchToProps)(
  PrevStepButton
);

export default PrevStepButtonContainer;
