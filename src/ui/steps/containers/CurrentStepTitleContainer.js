import { connect } from 'react-redux';

import { getCurrentStepTitle } from 'state/demos/selectors.js';

import Span from 'ui/shared/components/Span.js';

const mapStateToProps = state => {
  return {
    text: getCurrentStepTitle(state) + ''
  };
};

const mapDispatchToProps = () => ({});

const CurrentStepTitleContainer = connect(mapStateToProps, mapDispatchToProps)(
  Span
);

export default CurrentStepTitleContainer;
