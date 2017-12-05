import React, { Component } from 'react';
import PropTypes from 'prop-types';

class HorizontalDemoListItem extends Component {
  render() {
    let itemClass = 'HorizontalDemoListItem';
    if (this.props.active) {
      itemClass += ' active';
    }
    return (
      <div className={itemClass} onClick={this.props.onClick}>
        <div className="demo-title">{this.props.title}</div>
        <div className="demo-subtitle">
          {this.props.stepsCount} Steps | {this.props.estimatedTime}:00min
        </div>
      </div>
    );
  }
}

HorizontalDemoListItem.propTypes = {
  onClick: PropTypes.func.isRequired,
  active: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  stepsCount: PropTypes.number.isRequired,
  estimatedTime: PropTypes.number.isRequired
};

export default HorizontalDemoListItem;
