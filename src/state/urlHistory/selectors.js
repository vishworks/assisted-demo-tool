import { createSelector } from 'reselect';
import { first, last } from 'lodash';

import {
  getCurrentDemoPersonas,
  getCurrentStepUrlOverrides
} from 'state/demos/selectors';
import { getCurrentPersonaId } from 'state/personas/selectors';

export const getUrlHistory = state => state.urlHistory;

export const getCurrentDemoPersonasUrls = createSelector(
  [getCurrentDemoPersonas, getUrlHistory],
  (demoPersonas, urlHistoryMap) => {
    return demoPersonas.map(persona => ({
      personaId: persona.id,
      currentUrl: urlHistoryMap[persona.id].currentUrl
    }));
  }
);

export const getCurrentPersonaUrlHistory = createSelector(
  [getUrlHistory, getCurrentPersonaId],
  (urlHistoryMap, currentPersonaId) => {
    return urlHistoryMap[currentPersonaId];
  }
);

export const getCurrentUrl = createSelector(
  [getCurrentPersonaUrlHistory],
  currentPersonaUrlHistory => {
    return currentPersonaUrlHistory.currentUrl;
  }
);

export const getCurrentUrlIsFirst = createSelector(
  [getCurrentPersonaUrlHistory],
  curHistory => {
    return curHistory.currentUrl === first(curHistory.history);
  }
);

export const getCurrentUrlIsLast = createSelector(
  [getCurrentPersonaUrlHistory],
  curHistory => {
    return curHistory.currentUrl === last(curHistory.history);
  }
);

export const getPrevUrl = createSelector(
  [getCurrentPersonaUrlHistory, getCurrentUrlIsFirst],
  (historyEntry, isFirst) => {
    if (isFirst) {
      return null;
    }
    const curIndex = historyEntry.history.indexOf(historyEntry.currentUrl);
    return historyEntry.history[curIndex - 1];
  }
);

export const getNextUrl = createSelector(
  [getCurrentPersonaUrlHistory, getCurrentUrlIsLast],
  (historyEntry, isLast) => {
    if (isLast) {
      return null;
    }
    const curIndex = historyEntry.history.indexOf(historyEntry.currentUrl);
    return historyEntry.history[curIndex + 1];
  }
);
