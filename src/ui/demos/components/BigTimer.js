import React, { Component } from 'react';

import TimeDisplay from 'ui/shared/components/TimeDisplay.js';

import './BigTimer.css';

class BigTimer extends Component {
  constructor(props) {
    super(props);

    this.onClickTogglePlay = this.onClickTogglePlay.bind(this);
    this.onClickReset = this.onClickReset.bind(this);

    this.state = {
      time: 0,
      running: false
    };

    this.estimatedSecs = props.estimatedTime * 60;
    this.warningSecs = props.warningTime * 60;
  }

  componentDidMount() {
    this.onClickTogglePlay();
  }

  render() {
    return (
      <div className={'BigTimer ' + this.getTimeStatusClass()}>
        <i className="fa fa-clock-o timer-icon" />

        <div className="timer-content">
          <div className="timer-header">Timer</div>
          <div className="timer-time">
            <TimeDisplay currentTime={this.state.time} />
          </div>
          <div className="timer-subtext">
            Estimate time {this.props.estimatedTime} minutes
          </div>
        </div>

        <div className="timer-controls">
          <i
            className={
              'timer-btn timer-pause-btn fa ' +
              (this.state.running ? 'fa-pause' : 'fa-play')
            }
            onClick={this.onClickTogglePlay}
          />
          <i
            className="fa fa-repeat timer-btn timer-reset-btn"
            onClick={this.onClickReset}
          />
        </div>
      </div>
    );
  }

  onClickTogglePlay() {
    if (!this.state.running) {
      this.intervalHandler = setInterval(() => {
        this.setState({ time: this.state.time + 1 });
      }, 1000);
    } else {
      clearInterval(this.intervalHandler);
    }
    this.setState({ running: !this.state.running });
  }

  onClickReset() {
    this.setState({
      time: 0
    });
  }

  getTimeStatusClass() {
    let remaining = this.estimatedSecs - this.state.time;
    if (remaining <= 0) {
      return 'danger';
    } else if (remaining <= this.warningSecs) {
      return 'warning';
    } else {
      return '';
    }
  }
}

export default BigTimer;
