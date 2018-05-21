import { connect } from 'react-redux';

import { getDisplayPresenterContent } from 'state/ui/selectors.js';
import { showPresenterContent } from 'state/ui/actions.js';
import StepContentModeTabs from '../components/StepContentModeTabs.js';

const mapStateToProps = state => {
  return {
    displayPresenterContent: getDisplayPresenterContent(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    showPresenterContent: show => {
      dispatch(showPresenterContent(show));
    }
  };
};

const StepContentModeTabsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(StepContentModeTabs);

export default StepContentModeTabsContainer;
