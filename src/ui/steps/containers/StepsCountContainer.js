import { connect } from 'react-redux';

import { getStepsCount } from 'state/demos/selectors.js';

import Span from 'ui/shared/components/Span.js';

const mapStateToProps = state => {
  return {
    text: getStepsCount(state) + ''
  };
};

const StepsCountContainer = connect(mapStateToProps, null)(Span);

export default StepsCountContainer;
