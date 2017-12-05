import React, { Component } from 'react';
import { omit } from 'lodash';
import PropTypes from 'prop-types';

class Span extends Component {
  render() {
    return <span {...omit(this.props, ['text'])}>{this.props.text}</span>;
  }
}

Span.propTypes = {
  text: PropTypes.string.isRequired
};

export default Span;
