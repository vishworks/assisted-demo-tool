import { connect } from 'react-redux'

import { getDemos } from '../selectors'
import { excludeDemo, includeDemo, moveDemo } from '../actions'
import DisplayModeEnum from '../enums/DisplayMode.js'
import DemoOrdinator from '../components/DemoOrdinator/DemoOrdinator.js'



const mapStateToProps = state => {
  return {
    demos: getDemos(state)
  }
};

const mapDispatchToProps = dispatch => {
  return {
    excludeDemo: (demoId, index) => {
      dispatch(excludeDemo(demoId, index));
    },
    includeDemo: (demoId, index) => {
      dispatch(includeDemo(demoId, index));
    },
    moveDemo: (demoId, oldIndex, newIndex) => {
      dispatch(moveDemo(demoId, oldIndex, newIndex));
    }
  }
};

const DemoOrdinatorContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(DemoOrdinator);

export default DemoOrdinatorContainer