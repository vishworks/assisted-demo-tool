import { createSelector } from 'reselect';
import { find, filter, map } from 'lodash';

import { getCurrentPersonaId } from 'state/personas/selectors.js';

function addIndexToArray(array) {
  return map(array, (el, index) => {
    el.index = index;
    return el;
  });
}

export const getDemosState = state => state.demos;

export const getDemos = createSelector(
  [getDemosState],
  demosState => demosState.demos
);

export const getIncludedDemos = createSelector([getDemos], demos =>
  filter(demos, demo => demo.included)
);

export const getCurrentDemoId = createSelector(
  [getDemosState],
  demosState => demosState.currentDemoId
);

export const getTempDemos = createSelector(
  [getDemosState],
  demosState => demosState.tempDemos
);

export const getCurrentStepIndex = createSelector(
  [getDemosState],
  demosState => demosState.currentStepIndex
);

export const getCurrentDemo = createSelector(
  [getCurrentDemoId, getDemos],
  (currentDemoId, demos) => {
    return find(demos, { id: currentDemoId });
  }
);

export const getSteps = createSelector([getCurrentDemo], currentDemo => {
  return currentDemo && currentDemo.steps;
});

export const getAllSteps = createSelector([getSteps], steps => {
  return steps && addIndexToArray(steps);
});

export const getStepsCount = createSelector([getSteps], steps => {
  return steps && steps.length;
});

export const getIsLastStep = createSelector(
  [getStepsCount, getCurrentStepIndex],
  (stepsCount, currentStepIndex) => {
    return currentStepIndex >= stepsCount - 1;
  }
);

export const getIsFirstStep = createSelector(
  [getCurrentStepIndex],
  currentStepIndex => {
    return currentStepIndex === 0;
  }
);

export const getCurrentStep = createSelector(
  [getAllSteps, getCurrentStepIndex],
  (allSteps, currentStepIndex) => {
    return allSteps[currentStepIndex];
  }
);

export const getCurrentStepContent = createSelector(
  [getCurrentStep],
  currentStep => {
    return currentStep.content;
  }
);

export const getCurrentStepBullets = createSelector(
  [getCurrentStep],
  currentStep => {
    return currentStep.bullets;
  }
);

export const getCurrentStepName = createSelector(
  [getCurrentStep],
  currentStep => {
    return currentStep.name;
  }
);

export const getCurrentStepPersonaId = createSelector(
  [getCurrentStep],
  currentStep => {
    return currentStep.personaId;
  }
);

export const getCurrentPersonaSteps = createSelector(
  [getAllSteps, getCurrentPersonaId],
  (allSteps, currentPersonaId) => {
    return filter(allSteps, { personaId: currentPersonaId });
  }
);
