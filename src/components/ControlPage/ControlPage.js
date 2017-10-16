import React, { Component } from 'react';

import CurrentPersonaLabelledAvatarContainer from '../../containers/CurrentPersonaLabelledAvatarContainer.js'
import PersonaStepsListContainer from '../../containers/PersonaStepsListContainer.js'

import StepsControlButtonsContainer from '../../containers/StepsControlButtonsContainer.js'
import StepContentContainer from '../../containers/StepContentContainer.js'
import StepLabelContainer from '../../containers/StepLabelContainer.js'
import NotSelectedPersonaListContainer from '../../containers/NotSelectedPersonaListContainer.js'



import './ControlPage.css'

class ControlPage extends Component {


  constructor(props) {
    super(props);

  }

  render() {

    let className = ['ControlPage'];




    return (
      <div className={className.join(' ')}>
        <header>
          <CurrentPersonaLabelledAvatarContainer />

          <div className="persona-dropdown-trigger"
               data-id="personas"
               onClick={this.togglePanel}>
            <i className="fa fa-angle-down" />
          </div>

        </header>

        <div>
          <div>Steps</div>
          <PersonaStepsListContainer />
        </div>

        <div className="step-content">
          <h3>{this.props.currentStepName}</h3>
          <StepContentContainer />
        </div>

        <StepLabelContainer />
        <StepsControlButtonsContainer />
      </div>
    );
  }


}

export default ControlPage;