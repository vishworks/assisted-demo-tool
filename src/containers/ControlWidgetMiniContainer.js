import { connect } from 'react-redux'
import { getControlWidgetStatus, getCurrentPersonaId, getCurrentPersonaImageUrl, getVisiblePersonas } from '../selectors'
import { controlWidgetMaximize, selectPersona } from '../actions'
import ControlWidgetMini from '../components/ControlWidgetMini/ControlWidgetMini.js'



const mapStateToProps = state => {
  return {
    status: getControlWidgetStatus(state),
    personas: getVisiblePersonas(state),
    currentPersonaId: getCurrentPersonaId(state),
    currentPersonaImageUrl: getCurrentPersonaImageUrl(state)
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onClickMaximize: () => {
      dispatch(controlWidgetMaximize());
    },
    selectPersona(personaId) {
      dispatch(selectPersona(personaId));
    }
  }
};

const ControlWidgetMiniContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ControlWidgetMini);

export default ControlWidgetMiniContainer