import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './PersonaAvatar.css'

class PersonaAvatar extends Component {

  render() {

    let className = ['PersonaAvatar'];

    return (
      <div
        className={className.join(' ')}
        style={{ backgroundImage: 'url(\''+ this.props.imageUrl +'\')' }}
        onClick={this.props.onClick}>
      </div>
    );
  }

}

PersonaAvatar.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  onClick: PropTypes.func
};

export default PersonaAvatar;
