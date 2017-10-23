import { connect } from 'react-redux'
import { getCurrentStepIndex } from '../selectors'
import { getCurrentDemoStepsCount } from '../state/demos/selectors.js'
import StepLabel from '../components/StepLabel.js'



const mapStateToProps = state => {
  return {
    stepIndex: getCurrentStepIndex(state),
    stepsCount: getCurrentDemoStepsCount(state)
  }
};

const mapDispatchToProps = dispatch => {
  return {

  }
};


const StepLabelContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(StepLabel);

export default StepLabelContainer