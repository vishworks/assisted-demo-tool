import { connect } from 'react-redux'
import { controlWidgetMinimize } from '../actions'
import ControlWidget from '../components/ControlWidget.js'



const mapStateToProps = state => {
  return {
    status: state.controlWidget.status
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onClickMinimize: () => {
      dispatch(controlWidgetMinimize());
    }
  }
};

const ControlWidgetContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ControlWidget);

export default ControlWidgetContainer