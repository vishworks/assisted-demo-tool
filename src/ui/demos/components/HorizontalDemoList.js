import React, { Component } from 'react';
import { map } from 'lodash';

import HorizontalDemoListItem from './HorizontalDemoListItem.js';

import './HorizontalDemoList.css';

class HorizontalDemoList extends Component {
  render() {
    let className = ['HorizontalDemoList'];

    let demosRenderer = map(this.props.demos, demo => (
      <HorizontalDemoListItem
        key={demo.id}
        title={demo.title}
        active={demo.isCurrentDemo}
        stepsCount={demo.stepsCount}
        estimatedTime={demo.estimatedTime}
        onClick={ev => this.props.selectDemo(demo.id)}
      />
    ));

    return (
      <div className={className.join(' ')}>
        <div className="control-btn">
          <i className="fa fa-angle-double-left" />
        </div>
        {demosRenderer}
        <div className="control-btn">
          <i className="fa fa-angle-double-right" />
        </div>
      </div>
    );
  }
}

export default HorizontalDemoList;
