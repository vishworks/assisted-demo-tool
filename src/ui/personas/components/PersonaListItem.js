import React, { Component } from 'react';
import PropTypes from 'prop-types';

import RoundImage from 'ui/shared/components/RoundImage.js';

class PersonaListItem extends Component {
  render() {
    let { id, imageUrl, label, description } = this.props;
    let className = ['PersonaListItem'];
    if (this.props.className) {
      className.push(this.props.className);
    }
    if (this.props.active) {
      className.push('active');
    }

    return (
      <div
        key={id}
        className={className.join(' ')}
        onClick={this.props.onClick}
      >
        <div className="persona-wrapper">
          <RoundImage imageUrl={imageUrl} />
          <div className="label-sect">
            <div className="label">{label}</div>
            <div className="label">{description}</div>
          </div>
        </div>
      </div>
    );
  }
}

PersonaListItem.propTypes = {
  id: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,

  className: PropTypes.string,
  onClick: PropTypes.func,
  active: PropTypes.bool
};

export default PersonaListItem;
