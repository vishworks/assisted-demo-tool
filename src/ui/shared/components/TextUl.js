import React, { Component } from 'react';
import { omit } from 'lodash';
import PropTypes from 'prop-types';

class TextUl extends Component {
  render() {
    return (
      <ul {...omit(this.props, ['stringArray'])}>
        {this.props.stringArray
          ? this.props.stringArray.map(str => <li>{str}</li>)
          : ''}
      </ul>
    );
  }
}

TextUl.propTypes = {
  stringArray: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default TextUl;
