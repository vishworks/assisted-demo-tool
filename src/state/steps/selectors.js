

import { createSelector } from 'reselect'
import { find, filter, map, get, uniq, intersection, includes, memoize, overArgs, forEach } from 'lodash'


export const getCurrentStepIndex = state => state.currentStepIndex;
export const getSteps = state => state.steps;


function addIndexToArray(array) {
  return map(array, (el, index) => {
    el.index = index;
    return el;
  });
}

export const getAllSteps = createSelector(
  [getSteps],
  (steps) => {
    return steps && addIndexToArray(steps);
  }
);

export const getStepsCount = createSelector(
  [getSteps],
  (steps) => {
    return steps && steps.length;
  }
);


export const getCurrentStep = createSelector(
  [getAllSteps, getCurrentStepIndex],
  (allSteps, currentStepIndex) => {
    return allSteps[currentStepIndex];
  }
);

export const getNextStep = createSelector(
  [getAllSteps, getCurrentStepIndex],
  (allSteps, currentStepIndex) => {
    return currentStepIndex === allSteps.length - 1 ? allSteps[currentStepIndex] : allSteps[currentStepIndex + 1];
  }
);

export const getPrevStep = createSelector(
  [getAllSteps, getCurrentStepIndex],
  (allSteps, currentStepIndex) => {
    return currentStepIndex === 0 ? allSteps[0] :  allSteps[currentStepIndex - 1];
  }
);

export const getCurrentStepContent = createSelector(
  [getCurrentStep],
  (currentStep) => {
    return currentStep.content;
  }
);

export const getCurrentStepBullets = createSelector(
  [getCurrentStep],
  (currentStep) => {
    return currentStep.bullets;
  }
);

export const getCurrentStepName = createSelector(
  [getCurrentStep],
  (currentStep) => {
    return currentStep.name;
  }
);
