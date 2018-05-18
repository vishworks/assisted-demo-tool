import { connect } from 'react-redux';

import { getCurrentStepTrainingContent } from 'state/demos/selectors.js';

import HtmlContent from 'ui/shared/components/HtmlContent.js';

const mapStateToProps = state => {
  return {
    html: getCurrentStepTrainingContent(state)
  };
};

const mapDispatchToProps = () => ({});

const CurrentStepTrainingContentContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(HtmlContent);

export default CurrentStepTrainingContentContainer;
