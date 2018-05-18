import { connect } from 'react-redux';

import { getCurrentStepPresenterContent } from 'state/demos/selectors.js';

import HtmlContent from 'ui/shared/components/HtmlContent.js';

const mapStateToProps = state => {
  return {
    html: getCurrentStepPresenterContent(state)
  };
};

const mapDispatchToProps = () => ({});

const CurrentStepPresenterContentContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(HtmlContent);

export default CurrentStepPresenterContentContainer;
