import React, { Component } from 'react';
import PropTypes from 'prop-types';

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

const DemoPropType = PropTypes.shape({
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  isCurrentDemo: PropTypes.bool.isRequired,
  stepsCount: PropTypes.number.isRequired,
  estimatedTime: PropTypes.number.isRequired
});

HorizontalDemoList.propTypes = {
  selectDemo: PropTypes.func.isRequired,
  demos: PropTypes.arrayOf(DemoPropType).isRequired
};

export default HorizontalDemoList;
