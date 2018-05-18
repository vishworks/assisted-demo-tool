import { connect } from 'react-redux';
import { getDisplayPresenterContent } from 'state/ui/selectors.js';
import {
  getCurrentStepContent,
  getCurrentStepPresenterContent,
  getCurrentStepTitle
} from 'state/demos/selectors.js';
import { showPresenterContent } from 'state/ui/actions.js';
import StepContent from '../components/StepContent.js';

const mapStateToProps = state => {
  return {
    content: getCurrentStepContent(state),
    presenterContent: getCurrentStepPresenterContent(state),
    displayPresenterContent: getDisplayPresenterContent(state),
    stepTitle: getCurrentStepTitle(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    showPresenterContent: show => {
      dispatch(showPresenterContent(show));
    }
  };
};

const StepContentContainer = connect(mapStateToProps, mapDispatchToProps)(
  StepContent
);

export default StepContentContainer;
