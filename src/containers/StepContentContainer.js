import { connect } from 'react-redux'
import { getCurrentStepContent } from '../selectors'
import StepContent from '../components/StepContent.js'



const mapStateToProps = state => {
  return {
    content: getCurrentStepContent(state)
  }
};

const mapDispatchToProps = dispatch => {
  return {

  }
};


const StepContentContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(StepContent);

export default StepContentContainer