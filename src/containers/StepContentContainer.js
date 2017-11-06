import { connect } from 'react-redux'
import { getDisplayBullets } from '../selectors'
import { getCurrentStepContent, getCurrentStepBullets, getCurrentStepName } from '../state/steps/localSelectors.js'
import { showBullets } from '../actions'
import StepContent from '../components/StepContent.js'



const mapStateToProps = state => {
  return {
    content: getCurrentStepContent(state),
    bullets: getCurrentStepBullets(state),
    displayBullets: getDisplayBullets(state),
    stepTitle: getCurrentStepName(state)
  }
};

const mapDispatchToProps = dispatch => {
  return {
    showBullets: (show) => {
      dispatch(showBullets(show));
    }
  }
};


const StepContentContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(StepContent);

export default StepContentContainer