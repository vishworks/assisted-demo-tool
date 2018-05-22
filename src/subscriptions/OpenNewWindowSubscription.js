import { getCurrentPersonaUrlOverride } from 'state/demos/selectors';
import { getCurrentUrl } from 'state/urlHistory/selectors';

export default store => () => {
  const state = store.getState();
  const urlOverride = getCurrentPersonaUrlOverride(state);
  if (urlOverride && urlOverride.newTab) {
    const currentUrl = getCurrentUrl(state);
    window.open(currentUrl);
  }
};
