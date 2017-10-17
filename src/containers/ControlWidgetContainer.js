import { connect } from 'react-redux'

import { getCurrentStepName, getActivePopup } from '../selectors'
import { setDisplayMode, openPopup } from '../actions'
import DisplayModeEnum from '../enums/DisplayMode.js'
import ControlWidget from '../components/ControlWidget/ControlWidget.js'



const mapStateToProps = state => {
  return {
    currentStepName: getCurrentStepName(state),
    activePopup: getActivePopup(state)
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onClickMinimize: () => {
      dispatch(setDisplayMode(DisplayModeEnum.CONTROL_WIDGET_MINI));
    },
    setDisplayMode: (displayMode) => {
      dispatch(setDisplayMode(displayMode));
    },
    openPopup: (popupId) => {
      dispatch(openPopup(popupId));
    }
  }
};

const ControlWidgetContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ControlWidget);

export default ControlWidgetContainer