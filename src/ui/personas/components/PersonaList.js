import React, { Component } from 'react';

import { forEach } from 'lodash';

import LabelledAvatar from './LabelledAvatar.js';

import './PersonaList.css';

class PersonaList extends Component {
  constructor(props) {
    super(props);
    this.onClickPersona = this.onClickPersona.bind(this);
  }

  render() {
    let className = ['PersonaList'];

    // render personas
    let personaRenderers = [];
    forEach(this.props.personas, persona => {
      let renderer = (
        <LabelledAvatar
          key={persona.id}
          imageUrl={persona.avatar}
          label={persona.label}
          description={persona.description}
          onClick={this.onClickPersona(persona)}
        />
      );

      personaRenderers.push(renderer);
    });

    return <div className={className.join(' ')}>{personaRenderers}</div>;
  }

  onClickPersona(persona) {
    return ev => this.props.selectPersona(persona.id);
  }
}

export default PersonaList;
