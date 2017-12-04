import { connect } from 'react-redux';

import { getCurrentStepNumber } from 'state/demos/selectors.js';

import Span from 'ui/shared/components/Span.js';

const mapStateToProps = state => {
  return {
    text: getCurrentStepNumber(state) + ''
  };
};

const mapDispatchToProps = () => ({});

const CurrentStepNumberContainer = connect(mapStateToProps, mapDispatchToProps)(
  Span
);

export default CurrentStepNumberContainer;
