import React, { Component } from 'react';

import './PersonaAvatar.css'

class PersonaAvatar extends Component {


  constructor(props) {
    super(props);

  }

  render() {

    let className = ['PersonaAvatar'];

    return (
      <div
        className={className.join(' ')}
        style={{ backgroundImage: 'url(\''+ this.props.imageUrl +'\')' }}>
      </div>
    );
  }


}

export default PersonaAvatar;