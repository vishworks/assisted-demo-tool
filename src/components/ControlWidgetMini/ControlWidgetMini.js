import React, { Component } from 'react';

import FloatingButton from '../FloatingButton.js'
import PersonaAvatar from '../PersonaAvatar.js'
import List from '../List.js'
import PersonaListItem from './PersonaListItem.js'

import './ControlWidgetMini.css'


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
    let className = ['ControlWidgetMini', this.props.status, 'collapsed'];
    return <div
      className={className.join(' ')}
      >
      <FloatingButton className="hamburger-btn" onClick={this.onClickMaximize} iconClassName="fa fa-bars"/>
      <PersonaAvatar imageUrl={this.props.currentPersonaImageUrl} onClick={this.onClickExpand} />
    </div>
  }

  render() {

    if (this.state.collapsed) {
      return this.renderCollapsed();
    }

    let className = ['ControlWidgetMini'];
    className.push(this.props.status);

    let personaToPersonaRow = (persona) => {
        return <PersonaListItem onClick={(ev) => { this.onClickPersona(ev, persona) }}
                                active={this.props.currentPersonaId === persona.id}
                                id={persona.id}
                                imageUrl={persona.avatar}
                                label={persona.label}
                                description={persona.description} />;
      };


    className.push('expanded');
    return (
      <div
        className={className.join(' ')}
        >
        <FloatingButton className="hamburger-btn" onClick={this.onClickMaximize} iconClassName="fa fa-bars"/>
        <List modelName="PersonaRow"
              className="personas-list"
              model={this.props.personas}
              mapFunction={personaToPersonaRow} />
        <FloatingButton className="close-btn" onClick={this.onClickCollapse} iconClassName="fa fa-times"/>
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

export default ControlWidgetMini;