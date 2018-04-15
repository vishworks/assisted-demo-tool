import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { isEmpty } from 'lodash';

import PseudoCheckbox from 'ui/shared/components/PseudoCheckbox.js';

import './StepContent.css';

// FIXME refactor using HtmlContent and CurrentStepBulletsContainer

class StepContent extends Component {
  constructor(props) {
    super(props);
    this.renderBullets = this.renderBullets.bind(this);
    this.renderContent = this.renderContent.bind(this);
    this.onClickShowBullets = this.onClickShowBullets.bind(this);
  }

  render() {
    let displayBullets,
      contentRenderer,
      cannotChoose = false;

    if (isEmpty(this.props.content)) {
      displayBullets = true;
      cannotChoose = true;
    } else if (isEmpty(this.props.bullets)) {
      displayBullets = false;
      cannotChoose = true;
    } else {
      displayBullets = this.props.displayBullets;
    }

    if (displayBullets) {
      contentRenderer = this.renderBullets();
    } else {
      contentRenderer = this.renderContent();
    }

    return (
      <div className="StepContent">
        <PseudoCheckbox
          text="Presenter View"
          checked={displayBullets}
          onClick={this.onClickShowBullets}
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

  renderBullets() {
    let bulletList = this.props.bullets.map((bullet, i) => {
      return (
        <li key={'step-bullet-' + i} className="step-bullet">
          {bullet}
        </li>
      );
    });

    return <ul className="bullets">{bulletList}</ul>;
  }

  onClickShowBullets() {
    this.props.showBullets(!this.props.displayBullets);
  }
}

StepContent.propTypes = {
  showBullets: PropTypes.func.isRequired,
  displayBullets: PropTypes.bool.isRequired,
  stepTitle: PropTypes.string.isRequired,
  content: PropTypes.string,
  bullets: PropTypes.arrayOf(PropTypes.string)
};

export default StepContent;
