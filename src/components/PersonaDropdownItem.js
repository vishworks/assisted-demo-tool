import React, { Component } from 'react';

import PersonaAvatar from './PersonaAvatar.js'

import './PersonaDropdownItem.css'

class PersonaDropdownItem extends Component {


  constructor(props) {
    super(props);

  }

  render() {

    let className = ['PersonaDropdownItem'];

    return (
      <div
        className={className.join(' ')}
        onClick={(ev) => { this.props.onClick(ev, this.props.persona)}}>
        <PersonaAvatar persona={this.props.persona} />
        <div>
          <div className="persona-label">{this.props.persona.label}</div>
          <div className="persona-description">{this.props.persona.description}</div>
        </div>
      </div>
    );
  }



}

export default PersonaDropdownItem;