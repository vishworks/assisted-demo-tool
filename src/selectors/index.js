
import { createSelector } from 'reselect'
import { find, filter, map, get, uniq, intersection, includes } from 'lodash'

// selectors depending from multiple modules
import { getAllSteps } from '../state/demos/selectors.js'
import { getCurrentPersonaId } from '../state/personas/selectors.js'




export const getCurrentPersonaSteps = createSelector(
  [getAllSteps, getCurrentPersonaId],
  (allSteps, currentPersonaId) => {
    return filter(allSteps, { personaId: currentPersonaId } );
  }
);
