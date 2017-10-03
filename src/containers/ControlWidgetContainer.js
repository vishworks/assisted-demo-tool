import { connect } from 'react-redux'

import { getControlWidgetStatus } from '../selectors'
import { controlWidgetMinimize } from '../actions'
import ControlWidget from '../components/ControlWidget.js'



const mapStateToProps = state => {
  return {
    status: getControlWidgetStatus(state)
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