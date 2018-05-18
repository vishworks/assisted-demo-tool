import { connect } from 'react-redux';
import { getDisplayPresenterContent } from 'state/ui/selectors.js';
import {
  getCurrentStepHasContent,
  getCurrentStepHasPresenterContent
} from 'state/demos/selectors.js';
import { showPresenterContent } from 'state/ui/actions.js';
import TabbedStepContent from '../components/TabbedStepContent.js';

const mapStateToProps = state => {
  return {
    hasContent: getCurrentStepHasContent(state),
    hasPresenterContent: getCurrentStepHasPresenterContent(state),
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

const TabbedStepContentContainer = connect(mapStateToProps, mapDispatchToProps)(
  TabbedStepContent
);

export default TabbedStepContentContainer;
