import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TimeDisplay from 'ui/shared/components/TimeDisplay.js';

import './BigTimer.css';

// calculates the total time in seconds for an array of demos
const getDemosTotalTime = demos =>
  demos.reduce((acc, demo) => acc + (demo.estimatedTime || 0), 0) * 60;

class BigTimer extends Component {
  constructor(props) {
    super(props);

    this.onClickTogglePlay = this.onClickTogglePlay.bind(this);
    this.onClickReset = this.onClickReset.bind(this);
    this.toggleTimeType = this.toggleTimeType.bind(this);

    this.state = {
      totalTime: 0,
      demoTime: 0,
      showingDemoTime: true,
      running: false
    };
  }

  componentDidMount() {
    this.onClickTogglePlay();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.currentDemoId !== this.props.currentDemoId) {
      this.setState({
        demoTime: 0
      });
    }
  }

  toggleTimeType() {
    this.setState({
      showingDemoTime: !this.state.showingDemoTime
    });
  }

  render() {
    const timeTypeLetter = this.state.showingDemoTime ? 'D' : 'T';
    const timeDisplay = this.state.showingDemoTime ? (
      <TimeDisplay currentTime={this.state.demoTime} />
    ) : (
      <TimeDisplay currentTime={this.state.totalTime} />
    );
    return (
      <div className={'BigTimer ' + this.getTimeStatusClass()}>
        <div className="timer-icon-group" onClick={this.toggleTimeType}>
          <i className="fa fa-clock-o timer-icon" />
          <span className="time-type-icon">{timeTypeLetter}</span>
        </div>

        <div className="timer-time">{timeDisplay}</div>

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
    );
  }

  onClickTogglePlay() {
    if (!this.state.running) {
      this.intervalHandler = setInterval(() => {
        this.setState({
          demoTime: this.state.demoTime + 1,
          totalTime: this.state.totalTime + 1
        });
      }, 1000);
    } else {
      clearInterval(this.intervalHandler);
    }
    this.setState({ running: !this.state.running });
  }

  onClickReset() {
    this.setState({
      demoTime: 0,
      totalTime: 0
    });
  }

  getTimeStatusClass() {
    const { includedDemos, currentDemoId } = this.props;
    const demoIndex = includedDemos.findIndex(
      demo => demo.id === currentDemoId
    );
    const totalET = getDemosTotalTime(includedDemos);
    const untilCurrentDemoTotalET = getDemosTotalTime(
      includedDemos.slice(0, demoIndex + 1)
    );

    if (this.state.totalTime >= totalET) {
      return 'danger';
    }
    if (this.state.totalTime >= untilCurrentDemoTotalET) {
      return 'warning';
    }
    return '';
  }
}

BigTimer.propTypes = {
  includedDemos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      estimatedTime: PropTypes.number.isRequired
    })
  ).isRequired,
  currentDemoId: PropTypes.string.isRequired
};

export default BigTimer;
