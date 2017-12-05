import React, { Component } from 'react';
import PropTypes from 'prop-types';

import CurrentPersonaDoubleLabelContainer from 'ui/personas/containers/CurrentPersonaDoubleLabelContainer.js';
import CurrentPersonaAvatarContainer from 'ui/personas/containers/CurrentPersonaAvatarContainer.js';
import PersonaDropdownLargePopupListContainer from 'ui/personas/containers/PersonaDropdownLargePopupListContainer.js';
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
        <div className="image-wrapper centered">
          <CurrentPersonaAvatarContainer />
        </div>
        <div className="label-wrapper centered">
          <CurrentPersonaDoubleLabelContainer />
        </div>
        <div className="chevron-wrapper centered">
          <i className="fa fa-chevron-up" />
        </div>

        <PopupContainer className="personas-popup" popupId="personas">
          <PersonaDropdownLargePopupListContainer />
        </PopupContainer>
      </div>
    );
  }
}

PersonaDropdownLarge.propTypes = {
  openPopup: PropTypes.func.isRequired,
  className: PropTypes.string
};

export default PersonaDropdownLarge;
