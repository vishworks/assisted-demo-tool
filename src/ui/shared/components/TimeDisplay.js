import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TimeDisplay extends Component {
  render() {
    return (
      <span className="TimeDisplay">
        {this.getTimeString(this.props.currentTime)}
      </span>
    );
  }

  getTimeString(currentTime) {
    let mins = Math.floor(currentTime / 60),
      secs = currentTime % 60;
    return mins + ':' + (secs < 10 ? '0' : '') + secs;
  }
}

TimeDisplay.propTypes = {
  currentTime: PropTypes.number.isRequired
};

export default TimeDisplay;
