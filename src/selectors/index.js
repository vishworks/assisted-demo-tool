
import { createSelector } from 'reselect'
import { find, filter, map, get, uniq, intersection, includes } from 'lodash'

// selectors depending from multiple modules
import { getAllSteps } from '../state/steps/localSelectors.js'
import { getCurrentPersonaId } from '../state/personas/localSelectors.js'




export const getCurrentPersonaSteps = createSelector(
  [getAllSteps, getCurrentPersonaId],
  (allSteps, currentPersonaId) => {
    return filter(allSteps, { personaId: currentPersonaId } );
  }
);


