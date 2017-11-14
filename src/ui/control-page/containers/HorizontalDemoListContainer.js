import { connect } from 'react-redux';

import { getDemos, getCurrentDemoId } from 'state/demos/selectors.js';
import { selectDemo } from 'state/demos/actions.js';

import HorizontalDemoList from '../components/HorizontalDemoList.js';

const mapStateToProps = state => {
  return {
    demos: getDemos(state),
    currentDemoId: getCurrentDemoId(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    selectDemo: demoId => dispatch(selectDemo(demoId))
  };
};

const HorizontalDemoListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(HorizontalDemoList);

export default HorizontalDemoListContainer;
