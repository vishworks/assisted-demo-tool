import { connect } from 'react-redux'

import { getCurrentStepName } from '../state/demos/localSelectors.js'
import DisplayModeEnum from '../enums/DisplayMode.js'
import ControlPage from '../components/ControlPage/ControlPage.js'



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