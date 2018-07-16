import { createSelector } from 'reselect';
import { find, findIndex, filter, map, uniq, flatten, compact } from 'lodash';

import {
  getCurrentPersonaId,
  getDefaultUrls,
  getPersonas
} from 'state/personas/selectors.js';

import { getDisplayPresenterContent } from 'state/ui/selectors.js';

function addIndexToArray(array) {
  return map(array, (el, index) => {
    el.index = index;
    el.number = index + 1;
    return el;
  });
}

export const getDemosState = state => state.demos;

export const getDemosConfig = createSelector(
  [getDemosState],
  demosState => demosState.config
);

export const getDemosConfigData = createSelector(
  [getDemosConfig],
  config => config.data
);

export const getDemosConfigOrder = createSelector(
  [getDemosConfig],
  config => config.order
);

export const getDemosTempConfig = createSelector(
  [getDemosState],
  demosState => demosState.tempConfig
);

export const getDemosTempConfigData = createSelector(
  [getDemosTempConfig],
  config => config.data
);

export const getDemosTempConfigOrder = createSelector(
  [getDemosTempConfig],
  config => config.order
);

export const getDemosMap = createSelector(
  [getDemosState],
  demosState => demosState.demosMap
);

export const getDemosIdList = createSelector(
  [getDemosState],
  demosState => demosState.demosIdList
);

export const getDemos = createSelector(
  [getDemosMap, getDemosIdList, getDemosConfigData],
  (demosMap, demosIdList, demosData) =>
    map(demosIdList, id => ({ ...demosMap[id], ...demosData[id] }))
);

export const getSortedDemos = createSelector(
  [getDemosMap, getDemosConfigOrder],
  (demosMap, demosIdList) => map(demosIdList, id => demosMap[id])
);

export const getSortedIncludedDemos = createSelector(
  [getSortedDemos, getDemosConfigData],
  (sortedDemos, demoData) =>
    filter(sortedDemos, demo => demoData[demo.id].included)
);

export const getCurrentDemoId = createSelector(
  [getDemosState],
  demosState => demosState.currentDemoId
);

export const getTempDemos = createSelector(
  [
    getDemosMap,
    getDemosTempConfigOrder,
    getDemosTempConfigData,
    getDemosConfigData
  ],
  (demosMap, idList, demosData, currentDemosData) =>
    map(idList, id => ({
      ...demosMap[id],
      ...demosData[id],
      currentConfig: currentDemosData[id]
    }))
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
  [getCurrentDemoId, getSortedIncludedDemos],
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
    return (allSteps && allSteps[currentStepIndex]) || 0;
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

export const getCurrentStepContent = createSelector(
  [
    getDisplayPresenterContent,
    getCurrentStepTrainingContent,
    getCurrentStepPresenterContent
  ],
  (isPresenterMode, trainingContent, presenterContent) => {
    if (isPresenterMode && presenterContent) {
      return presenterContent;
    }
    if (!isPresenterMode && trainingContent) {
      return trainingContent;
    }
    return 'No data available';
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

export const getCurrentPersonaUrlOverride = createSelector(
  [getCurrentStepUrlOverrides, getCurrentPersonaId],
  (urlOverrides, currentPersonaId) => {
    return urlOverrides && currentPersonaId
      ? find(urlOverrides, { personaId: currentPersonaId })
      : null;
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
