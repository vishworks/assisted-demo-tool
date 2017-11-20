import { connect } from 'react-redux';

import { getCurrentDemoEstimatedTime } from 'state/demos/selectors.js';

import BigTimer from '../components/BigTimer.js';

const mapStateToProps = state => {
  return {
    warningTime: 1,
    estimatedTime: getCurrentDemoEstimatedTime(state) || 0
  };
};

const BigTimerContainer = connect(mapStateToProps, null)(BigTimer);

export default BigTimerContainer;
