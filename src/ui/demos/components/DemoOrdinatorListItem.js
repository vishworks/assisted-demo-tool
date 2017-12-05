import React, { Component } from 'react';
import PropTypes from 'prop-types';

import CustomCheckBox from 'ui/shared/components/CustomCheckBox.js';
import SortButton from 'ui/shared/components/SortButton.js';

import './DemoOrdinatorListItem.css';

class DemoOrdinatorListItem extends Component {
  render() {
    return (
      <div className="DemoOrdinatorListItem">
        <CustomCheckBox
          checked={this.props.demoIncluded}
          onClick={this.props.onClickCheckbox}
        />
        <div className="demo-title">{this.props.demoTitle}</div>
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
  demoIncluded: PropTypes.bool.isRequired,
  onClickCheckbox: PropTypes.func.isRequired,
  demoTitle: PropTypes.string.isRequired,
  onClickMoveUp: PropTypes.func.isRequired,
  onClickMoveDown: PropTypes.func.isRequired,
  isFirstItem: PropTypes.bool.isRequired,
  isLastItem: PropTypes.bool.isRequired
};

export default DemoOrdinatorListItem;
