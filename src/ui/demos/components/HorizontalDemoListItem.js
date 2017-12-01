import React, { Component } from 'react';

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

export default HorizontalDemoListItem;
