
import { createSelector } from 'reselect'
import { find, filter, map, get, uniq, intersection, includes } from 'lodash'

// FIXME de-centralize all selectors
import { getAllSteps } from '../state/demos/localSelectors.js'
import { getCurrentPersonaId, getCurrentPersona, getPersonas } from '../state/personas/localSelectors.js'

function addIndexToArray(array) {
  return map(array, (el, index) => {
    el.index = index;
    return el;
  });
}



export const getCurrentStepIndex = state => state.appReducer.current.stepIndex;


export const getActivePopup = state => state.appReducer.visual.activePopup;
export const getDisplayBullets = state => state.appReducer.visual.displayBullets;

export const getConfigErrorMessage = state => state.appReducer.error.message;



export const getCurrentPersonaSteps = createSelector(
  [getAllSteps, getCurrentPersonaId],
  (allSteps, currentPersonaId) => {
    return filter(allSteps, { personaId: currentPersonaId } );
  }
);

export const getCurrentStep = createSelector(
  [getAllSteps, getCurrentStepIndex],
  (allSteps, currentStepIndex) => {
    return allSteps[currentStepIndex];
  }
);

export const getNextStep = createSelector(
  [getAllSteps, getCurrentStepIndex],
  (allSteps, currentStepIndex) => {
    return allSteps[currentStepIndex + 1];
  }
);

export const getPrevStep = createSelector(
  [getAllSteps, getCurrentStepIndex],
  (allSteps, currentStepIndex) => {
    return allSteps[currentStepIndex - 1];
  }
);

export const getCurrentUrl = createSelector(
  [getCurrentPersona],
  (currentPersona) => {
    return currentPersona.url;
  }
);

export const getUrls = createSelector(
  [getPersonas],
  (personas) => {
    return uniq(map(personas, 'url'));
  }
);

export const getCurrentStepContent = createSelector(
  [getCurrentStep],
  (currentStep) => {
    return currentStep.content;
  }
);

export const getCurrentStepBullets = createSelector(
  [getCurrentStep],
  (currentStep) => {
    return currentStep.bullets;
  }
);

export const getCurrentStepName = createSelector(
  [getCurrentStep],
  (currentStep) => {
    return currentStep.name;
  }
);



//--------------------------------------------------------------------------------------------------------------//
//----------------------------------- Control widget visual status----------------------------------------------//
//--------------------------------------------------------------------------------------------------------------//


export const getDisplayMode = state => state.controlWidget.displayMode;