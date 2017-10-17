import React, { Component } from 'react';
import { isFunction } from 'lodash';

import './PseudoCheckbox.css'

class PseudoCheckbox extends Component {

  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }
  render() {
    let className = ['PseudoCheckbox'];
    if (this.props.disabled) {
      className.push('disabled');
    }
    return (
      <span className={ className.join(' ') }
            onClick={this.onClick}
        >
        { this.props.text }
        <i className={this.props.checked ? 'fa fa-check-square-o' : 'fa fa-square-o'}/>
      </span>
    );
  }

  onClick(ev) {
    if (!this.props.disabled && isFunction(this.props.onClick)) {
      this.props.onClick(ev);
    }
  }

}

export default PseudoCheckbox;