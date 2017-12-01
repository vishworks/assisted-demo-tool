import { connect } from 'react-redux';

import { getCurrentStepContent } from 'state/demos/selectors.js';

import HtmlContent from 'ui/shared/components/HtmlContent.js';

const mapStateToProps = state => {
  return {
    html: getCurrentStepContent(state) + ''
  };
};

const CurrentStepContentContainer = connect(mapStateToProps, null)(HtmlContent);

export default CurrentStepContentContainer;
