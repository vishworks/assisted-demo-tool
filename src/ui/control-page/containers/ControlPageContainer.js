import { connect } from 'react-redux'

import { getCurrentStepName } from 'state/demos/selectors.js'
import ControlPage from '../components/ControlPage.js'



const mapStateToProps = state => {
  return {
    currentStepName: getCurrentStepName(state)
  }
};


const ControlPageContainer = connect(
  mapStateToProps,
  null
)(ControlPage);

export default ControlPageContainer
