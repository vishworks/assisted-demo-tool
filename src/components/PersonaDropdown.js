import React, { Component } from 'react';

import { forEach } from 'lodash';

import PersonaAvatar from './PersonaAvatar.js'
import PersonaDropdownItem from './PersonaDropdownItem.js'

import './PersonaDropdown.css'


class PersonaDropdown extends Component {


  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.onClickPersona = this.onClickPersona.bind(this);

    this.state = {
      hidden: true
    };
  }


  render() {


    let className = ['PersonaDropdown'];



    // render personas
    let personaRenderers = [];
    forEach(this.props.personas, (persona) => {
      let renderer = <PersonaDropdownItem
        key={persona.id}
        persona={persona}
        onClick={this.onClickPersona}
        >
      </PersonaDropdownItem>;

      personaRenderers.push(renderer);
    });




    return (
      <div
        className={className.join(' ')}
        >
        <div className="persona-wrapper">
          <PersonaAvatar imageUrl={this.props.currentPersona.avatar} />
        </div>
        <div className="persona-label">{this.props.currentPersona.label}</div>
        <div className="persona-description">{this.props.currentPersona.description}</div>
        <div className="persona-dropdown-trigger"
          onClick={this.toggle}>
          <i className={this.state.hidden ? 'fa fa-angle-down' : 'fa fa-angle-up'} />
        </div>


        <div className="personas-list"
          style={{ display: this.state.hidden ? 'none' : 'block'}}
          >
          {personaRenderers}
        </div>

      </div>
    );
  }


  toggle() {
    this.setState({ hidden: !this.state.hidden });
  }

  onClickPersona(ev, persona) {
    this.props.selectPersona(persona.id);
    this.toggle();
  }

}

export default PersonaDropdown;