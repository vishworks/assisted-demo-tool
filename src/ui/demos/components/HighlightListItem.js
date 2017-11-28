import React, { Component } from 'react';

class HighlightListItem extends Component {
  render() {
    return (
      <div className="HighlightListItem">
        <div>{this.props.text}</div>
      </div>
    );
  }
}

export default HighlightListItem;
