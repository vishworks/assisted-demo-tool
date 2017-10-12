import React, { Component } from 'react';

import { forEach } from 'lodash';

import PersonaAvatar from './PersonaAvatar.js'

import './LabelledAvatar.css'


class LabelledAvatar extends Component {


  render() {
    let className = ['LabelledAvatar'];

    let { imageUrl, label, description } = this.props;


    return (
      <div
        className={className.join(' ')}
        onClick={this.props.onClick}
        >
        <div className="persona-wrapper">
          <PersonaAvatar imageUrl={imageUrl} />
        </div>
        <div className="persona-label">{label}</div>
        <div className="persona-description">{description}</div>
      </div>
    );
  }

}

export default LabelledAvatar;