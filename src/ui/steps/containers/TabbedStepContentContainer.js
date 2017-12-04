import { connect } from 'react-redux';
import { getDisplayBullets } from 'state/ui/selectors.js';
import {
  getCurrentStepContent,
  getCurrentStepHasContent,
  getCurrentStepBullets,
  getCurrentStepHasBullets
} from 'state/demos/selectors.js';
import { showBullets } from 'state/ui/actions.js';
import TabbedStepContent from '../components/TabbedStepContent.js';

const mapStateToProps = state => {
  return {
    hasContent: getCurrentStepHasContent(state),
    content: getCurrentStepContent(state),
    hasBullets: getCurrentStepHasBullets(state),
    bullets: getCurrentStepBullets(state),
    displayBullets: getDisplayBullets(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    showBullets: show => {
      dispatch(showBullets(show));
    }
  };
};

const TabbedStepContentContainer = connect(mapStateToProps, mapDispatchToProps)(
  TabbedStepContent
);

export default TabbedStepContentContainer;
