import { connect } from 'react-redux'

import { getControlWidgetStatus } from '../selectors'
import { controlWidgetMinimize, asyncLoadConfig } from '../actions'
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
    },
    loadConfig: () => {
      dispatch(asyncLoadConfig());
    }
  }
};

const ControlWidgetContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ControlWidget);

export default ControlWidgetContainer