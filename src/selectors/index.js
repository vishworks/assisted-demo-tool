
import { createSelector } from 'reselect'
import { find, filter, map, get, uniq, intersection, includes } from 'lodash'

// FIXME de-centralize all selectors
import { getAllSteps } from '../state/steps/localSelectors.js'
import { getCurrentPersonaId, getCurrentPersona, getPersonas } from '../state/personas/localSelectors.js'

function addIndexToArray(array) {
  return map(array, (el, index) => {
    el.index = index;
    return el;
  });
}






export const getActivePopup = state => state.appReducer.visual.activePopup;
export const getDisplayBullets = state => state.appReducer.visual.displayBullets;

export const getConfigErrorMessage = state => state.appReducer.error.message;



export const getCurrentPersonaSteps = createSelector(
  [getAllSteps, getCurrentPersonaId],
  (allSteps, currentPersonaId) => {
    return filter(allSteps, { personaId: currentPersonaId } );
  }
);





//--------------------------------------------------------------------------------------------------------------//
//----------------------------------- Control widget visual status----------------------------------------------//
//--------------------------------------------------------------------------------------------------------------//


export const getDisplayMode = state => state.controlWidget.displayMode;