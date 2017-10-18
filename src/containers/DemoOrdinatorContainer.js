import { connect } from 'react-redux'

// import { getDemos } from '../selectors'
// import { excludeDemo, includeDemo, moveDemo } from '../actions'
import DisplayModeEnum from '../enums/DisplayMode.js'
import DemoOrdinator from '../components/DemoOrdinator/DemoOrdinator.js'


import { getTempDemos } from '../state/demos/selectors.js'

import { closeAllPopups } from '../actions'
import { excludeDemo, includeDemo, moveDemo, applyDemoSettings } from '../state/demos/actions.js'

const mapStateToProps = state => {
  return {
    demos: getTempDemos(state.demos)
  }
};

const mapDispatchToProps = dispatch => {
  return {
    closeAllPopups: (demoId, index) => {
      dispatch(closeAllPopups(demoId, index));
    },
    excludeDemo: (demoId, index) => {
      dispatch(excludeDemo(demoId, index));
    },
    includeDemo: (demoId, index) => {
      dispatch(includeDemo(demoId, index));
    },
    moveDemo: (demoId, oldIndex, newIndex) => {
      dispatch(moveDemo(demoId, oldIndex, newIndex));
    },
    applyDemoSettings: () => {
      dispatch(applyDemoSettings());
    }
  }
};

const DemoOrdinatorContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(DemoOrdinator);

export default DemoOrdinatorContainer