import React, { Component } from 'react';

import { map } from 'lodash';

import LabelledAvatar from './LabelledAvatar.js';

import './PersonaList.css';

class PersonaList extends Component {
  constructor(props) {
    super(props);
    this.onClickPersona = this.onClickPersona.bind(this);
  }

  render() {
    // render personas
    let personaRenderers = map(this.props.personas, persona => {
      return (
        <LabelledAvatar
          key={persona.id}
          imageUrl={persona.avatar}
          label={persona.label}
          description={persona.description}
          onClick={this.onClickPersona(persona)}
          active={persona.id === this.props.currentPersonaId}
        />
      );
    });

    return <div className="PersonaList">{personaRenderers}</div>;
  }

  onClickPersona(persona) {
    return ev => this.props.selectPersona(persona.id);
  }
}

export default PersonaList;
