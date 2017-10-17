import { connect } from 'react-redux'

import { getActivePopup } from '../selectors'
import { setDisplayMode, openPopup } from '../actions'
import DisplayModeEnum from '../enums/DisplayMode.js'
import ControlWidget from '../components/ControlWidget/ControlWidget.js'



const mapStateToProps = state => {
  return {
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