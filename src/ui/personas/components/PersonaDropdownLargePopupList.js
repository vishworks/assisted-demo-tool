import React, { Component } from 'react';
import { forEach } from 'lodash';

import RoundImage from 'ui/shared/components/RoundImage.js';
import DoubleLabel from 'ui/shared/components/DoubleLabel.js';

import './PersonaDropdownLarge.css';

class PersonaDropdownLargePopupList extends Component {
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
        <div
          key={persona.id}
          className="list-item"
          onClick={this.onClickPersona(persona)}
        >
          <RoundImage className="persona-avatar" imageUrl={persona.avatar} />
          <DoubleLabel
            className="persona-label"
            label={persona.label}
            description={persona.description}
          />
        </div>
      );

      personaRenderers.push(renderer);
    });

    return <div className={className.join(' ')}>{personaRenderers}</div>;
  }

  onClickPersona(persona) {
    return ev => this.props.selectPersona(persona.id);
  }
}

export default PersonaDropdownLargePopupList;
