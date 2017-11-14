import { connect } from 'react-redux';
import {
  getCurrentPersonaId,
  getCurrentPersonaImageUrl,
  getVisiblePersonas
} from 'state/personas/selectors.js';
import { selectPersona } from 'state/personas/operations.js';
import { setDisplayMode } from 'state/ui/actions.js';
import DisplayModeEnum from 'enums/DisplayMode.js';
import ControlWidgetMini from '../components/ControlWidgetMini.js';

const mapStateToProps = state => {
  return {
    personas: getVisiblePersonas(state),
    currentPersonaId: getCurrentPersonaId(state),
    currentPersonaImageUrl: getCurrentPersonaImageUrl(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onClickMaximize: () => {
      dispatch(setDisplayMode(DisplayModeEnum.CONTROL_WIDGET));
    },
    selectPersona(personaId) {
      dispatch(selectPersona(personaId));
    }
  };
};

const ControlWidgetMiniContainer = connect(mapStateToProps, mapDispatchToProps)(
  ControlWidgetMini
);

export default ControlWidgetMiniContainer;
