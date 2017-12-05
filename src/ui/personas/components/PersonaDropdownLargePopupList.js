import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { map } from 'lodash';

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
    const personaRenderers = map(this.props.personas, persona => {
      return (
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
    });

    return <div className={className.join(' ')}>{personaRenderers}</div>;
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

PersonaDropdownLargePopupList.propTypes = {
  selectPersona: PropTypes.func.isRequired,
  personas: PropTypes.arrayOf(PersonaPropTypes)
};

export default PersonaDropdownLargePopupList;
