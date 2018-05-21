import { connect } from 'react-redux';

import {
  getSortedIncludedDemos,
  getCurrentDemoId
} from 'state/demos/selectors.js';

import BigTimer from '../components/BigTimer.js';

const mapStateToProps = state => {
  return {
    includedDemos: getSortedIncludedDemos(state),
    currentDemoId: getCurrentDemoId(state)
  };
};

const BigTimerContainer = connect(mapStateToProps, null)(BigTimer);

export default BigTimerContainer;
