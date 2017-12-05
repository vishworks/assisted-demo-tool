import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { omit } from 'lodash';

class DoubleLabel extends Component {
  render() {
    let { label, description, className } = this.props;
    let newClassName = 'DoubleLabel';
    if (className) {
      newClassName += ' ' + className;
    }
    return (
      <div
        {...omit(this.props, ['label', 'description', 'className'])}
        className={newClassName}
      >
        <div className="DoubleLabel-label">{label}</div>
        <div className="DoubleLabel-description">{description}</div>
      </div>
    );
  }
}

DoubleLabel.propTypes = {
  label: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  className: PropTypes.string
};

export default DoubleLabel;
