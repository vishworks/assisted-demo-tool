import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { map } from 'lodash';

import DemoOrdinatorListItem from './DemoOrdinatorListItem.js';

import './DemoOrdinator.css';

class DemoOrdinator extends Component {
  constructor(props) {
    super(props);
    this.onClickCheckbox = this.onClickCheckbox.bind(this);
    this.moveDemo = this.moveDemo.bind(this);
    this.onClickApply = this.onClickApply.bind(this);
  }

  render() {
    let list = map(this.props.demos, (demo, i) => {
      return (
        <DemoOrdinatorListItem
          key={demo.id}
          demoTitle={demo.title}
          demoIncluded={demo.included}
          onClickCheckbox={this.onClickCheckbox(demo.id, i)}
          onClickMoveUp={this.moveDemo(demo.id, i, i - 1)}
          onClickMoveDown={this.moveDemo(demo.id, i, i + 1)}
          isFirstItem={i === 0}
          isLastItem={i + 1 === this.props.demos.length}
        />
      );
    });

    return (
      <div className="DemoOrdinator">
        {list}
        <div className="btn-section">
          <button className="big-blue-btn" onClick={this.onClickApply}>
            Apply
          </button>
        </div>
      </div>
    );
  }

  onClickCheckbox(demoId, demoIndex) {
    return (ev, checked) => {
      if (checked) {
        this.props.includeDemo(demoId, demoIndex);
      } else {
        this.props.excludeDemo(demoId, demoIndex);
      }
    };
  }

  moveDemo(demoId, oldIndex, newIndex) {
    return ev => {
      this.props.moveDemo(demoId, oldIndex, newIndex);
    };
  }

  onClickApply() {
    this.props.applyDemoSettings(this.props.demos);
    this.props.closeAllPopups();
  }
}

const DemoPropType = PropTypes.shape({
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  included: PropTypes.bool.isRequired
});

DemoOrdinator.propTypes = {
  includeDemo: PropTypes.func.isRequired,
  excludeDemo: PropTypes.func.isRequired,
  moveDemo: PropTypes.func.isRequired,
  applyDemoSettings: PropTypes.func.isRequired,
  closeAllPopups: PropTypes.func.isRequired,
  demos: PropTypes.arrayOf(DemoPropType).isRequired
};

export default DemoOrdinator;
