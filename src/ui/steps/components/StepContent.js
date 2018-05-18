import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { isEmpty } from 'lodash';

import PseudoCheckbox from 'ui/shared/components/PseudoCheckbox.js';

import './StepContent.css';

// FIXME refactor using HtmlContent and CurrentStepPresenterContentContainer

class StepContent extends Component {
  constructor(props) {
    super(props);
    this.onClickShowPresenterContent = this.onClickShowPresenterContent.bind(
      this
    );
  }

  render() {
    let displayPresenterContent,
      htmlContent,
      cannotChoose = false;

    if (isEmpty(this.props.trainingContent)) {
      displayPresenterContent = true;
      cannotChoose = true;
    } else if (isEmpty(this.props.presenterContent)) {
      displayPresenterContent = false;
      cannotChoose = true;
    } else {
      displayPresenterContent = this.props.displayPresenterContent;
    }

    if (displayPresenterContent) {
      htmlContent = this.props.presenterContent;
    } else {
      htmlContent = this.props.trainingContent;
    }

    return (
      <div className="StepContent">
        <PseudoCheckbox
          text="Presenter View"
          checked={displayPresenterContent}
          onClick={this.onClickShowPresenterContent}
          disabled={cannotChoose}
        />
        <h3 className="step-title">{this.props.stepTitle}</h3>
        <div
          className="content"
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        />
      </div>
    );
  }

  onClickShowPresenterContent() {
    this.props.showPresenterContent(!this.props.displayPresenterContent);
  }
}

StepContent.propTypes = {
  showPresenterContent: PropTypes.func.isRequired,
  displayPresenterContent: PropTypes.bool.isRequired,
  stepTitle: PropTypes.string.isRequired,
  trainingContent: PropTypes.string,
  presenterContent: PropTypes.string
};

export default StepContent;
