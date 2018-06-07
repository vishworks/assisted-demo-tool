import { some, isEmpty } from 'lodash';
import {
  getCurrentDemoId,
  getCurrentStepIndex
} from 'state/demos/selectors.js';
import { getCurrentPersonaId } from 'state/personas/selectors.js';
import { updateHashFromObject } from 'helpers/HashUtils.js';

export default store => () => {
  const state = store.getState();
  const demoId = getCurrentDemoId(state);
  const stepNumber = getCurrentStepIndex(state) + 1;
  const personaId = getCurrentPersonaId(state);

  if (some([demoId, personaId], isEmpty) === false) {
    updateHashFromObject({
      demoId,
      stepNumber,
      personaId
    });
  }
};
