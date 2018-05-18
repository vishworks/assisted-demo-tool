import { createSelector } from 'reselect';
import { find, findIndex, filter, map, uniq, flatten, compact } from 'lodash';

import {
  getCurrentPersonaId,
  getDefaultUrls,
  getCurrentPersonaUrl,
  getPersonas
} from 'state/personas/selectors.js';

function addIndexToArray(array) {
  return map(array, (el, index) => {
    el.index = index;
    el.number = index + 1;
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

export const getCurrentStepNumber = createSelector(
  [getCurrentStepIndex],
  currentStepIndex => currentStepIndex + 1
);

export const getCurrentDemo = createSelector(
  [getCurrentDemoId, getDemos],
  (currentDemoId, demos) => {
    return find(demos, { id: currentDemoId });
  }
);

export const getNextDemo = createSelector(
  [getCurrentDemoId, getIncludedDemos],
  (currentDemoId, demos) => {
    if (!demos || !currentDemoId) {
      return null;
    }
    const curDemoIndex = findIndex(demos, { id: currentDemoId });
    if (curDemoIndex < 0 || curDemoIndex >= demos.length - 1) {
      return null;
    }
    return demos[curDemoIndex + 1];
  }
);

export const getNextDemoId = createSelector([getNextDemo], demo => {
  return demo ? demo.id : '';
});

export const getCurrentDemoEstimatedTime = createSelector(
  [getCurrentDemo],
  currentDemo => {
    return currentDemo && currentDemo.estimatedTime;
  }
);

export const getCurrentDemoTitle = createSelector(
  [getCurrentDemo],
  currentDemo => {
    return currentDemo && currentDemo.title;
  }
);

export const getCurrentDemoPersonasIds = createSelector(
  [getCurrentDemo],
  currentDemo => {
    return currentDemo && currentDemo.personas;
  }
);

export const getCurrentDemoPersonas = createSelector(
  [getPersonas, getCurrentDemoPersonasIds],
  (personas, personasIds) => {
    return personasIds
      ? personas.filter(persona => personasIds.includes(persona.id))
      : personas;
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

export const getCurrentStepTrainingContent = createSelector(
  [getCurrentStep],
  currentStep => {
    return currentStep.trainingContent;
  }
);

export const getCurrentStepPresenterContent = createSelector(
  [getCurrentStep],
  currentStep => {
    return currentStep.presenterContent;
  }
);

export const getCurrentStepHasPresenterContent = createSelector(
  [getCurrentStepPresenterContent],
  presenterContent => {
    return !!presenterContent;
  }
);

export const getCurrentStepHasTrainingContent = createSelector(
  [getCurrentStepTrainingContent],
  trainingContent => {
    return !!trainingContent;
  }
);

export const getCurrentStepTitle = createSelector(
  [getCurrentStep],
  currentStep => {
    return currentStep.title;
  }
);

export const getCurrentStepUrlOverrides = createSelector(
  [getCurrentStep],
  currentStep => {
    return currentStep && currentStep.urlOverrides;
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

// returns all visible personas for this demo, or hidden if the current step has an hidden persona
export const getCurrentStepVisiblePersonas = createSelector(
  [getCurrentDemoPersonas, getCurrentStepPersonaId],
  (stepPersonas, curPersonaId) => {
    return stepPersonas.filter(
      persona => !persona.hidden || persona.id === curPersonaId
    );
  }
);

export const getCurrentStepNotSelectedVisiblePersonas = createSelector(
  [getCurrentStepVisiblePersonas, getCurrentStepPersonaId],
  (stepPersonas, curPersonaId) => {
    return stepPersonas.filter(persona => persona.id !== curPersonaId);
  }
);

export const getAllStepUrls = createSelector([getSteps], steps => {
  return uniq(
    flatten(
      compact(
        map(steps, step => {
          return step.urlOverrides && map(step.urlOverrides, 'url');
        })
      )
    )
  );
});

export const getAllUrls = createSelector(
  [getDefaultUrls, getAllStepUrls],
  (defaultPersonaUrls, stepUrls) => {
    return defaultPersonaUrls.concat(stepUrls);
  }
);

export const getCurrentUrl = createSelector(
  [getCurrentPersonaId, getCurrentPersonaUrl, getCurrentStepUrlOverrides],
  (currentPersonaId, currentPersonaUrl, stepUrlOverrides) => {
    const personaOverride =
      stepUrlOverrides &&
      find(stepUrlOverrides, { personaId: currentPersonaId });
    return (personaOverride && personaOverride.url) || currentPersonaUrl;
  }
);
