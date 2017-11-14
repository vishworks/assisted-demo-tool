import React, { Component } from "react";

class HorizontalDemoListItem extends Component {
  render() {
    let itemClass = "HorizontalDemoListItem";
    if (this.props.active) {
      itemClass += " active";
    }
    return (
      <div className={itemClass} onClick={this.props.onClick}>
        <div className="demo-name">{this.props.name}</div>
      </div>
    );
  }
}

export default HorizontalDemoListItem;
