import React, { Component } from 'react';
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
        <h3 className="step-title">{this.props.stepTitle}</h3>
        <PseudoCheckbox
          text="Presenter View"
          checked={displayBullets}
          onClick={this.onClickShowBullets}
          disabled={cannotChoose}
        />
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
    let bulletList = this.props.bullets.map(bullet => {
      return <li class="step-bullet">{bullet}</li>;
    });

    return (
      <div className="bullets">
        <ul>{bulletList}</ul>
      </div>
    );
  }

  onClickShowBullets() {
    this.props.showBullets(!this.props.displayBullets);
  }
}

export default StepContent;
