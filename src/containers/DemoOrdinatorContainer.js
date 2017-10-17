import { connect } from 'react-redux'

import { getDemos } from '../selectors'
import { setDisplayMode, openPopup } from '../actions'
import DisplayModeEnum from '../enums/DisplayMode.js'
import DemoOrdinator from '../components/DemoOrdinator/DemoOrdinator.js'



const mapStateToProps = state => {
  return {
    demos: getDemos(state)
  }
};

const mapDispatchToProps = dispatch => {
  return {

  }
};

const DemoOrdinatorContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(DemoOrdinator);

export default DemoOrdinatorContainer