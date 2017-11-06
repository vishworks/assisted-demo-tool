

import { createSelector } from 'reselect'
import { find, filter, map, get, uniq, intersection, includes, memoize, overArgs, forEach } from 'lodash'



export const getCurrentPersonaId = state => state.currentPersonaId;

export const getPersonas = createSelector(
  [ (state) => get(state, 'personas', null) ],
  (personas) => {
    return personas && personas.length ?
      map(personas, (persona) => {
        if (!persona.avatar) {
          persona.avatar = 'img/user.png'
        }
        return persona;
      }) :
      null;
  }
);



export const getCurrentPersona = createSelector(
  [getCurrentPersonaId, getPersonas],
  (currentPersonaId, personas) => {
    return find(personas, { id: currentPersonaId } );
  }
);

export const getNotSelectedPersonas = createSelector(
  [getCurrentPersonaId, getPersonas],
  (currentPersonaId, personas) => {
    return filter(personas, (persona) => { return persona.id !== currentPersonaId } );
  }
);

export const getVisiblePersonas = createSelector(
  [getPersonas],
  (personas) => {
    return filter(personas, (persona) => { return !persona.hidden } );
  }
);


export const getVisibleNotSelectedPersonas = createSelector(
  [getNotSelectedPersonas, getVisiblePersonas],
  (notSelectedPersonas, visiblePersonas) => {
    return intersection(notSelectedPersonas, visiblePersonas);
  }
);

export const getCurrentPersonaImageUrl = createSelector(
  [getCurrentPersona],
  (currentPersona) => {
    return currentPersona && currentPersona.avatar;
  }
);
export const getCurrentPersonaLabel = createSelector(
  [getCurrentPersona],
  (currentPersona) => {
    return currentPersona && currentPersona.label;
  }
);
export const getCurrentPersonaDescription = createSelector(
  [getCurrentPersona],
  (currentPersona) => {
    return currentPersona && currentPersona.description;
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