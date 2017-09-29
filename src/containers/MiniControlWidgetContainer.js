import { connect } from 'react-redux'
import { controlWidgetMaximize } from '../actions'
import MiniControlWidget from '../components/MiniControlWidget.js'



const mapStateToProps = state => {
  return {
    status: state.controlWidget.status,
    personas: state.configuration.personas
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onClickMaximize: () => {
      dispatch(controlWidgetMaximize());
    }
  }
};

const MiniControlWidgetContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MiniControlWidget);

export default MiniControlWidgetContainer