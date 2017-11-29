import { connect } from 'react-redux';

import { getCurrentDemoHighlights } from 'state/demos/selectors.js';
import { swapHighlights, toggleHighlightStar } from 'state/demos/actions.js';

import HighlightList from 'ui/demos/components/HighlightList.js';

const mapStateToProps = state => {
  return {
    highlights: getCurrentDemoHighlights(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    swapHighlights: (oldIndex, newIndex) =>
      dispatch(swapHighlights(oldIndex, newIndex)),
    toggleHighlightStar: index => dispatch(toggleHighlightStar(index))
  };
};

const CurrentDemoHighlightListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(HighlightList);

export default CurrentDemoHighlightListContainer;
