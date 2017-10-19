import { connect } from 'react-redux'

import { getActivePopup } from '../selectors'
import { setDisplayMode, openPopup, closeAllPopups } from '../actions'
import DisplayModeEnum from '../enums/DisplayMode.js'
import ControlWidget from '../components/ControlWidget/ControlWidget.js'

import { startDemoSettings } from '../state/demos/actions.js'
import { getDemos } from '../state/demos/selectors.js'

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
    },
    closeAllPopups: () => {
      dispatch(closeAllPopups());
    },
    startDemoSettings: () => {
      dispatch(startDemoSettings());
    }
  }
};

const ControlWidgetContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ControlWidget);

export default ControlWidgetContainer