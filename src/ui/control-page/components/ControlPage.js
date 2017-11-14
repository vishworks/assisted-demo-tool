import React, { Component } from 'react';

import HorizontalDemoListContainer from '../containers/HorizontalDemoListContainer.js';

import './ControlPage.css';

class ControlPage extends Component {
  render() {
    let className = ['ControlPage'];

    return (
      <div className={className.join(' ')}>
        <div className="header">
          <HorizontalDemoListContainer />
        </div>
        <div className="small-row" />
        <div className="main-content" />
      </div>
    );
  }
}

export default ControlPage;
