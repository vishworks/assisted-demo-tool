import { connect } from 'react-redux';

import { getCurrentDemoHighlights } from 'state/demos/selectors.js';

import HighlightList from 'ui/demos/components/HighlightList.js';

const mapStateToProps = state => {
  return {
    highlights: getCurrentDemoHighlights(state)
  };
};

const CurrentDemoHighlightListContainer = connect(mapStateToProps, null)(
  HighlightList
);

export default CurrentDemoHighlightListContainer;
