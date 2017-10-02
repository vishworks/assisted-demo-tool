import { connect } from 'react-redux'
import { controlWidgetMaximize, selectPersona } from '../actions'
import MiniControlWidget from '../components/MiniControlWidget.js'



const mapStateToProps = state => {
  return {
    status: state.controlWidget.status,
    personas: state.configuration.personas,
    currentPersona: state.viewPort.currentPersona
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