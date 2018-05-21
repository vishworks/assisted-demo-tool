import React, { Component } from 'react';
import PropTypes from 'prop-types';

import CustomCheckBox from 'ui/shared/components/CustomCheckBox.js';
import SortButton from 'ui/shared/components/SortButton.js';

import './DemoOrdinatorListItem.css';

class DemoOrdinatorListItem extends Component {
  render() {
    const classNameAr = ['DemoOrdinatorListItem'];
    if (this.props.className) {
      classNameAr.push(this.props.className);
    }
    if (!this.props.demoCurrentlyIncluded) {
      classNameAr.push('excluded');
    }
    return (
      <div className={classNameAr.join(' ')}>
        <CustomCheckBox
          checked={this.props.demoIncluded}
          onClick={this.props.onClickCheckbox}
        />
        <div className="demo-title" onClick={this.props.onClickDemoName}>
          {this.props.demoTitle}
        </div>
        <SortButton
          onClickUp={this.props.onClickMoveUp}
          onClickDown={this.props.onClickMoveDown}
          disableUp={this.props.isFirstItem}
          disableDown={this.props.isLastItem}
        />
      </div>
    );
  }
}

DemoOrdinatorListItem.propTypes = {
  className: PropTypes.string,
  demoIncluded: PropTypes.bool.isRequired,
  demoCurrentlyIncluded: PropTypes.bool.isRequired,
  onClickCheckbox: PropTypes.func.isRequired,
  demoTitle: PropTypes.string.isRequired,
  onClickMoveUp: PropTypes.func.isRequired,
  onClickMoveDown: PropTypes.func.isRequired,
  onClickDemoName: PropTypes.func.isRequired,
  isFirstItem: PropTypes.bool.isRequired,
  isLastItem: PropTypes.bool.isRequired
};

export default DemoOrdinatorListItem;
