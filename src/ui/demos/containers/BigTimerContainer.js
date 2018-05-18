import { connect } from 'react-redux';

import { getIncludedDemos, getCurrentDemoId } from 'state/demos/selectors.js';

import BigTimer from '../components/BigTimer.js';

const mapStateToProps = state => {
  return {
    includedDemos: getIncludedDemos(state),
    currentDemoId: getCurrentDemoId(state)
  };
};

const BigTimerContainer = connect(mapStateToProps, null)(BigTimer);

export default BigTimerContainer;
