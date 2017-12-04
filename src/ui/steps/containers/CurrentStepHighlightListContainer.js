import { connect } from 'react-redux';

import { getCurrentStepHighlights } from 'state/demos/selectors.js';
import { swapHighlights, toggleHighlightStar } from 'state/demos/actions.js';

import HighlightList from '../components/HighlightList.js';

const mapStateToProps = state => {
  return {
    highlights: getCurrentStepHighlights(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    swapHighlights: (oldIndex, newIndex) =>
      dispatch(swapHighlights(oldIndex, newIndex)),
    toggleHighlightStar: index => dispatch(toggleHighlightStar(index))
  };
};

const CurrentStepHighlightListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(HighlightList);

export default CurrentStepHighlightListContainer;
