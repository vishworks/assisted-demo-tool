import { createSelector } from 'reselect';

import { getCurrentDemoPersonas } from 'state/demos/selectors';
import { getCurrentPersonaId } from 'state/personas/selectors';

export const getUrlHistory = state => state.urlHistory;

export const getUrlHistoryPersonaUrlMap = createSelector(
  [getUrlHistory],
  urlHistoryMap => {
    return Object.keys(urlHistoryMap).reduce((acc, personaId) => {
      const item = urlHistoryMap[personaId];
      acc[personaId] = item.history[item.currentUrlIndex];
      return acc;
    }, {});
  }
);

export const getCurrentDemoPersonasUrls = createSelector(
  [getCurrentDemoPersonas, getUrlHistory],
  (demoPersonas, urlHistoryMap) => {
    return demoPersonas.map(persona => {
      const historyItem = urlHistoryMap[persona.id];
      return {
        personaId: persona.id,
        currentUrl: historyItem.history[historyItem.currentUrlIndex]
      };
    });
  }
);

export const getCurrentPersonaUrlHistory = createSelector(
  [getUrlHistory, getCurrentPersonaId],
  (urlHistoryMap, currentPersonaId) => {
    return urlHistoryMap[currentPersonaId];
  }
);

export const getCurrentUrlIndex = createSelector(
  [getCurrentPersonaUrlHistory],
  currentPersonaUrlHistory => {
    return currentPersonaUrlHistory.currentUrlIndex;
  }
);

export const getCurrentUrl = createSelector(
  [getCurrentPersonaUrlHistory],
  historyItem => {
    return historyItem.history[historyItem.currentUrlIndex];
  }
);

export const getCurrentUrlIsFirst = createSelector(
  [getCurrentPersonaUrlHistory],
  curHistory => {
    return curHistory.currentUrlIndex === 0;
  }
);

export const getCurrentUrlIsLast = createSelector(
  [getCurrentPersonaUrlHistory],
  curHistory => {
    return curHistory.currentUrlIndex === curHistory.history.length - 1;
  }
);
