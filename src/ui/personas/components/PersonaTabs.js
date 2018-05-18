import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
        <button
          key={persona.id}
          className={className}
          onClick={this.onClickPersona(persona)}
        >
          <div className="tab-button-content">
            <img className="tab-icon-image" alt="" src={persona.tabImg} />
            <div className="tab-text">
              {persona.tabName || persona.description}
            </div>
          </div>

          <div className="left-triangle-area" />
          <div className="right-triangle-area" />
          <div className="right-fade-out-area" />
        </button>
      );
    });

    return (
      <div className="PersonaTabs">
        {personaRenderers}
        <div className="bottom-fake-border" />
      </div>
    );
  }

  onClickPersona(persona) {
    return ev => this.props.selectPersona(persona.id);
  }
}

const PersonaPropTypes = PropTypes.shape({
  id: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
});

PersonaTabs.propTypes = {
  selectPersona: PropTypes.func.isRequired,
  personas: PropTypes.arrayOf(PersonaPropTypes),
  currentPersonaId: PropTypes.string.isRequired
};

export default PersonaTabs;
