import { connect } from 'react-redux'

import { getDemoOrdinatorList } from '../selectors'
import { excludeDemo, includeDemo } from '../actions'
import DisplayModeEnum from '../enums/DisplayMode.js'
import DemoOrdinator from '../components/DemoOrdinator/DemoOrdinator.js'



const mapStateToProps = state => {
  return {
    demos: getDemoOrdinatorList(state)
  }
};

const mapDispatchToProps = dispatch => {
  return {
    excludeDemo: (demoId, index) => {
      dispatch(excludeDemo(demoId, index));
    },
    includeDemo: (demoId, index) => {
      dispatch(includeDemo(demoId, index));
    }
  }
};

const DemoOrdinatorContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(DemoOrdinator);

export default DemoOrdinatorContainer