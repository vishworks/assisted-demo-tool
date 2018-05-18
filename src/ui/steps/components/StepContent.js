import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { isEmpty } from 'lodash';

import PseudoCheckbox from 'ui/shared/components/PseudoCheckbox.js';

import './StepContent.css';

// FIXME refactor using HtmlContent and CurrentStepPresenterContentContainer

class StepContent extends Component {
  constructor(props) {
    super(props);
    this.renderPresenterContent = this.renderPresenterContent.bind(this);
    this.renderContent = this.renderContent.bind(this);
    this.onClickShowPresenterContent = this.onClickShowPresenterContent.bind(
      this
    );
  }

  render() {
    let displayPresenterContent,
      contentRenderer,
      cannotChoose = false;

    if (isEmpty(this.props.content)) {
      displayPresenterContent = true;
      cannotChoose = true;
    } else if (isEmpty(this.props.presenterContent)) {
      displayPresenterContent = false;
      cannotChoose = true;
    } else {
      displayPresenterContent = this.props.displayPresenterContent;
    }

    if (displayPresenterContent) {
      contentRenderer = this.renderPresenterContent();
    } else {
      contentRenderer = this.renderContent();
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
        {contentRenderer}
      </div>
    );
  }

  renderContent() {
    return (
      <div
        className="content"
        dangerouslySetInnerHTML={{ __html: this.props.content }}
      />
    );
  }

  renderPresenterContent() {
    return (
      <div
        className="content"
        dangerouslySetInnerHTML={{ __html: this.props.presenterContent }}
      />
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
  content: PropTypes.string,
  presenterContent: PropTypes.arrayOf(PropTypes.string)
};

export default StepContent;
