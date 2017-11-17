import React, { Component } from 'react';

import './BigTimer.css';

class BigTimer extends Component {
  render() {
    return (
      <div className="BigTimer">
        <i className="fa fa-clock-o timer-icon" />

        <div className="timer-content">
          <div className="timer-header">Timer</div>
          <div className="timer-time">6.15</div>
          <div className="timer-subtext">Estimate time 5 minutes</div>
        </div>

        <div className="timer-controls">
          <i className="fa fa-pause" />
          <i className="fa fa-repeat" />
        </div>
      </div>
    );
  }
}

export default BigTimer;
