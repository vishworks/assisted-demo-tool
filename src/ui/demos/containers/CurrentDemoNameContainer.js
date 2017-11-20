import { connect } from 'react-redux';

import { getCurrentDemoName } from 'state/demos/selectors.js';

import Span from 'ui/shared/components/Span.js';

const mapStateToProps = state => {
  return {
    text: getCurrentDemoName(state)
  };
};

const CurrentDemoNameContainer = connect(mapStateToProps, null)(Span);

export default CurrentDemoNameContainer;
