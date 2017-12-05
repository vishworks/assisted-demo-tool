import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PersonaStepsListItem extends Component {
  render() {
    let className = ['PersonaStepsListItem'];
    if (this.props.active) {
      className.push('active');
    }
    const { stepNumber, stepTitle, onClick } = this.props;
    return (
      <div className={className.join(' ')} onClick={onClick}>
        <div>Step {stepNumber}</div>
        <div>{stepTitle}</div>
      </div>
    );
  }
}

PersonaStepsListItem.propTypes = {
  onClick: PropTypes.func.isRequired,
  active: PropTypes.bool,
  stepNumber: PropTypes.number.isRequired,
  stepTitle: PropTypes.string.isRequired
};

PersonaStepsListItem.defaultProps = {
  active: false
};

export default PersonaStepsListItem;
