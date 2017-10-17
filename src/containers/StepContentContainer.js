import { connect } from 'react-redux'
import { getCurrentStepContent, getDisplayBullets, getCurrentStepBullets, getCurrentStepName } from '../selectors'
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