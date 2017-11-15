import React, { Component } from 'react';

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
        <div className="demo-name">{this.props.demoName}</div>
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

export default DemoOrdinatorListItem;
