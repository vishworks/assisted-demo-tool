import React, { Component } from 'react';

import { memoize } from 'lodash'

import FloatingButton from './FloatingButton.js'
import PersonaAvatar from './PersonaAvatar.js'
import List from './List.js'

import './MiniControlWidget.css'


class MiniControlWidget extends Component {


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
    let className = ['MiniControlWidget', this.props.status, 'collapsed'];
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

    let className = ['MiniControlWidget'];
    className.push(this.props.status);

    let personaToPersonaRow = (persona) => {
        let personaClassName = ['persona-row'];
        if (this.props.currentPersonaId === persona.id) {
          personaClassName.push('active');
        }
        return <div key={persona.id} className={personaClassName.join(' ')}
             onClick={(ev) => { this.onClickPersona(ev, persona) }}
          >
          <div className="persona-wrapper">
            <PersonaAvatar imageUrl={persona.avatar}  />
            <div className="label-sect">
              <div className="label">
                {persona.label}
              </div>
              <div className="label">
                {persona.description}
              </div>
            </div>
          </div>
        </div>
      },
      personasList = <List modelName="PersonaRow" className="personas-list" model={this.props.personas} mapFunction={personaToPersonaRow} />;


    className.push('expanded');
    return (
      <div
        className={className.join(' ')}
        >
        <FloatingButton className="hamburger-btn" onClick={this.onClickMaximize} iconClassName="fa fa-bars"/>
        {personasList}
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

export default MiniControlWidget;