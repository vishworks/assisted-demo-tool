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
        name={demo.name}
        active={this.props.currentDemoId === demo.id}
        onClick={ev => this.props.selectDemo(demo.id)}
      />
    ));

    return <div className={className.join(' ')}>{demosRenderer}</div>;
  }
}

export default HorizontalDemoList;
