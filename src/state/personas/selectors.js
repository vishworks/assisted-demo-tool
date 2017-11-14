import { createSelector } from 'reselect';
import { find, filter, map, uniq, intersection } from 'lodash';

export const getPersonasState = state => state.personas;

export const getCurrentPersonaId = createSelector(
  [getPersonasState],
  personasState => personasState.currentPersonaId
);

const getRawPersonas = createSelector(
  [getPersonasState],
  personasState => personasState.personas
);

export const getPersonas = createSelector([getRawPersonas], personas => {
  return personas && personas.length
    ? map(personas, persona => {
        if (!persona.avatar) {
          persona.avatar = 'img/user.png';
        }
        return persona;
      })
    : null;
});

export const getCurrentPersona = createSelector(
  [getCurrentPersonaId, getPersonas],
  (currentPersonaId, personas) => {
    return find(personas, { id: currentPersonaId });
  }
);

export const getNotSelectedPersonas = createSelector(
  [getCurrentPersonaId, getPersonas],
  (currentPersonaId, personas) => {
    return filter(personas, persona => {
      return persona.id !== currentPersonaId;
    });
  }
);

export const getVisiblePersonas = createSelector([getPersonas], personas => {
  return filter(personas, persona => {
    return !persona.hidden;
  });
});

export const getVisibleNotSelectedPersonas = createSelector(
  [getNotSelectedPersonas, getVisiblePersonas],
  (notSelectedPersonas, visiblePersonas) => {
    return intersection(notSelectedPersonas, visiblePersonas);
  }
);

export const getCurrentPersonaImageUrl = createSelector(
  [getCurrentPersona],
  currentPersona => {
    return currentPersona && currentPersona.avatar;
  }
);
export const getCurrentPersonaLabel = createSelector(
  [getCurrentPersona],
  currentPersona => {
    return currentPersona && currentPersona.label;
  }
);
export const getCurrentPersonaDescription = createSelector(
  [getCurrentPersona],
  currentPersona => {
    return currentPersona && currentPersona.description;
  }
);

export const getCurrentUrl = createSelector(
  [getCurrentPersona],
  currentPersona => {
    return currentPersona.url;
  }
);

export const getUrls = createSelector([getPersonas], personas => {
  return uniq(map(personas, 'url'));
});
