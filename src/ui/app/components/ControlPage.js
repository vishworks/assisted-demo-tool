import React, { Component } from 'react';

import SplitPane from 'react-split-pane';

import PopupContainer from 'ui/shared/containers/PopupContainer.js';
import HorizontalDemoListContainer from 'ui/demos/containers/HorizontalDemoListContainer.js';
import CloseButton from 'ui/shared/components/CloseButton.js';
import SetupDemoButton from 'ui/demos/containers/SetupDemoButtonContainer.js';
import PersonaDropdownLargeContainer from 'ui/personas/containers/PersonaDropdownLargeContainer.js';
import BigStepsListContainer from 'ui/steps/containers/BigStepsListContainer.js';
import BigTimerContainer from 'ui/demos/containers/BigTimerContainer.js';
import CurrentStepHighlightListContainer from 'ui/highlights/containers/CurrentStepHighlightListContainer.js';
import CurrentDemoNotesListContainer from 'ui/notes/containers/CurrentDemoNotesListContainer.js';
import OpenNewNotePopupButtonContainer from 'ui/notes/containers/OpenNewNotePopupButtonContainer.js';
import NewNoteFormContainer from 'ui/notes/containers/NewNoteFormContainer.js';
import StepsCountContainer from 'ui/steps/containers/StepsCountContainer.js';
import TabbedStepContent from 'ui/steps/components/TabbedStepContent.js';
import NextStepButtonContainer from 'ui/steps/containers/NextStepButtonContainer.js';
import PrevStepButtonContainer from 'ui/steps/containers/PrevStepButtonContainer.js';

import 'ui/shared/components/SplitPaneResizer.css';
import './ControlPage.css';
import './ControlPageStepButtonsOverride.css';

class ControlPage extends Component {
  render() {
    let className = ['ControlPage'];

    return (
      <div className={className.join(' ')}>
        <div className="header">
          <div className="header-left">
            <HorizontalDemoListContainer />
          </div>
          <div className="header-right">
            <SetupDemoButton />
            <BigTimerContainer />
            <CloseButton />
          </div>
        </div>
        <div className="layout-row main-content">
          <SplitPane
            split="vertical"
            minSize={300}
            defaultSize={320}
            // pane1Style={{ overflow: 'scroll' }}
          >
            <div className="layout-col-1">
              <div className="steps-header">
                <div className="font-header-title">Steps index</div>
                <div className="font-header-subtitle">
                  Total <StepsCountContainer /> Steps
                </div>
              </div>
              <BigStepsListContainer />
            </div>
            <SplitPane
              split="vertical"
              maxSize={400}
              defaultSize={300}
              primary="second"
            >
              <div className="layout-col-2">
                <TabbedStepContent />
                <div className="footer-controls-section">
                  <div className="personas-selector">
                    <PersonaDropdownLargeContainer />
                  </div>
                  <div className="step-control-buttons">
                    <PrevStepButtonContainer />
                    <NextStepButtonContainer />
                  </div>
                </div>
              </div>
              <div className="layout-col-3">
                <SplitPane
                  split="horizontal"
                  maxSize={700}
                  defaultSize={500}
                  primary="second"
                >
                  <div className="white-area highlights-list-area">
                    <div className="grey-area layout-header">
                      <div className="icon-label">
                        <i
                          className="icon fa fa-lightbulb-o"
                          aria-hidden="true"
                        />
                        <span className="label">Highlights</span>
                      </div>
                    </div>
                    <CurrentStepHighlightListContainer />
                  </div>
                  <div className="white-area notes-section">
                    <div className="grey-area layout-header">
                      <div className="icon-label">
                        <i className="icon fa fa-pencil" aria-hidden="true" />
                        <span className="label">Notes</span>
                      </div>
                    </div>
                    <CurrentDemoNotesListContainer />
                  </div>
                </SplitPane>
                <div className="footer-controls-section add-notes-section">
                  <PopupContainer
                    className="popup-cover grey-area new-note-popup"
                    popupId="newNoteForm"
                    closeOnClick={false}
                  >
                    <NewNoteFormContainer />
                  </PopupContainer>
                  <OpenNewNotePopupButtonContainer />
                </div>
              </div>
            </SplitPane>
          </SplitPane>
        </div>
      </div>
    );
  }
}

export default ControlPage;
