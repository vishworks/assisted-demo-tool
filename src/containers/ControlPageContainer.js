import { connect } from 'react-redux'

import { getCurrentStepName } from '../selectors'
import { setDisplayMode } from '../actions'
import DisplayModeEnum from '../enums/DisplayMode.js'
import ControlPage from '../components/ControlPage/ControlPage.js'



const mapStateToProps = state => {
  return {
    currentStepName: getCurrentStepName(state)
  }
};

const mapDispatchToProps = dispatch => {
  return {

  }
};

const ControlPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ControlPage);

export default ControlPageContainer