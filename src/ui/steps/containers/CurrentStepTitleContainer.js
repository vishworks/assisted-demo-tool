import { connect } from 'react-redux';

import { getCurrentStepTitle } from 'state/demos/selectors.js';

import Span from 'ui/shared/components/Span.js';

const mapStateToProps = state => {
  return {
    text: getCurrentStepTitle(state) + ''
  };
};

const CurrentStepTitleContainer = connect(mapStateToProps, null)(Span);

export default CurrentStepTitleContainer;
