import React, { Component } from 'react';

import CurrentDemoNameContainer from 'ui/demos/containers/CurrentDemoNameContainer.js';

import './BigActiveDemoNameDisplay.css';

class BigActiveDemoNameDisplay extends Component {
  render() {
    return (
      <div className="BigActiveDemoNameDisplay">
        <div className="display-header">Demo</div>
        <div className="display-subtext">
          <CurrentDemoNameContainer />
        </div>
      </div>
    );
  }
}

export default BigActiveDemoNameDisplay;
