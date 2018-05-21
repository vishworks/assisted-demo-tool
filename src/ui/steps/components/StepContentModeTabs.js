import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './StepContentModeTabs.css';

class StepContentModeTabs extends Component {
  render() {
    const {
      className,
      displayPresenterContent,
      showPresenterContent
    } = this.props;

    const classNameAr = ['StepContentModeTabs'];
    if (className) {
      classNameAr.push(className);
    }

    return (
      <div className={classNameAr.join(' ')}>
        <div
          className={`tab-button${displayPresenterContent ? ' active' : ''}`}
          onClick={ev => {
            !displayPresenterContent && showPresenterContent(true);
          }}
        >
          <i className="tab-button-icon fa fa-list" />
          <span className="tab-button-label">Presenter Mode</span>
        </div>
        <div
          className={`tab-button${!displayPresenterContent ? ' active' : ''}`}
          onClick={ev => {
            displayPresenterContent && showPresenterContent(false);
          }}
        >
          <i className="tab-button-icon fa fa-bullseye" />
          <span className="tab-button-label">Training Mode</span>
        </div>
      </div>
    );
  }
}

StepContentModeTabs.propTypes = {
  displayPresenterContent: PropTypes.bool.isRequired,
  showPresenterContent: PropTypes.func.isRequired
};

export default StepContentModeTabs;
