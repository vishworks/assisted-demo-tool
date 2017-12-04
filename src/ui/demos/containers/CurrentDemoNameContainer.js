import { connect } from 'react-redux';

import { getCurrentDemoName } from 'state/demos/selectors.js';

import Span from 'ui/shared/components/Span.js';

const mapStateToProps = state => {
  return {
    text: getCurrentDemoName(state)
  };
};

const mapDispatchToProps = () => ({});

const CurrentDemoNameContainer = connect(mapStateToProps, mapDispatchToProps)(
  Span
);

export default CurrentDemoNameContainer;
