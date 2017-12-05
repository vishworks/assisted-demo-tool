import React, { Component } from 'react';
import PropTypes from 'prop-types';

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

const PersonaPropTypes = PropTypes.shape({
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired
});

PersonaList.propTypes = {
  selectPersona: PropTypes.func.isRequired,
  personas: PropTypes.arrayOf(PersonaPropTypes),
  currentPersonaId: PropTypes.string.isRequired
};

export default PersonaList;
