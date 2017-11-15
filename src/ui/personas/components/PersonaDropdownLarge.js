import React, { Component } from 'react';

import CurrentPersonaDoubleLabelContainer from 'ui/personas/containers/CurrentPersonaDoubleLabelContainer.js';
import CurrentPersonaAvatarContainer from 'ui/personas/containers/CurrentPersonaAvatarContainer.js';
import PersonaListContainer from 'ui/personas/containers/PersonaListContainer.js';
import PopupContainer from 'ui/shared/containers/PopupContainer.js';

import './PersonaDropdownLarge.css';

const POPUP_ID = 'personas';

class PersonaDropdownLarge extends Component {
  render() {
    let className = ['PersonaDropdownLarge'];
    if (this.props.className) {
      className.push(this.props.className);
    }
    return (
      <div
        className={className.join(' ')}
        onClick={ev => this.props.openPopup(POPUP_ID)}
      >
        <div className="chevron-wrapper centered">
          <i className="fa fa-chevron-down" />
        </div>
        <div className="label-wrapper centered">
          <CurrentPersonaDoubleLabelContainer />
        </div>
        <div className="image-wrapper centered">
          <CurrentPersonaAvatarContainer />
        </div>
        <PopupContainer className="popup-cover" popupId="personas">
          <PersonaListContainer />
        </PopupContainer>
      </div>
    );
  }
}

export default PersonaDropdownLarge;
