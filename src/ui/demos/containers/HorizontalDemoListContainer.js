import { connect } from 'react-redux';
import { map } from 'lodash';

import {
  getSortedIncludedDemos,
  getCurrentDemoId
} from 'state/demos/selectors.js';
import { selectDemo } from 'state/demos/actions.js';

import HorizontalDemoList from '../components/HorizontalDemoList.js';

const mapStateToProps = state => {
  let includedDemos = getSortedIncludedDemos(state),
    currentDemoId = getCurrentDemoId(state),
    demoListModel = map(includedDemos, demo => ({
      id: demo.id,
      title: demo.title,
      stepsCount: demo.steps.length,
      estimatedTime: demo.estimatedTime,
      isCurrentDemo: demo.id === currentDemoId
    }));

  return {
    demos: demoListModel
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
