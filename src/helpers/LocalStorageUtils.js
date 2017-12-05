import { set, get } from 'lodash';
import qs from 'query-string';

export function getPersistedState() {
  if (localStorage) {
    let searchParams = qs.parse(window.location.search),
      configUrl = searchParams.configUrl;
    return localStorage[configUrl] && JSON.parse(localStorage[configUrl]);
  }
}

export function persistState(state) {
  if (localStorage) {
    let searchParams = qs.parse(window.location.search),
      configUrl = searchParams.configUrl;
    if (configUrl) {
      let savedState = {};
      set(savedState, 'demos.demos', get(state, 'demos.demos'));
      set(savedState, 'notes', get(state, 'notes'));
      set(savedState, 'highlights', get(state, 'highlights'));
      localStorage[configUrl] = JSON.stringify(savedState);
    }
  }
}
