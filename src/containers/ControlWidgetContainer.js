import { connect } from 'react-redux'

import { getCurrentStepName } from '../selectors'
import { setDisplayMode } from '../actions'
import DisplayModeEnum from '../enums/DisplayMode.js'
import ControlWidget from '../components/ControlWidget.js'



const mapStateToProps = state => {
  return {
    currentStepName: getCurrentStepName(state)
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onClickMinimize: () => {
      dispatch(setDisplayMode(DisplayModeEnum.CONTROL_WIDGET_MINI));
    },
    setDisplayMode: (displayMode) => {
      dispatch(setDisplayMode(displayMode));
    }
  }
};

const ControlWidgetContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ControlWidget);

export default ControlWidgetContainer