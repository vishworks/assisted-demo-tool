import React, { Component } from 'react';

import { map } from 'lodash';

import './PersonaTabs.css';

class PersonaTabs extends Component {
  constructor(props) {
    super(props);
    this.onClickPersona = this.onClickPersona.bind(this);
  }

  render() {
    // render personas
    let personaRenderers = map(this.props.personas, persona => {
      let className = 'tab-button';
      if (persona.id === this.props.currentPersonaId) {
        className += ' active';
      }
      return (
        <button className={className} onClick={this.onClickPersona(persona)}>
          {persona.description}
          <div className="left-triangle-area" />
          <div className="right-triangle-area" />
        </button>
      );
    });

    return <div className="PersonaTabs">{personaRenderers}</div>;
  }

  onClickPersona(persona) {
    return ev => this.props.selectPersona(persona.id);
  }
}

export default PersonaTabs;
