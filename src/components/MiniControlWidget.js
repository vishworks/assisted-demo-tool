import React, { Component } from 'react';

import { memoize } from 'lodash'

import FloatingHamburgerBtn from './FloatingHamburgerBtn.js'
import FloatingButton from './FloatingButton.js'

import './MiniControlWidget.css'


class MiniControlWidget extends Component {


  constructor(props) {
    super(props);

    this.collapse = this.collapse.bind(this);
    this.expand = this.expand.bind(this);

    this.onClickCollapse = this.onClickCollapse.bind(this);
    this.onClickExpand = this.onClickExpand.bind(this);
    this.getCurrentPersona = this.getCurrentPersona.bind(this);
    this.onClickPersona = this.onClickPersona.bind(this);
    this.onClickMaximize = this.onClickMaximize.bind(this);

    this.memoizedGetCurrentPersona = memoize((personaId) => {
      return this.props.personas.find((el) => { return el.name === personaId });
    });

    this.state = {
      collapsed: true
    };
  }



  render() {



    let className = ['MiniControlWidget'];
    className.push(this.props.status);

    if (this.state.collapsed) {
      className.push('collapsed');
      return <div
        className={className.join(' ')}
        >
          <div className="personas-list">
            <div className="persona-row">
              <FloatingHamburgerBtn onClick={this.onClickMaximize}/>
              <div className="persona-wrapper">
                <div className="persona"
                     onClick={this.onClickExpand}
                     style={{backgroundImage: 'url(\''+ (this.getCurrentPersona() ? this.getCurrentPersona().avatar : '') +'\')'}}
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
    }

    let personasCount = this.props.personas.length;

    let personasRenderers = [];
    for (let i=0; i<personasCount; ++i) {
      let personaClassName = ['persona-row'];
      if (this.props.currentPersona === this.props.personas[i].name) {
        personaClassName.push('active');
      }
      personasRenderers.push(
        <div key={this.props.personas[i].name} className={personaClassName.join(' ')}>

          <FloatingHamburgerBtn onClick={this.onClickMaximize}/>
          <div className="persona-wrapper">
            <div className="persona"
              onClick={(ev) => { this.onClickPersona(ev, this.props.personas[i]) }}
              style={{backgroundImage: 'url(\''+ this.props.personas[i].avatar +'\')'}}
              >
            </div>
          </div>
          <div className="label">{this.props.personas[i].label}</div>
        </div>
      );
    }

    className.push('expanded');
    return (
      <div
        className={className.join(' ')}
        >
        <div className="personas-list">
          {personasRenderers}
        </div>
        <div className="close-btn-wrapper">
          <FloatingButton onClick={this.onClickCollapse} codepoint="&#x1F5D9;"/>
        </div>
      </div>
    );
  }

  getCurrentPersona() {
    return this.memoizedGetCurrentPersona(this.props.currentPersona);
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
    this.props.selectPersona(persona.name);
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