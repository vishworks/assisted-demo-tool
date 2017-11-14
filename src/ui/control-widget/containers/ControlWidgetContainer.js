import { connect } from 'react-redux';

import { getActivePopup } from 'state/ui/selectors.js';
import { startDemoSettings } from 'state/demos/operations.js';
import { openPopup, closeAllPopups, setDisplayMode } from 'state/ui/actions.js';
import DisplayModeEnum from 'enums/DisplayMode.js';
import ControlWidget from '../components/ControlWidget.js';

const mapStateToProps = state => {
  return {
    activePopup: getActivePopup(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onClickMinimize: () => {
      dispatch(setDisplayMode(DisplayModeEnum.CONTROL_WIDGET_MINI));
    },
    setDisplayMode: displayMode => {
      dispatch(setDisplayMode(displayMode));
    },
    openPopup: popupId => {
      dispatch(openPopup(popupId));
    },
    closeAllPopups: () => {
      dispatch(closeAllPopups());
    },
    startDemoSettings: () => {
      dispatch(startDemoSettings());
    }
  };
};

const ControlWidgetContainer = connect(mapStateToProps, mapDispatchToProps)(
  ControlWidget
);

export default ControlWidgetContainer;
