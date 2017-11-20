import React, { Component } from 'react';

class Span extends Component {
  render() {
    return <span {...this.props}>{this.props.text}</span>;
  }
}

export default Span;
