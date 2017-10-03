import { connect } from 'react-redux'
import { getControlWidgetStatus, getCurrentPersonaId, getPersonas } from '../selectors'
import { controlWidgetMaximize, selectPersona } from '../actions'
import MiniControlWidget from '../components/MiniControlWidget.js'



const mapStateToProps = state => {
  return {
    status: getControlWidgetStatus(state),
    personas: getPersonas(state),
    currentPersona: getCurrentPersonaId(state)
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

const MiniControlWidgetContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MiniControlWidget);

export default MiniControlWidgetContainer