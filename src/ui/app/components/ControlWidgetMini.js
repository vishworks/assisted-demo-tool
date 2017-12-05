import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { map } from 'lodash';

import FloatingButton from 'ui/shared/components/FloatingButton.js';
import RoundImage from 'ui/shared/components/RoundImage.js';
import PersonaListItem from 'ui/personas/components/PersonaListItem.js';

import './ControlWidgetMini.css';

class ControlWidgetMini extends Component {
  constructor(props) {
    super(props);

    this.collapse = this.collapse.bind(this);
    this.expand = this.expand.bind(this);

    this.onClickCollapse = this.onClickCollapse.bind(this);
    this.onClickExpand = this.onClickExpand.bind(this);
    this.onClickPersona = this.onClickPersona.bind(this);
    this.onClickMaximize = this.onClickMaximize.bind(this);

    this.renderCollapsed = this.renderCollapsed.bind(this);

    this.state = {
      collapsed: true
    };
  }

  renderCollapsed() {
    let className = ['ControlWidgetMini', 'collapsed'];
    return (
      <div className={className.join(' ')}>
        <FloatingButton
          className="hamburger-btn"
          onClick={this.onClickMaximize}
          iconClassName="fa fa-bars"
        />
        <RoundImage
          imageUrl={this.props.currentPersonaImageUrl}
          onClick={this.onClickExpand}
        />
      </div>
    );
  }

  render() {
    if (this.state.collapsed) {
      return this.renderCollapsed();
    }

    let className = ['ControlWidgetMini'];
    className.push('expanded');
    return (
      <div className={className.join(' ')}>
        <FloatingButton
          className="hamburger-btn"
          onClick={this.onClickMaximize}
          iconClassName="fa fa-bars"
        />

        <div className="personas-list">
          {map(this.props.personas, persona => (
            <PersonaListItem
              key={persona.id}
              onClick={ev => {
                this.onClickPersona(ev, persona);
              }}
              active={this.props.currentPersonaId === persona.id}
              id={persona.id}
              imageUrl={persona.avatar}
              label={persona.label}
              description={persona.description}
            />
          ))}
        </div>
        <FloatingButton
          className="close-btn"
          onClick={this.onClickCollapse}
          iconClassName="fa fa-times"
        />
      </div>
    );
  }

  collapse() {
    this.setState({
      collapsed: true
    });
  }

  expand() {
    this.setState({
      collapsed: false
    });
  }

  onClickPersona(ev, persona) {
    this.props.selectPersona(persona.id);
    this.collapse();
  }

  onClickCollapse() {
    this.collapse();
  }

  onClickExpand() {
    this.expand();
  }

  onClickMaximize() {
    this.props.onClickMaximize();
    this.collapse();
  }
}

const PersonaPropTypes = PropTypes.shape({
  id: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
});

ControlWidgetMini.propTypes = {
  currentPersonaImageUrl: PropTypes.string.isRequired, // FIXME use container
  onClickMaximize: PropTypes.func.isRequired,
  selectPersona: PropTypes.func.isRequired,
  currentPersonaId: PropTypes.string.isRequired,
  personas: PropTypes.arrayOf(PersonaPropTypes).isRequired
};

export default ControlWidgetMini;
