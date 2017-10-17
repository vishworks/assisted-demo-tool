
import { createSelector } from 'reselect'
import { find, filter, map, get, uniq, intersection, includes } from 'lodash'


function addIndexToArray(array) {
  return map(array, (el, index) => {
    el.index = index;
    return el;
  });
}



export const getDemos = state => get(state.appReducer.config, 'demos', null);
export const getCurrentStepIndex = state => state.appReducer.current.stepIndex;
export const getCurrentPersonaId = state => state.appReducer.current.personaId;
export const getCurrentDemoId = state => state.appReducer.current.demoId;

export const getActivePopup = state => state.appReducer.visual.activePopup;
export const getDisplayBullets = state => state.appReducer.visual.displayBullets;

export const getConfigErrorMessage = state => state.appReducer.error.message;

export const getDemoOrder = state => state.appReducer.demoOrder;


export const getPersonas = createSelector(
  [ (state) => get(state.appReducer.config, 'personas', null) ],
  (personas) => {
    return personas ?
      map(personas, (persona) => {
        if (!persona.avatar) {
          persona.avatar = 'img/user.png'
        }
        return persona;
      }) :
      null;
  }
);

export const getCurrentPersona = createSelector(
  [getCurrentPersonaId, getPersonas],
  (currentPersonaId, personas) => {
    return find(personas, { id: currentPersonaId } );
  }
);

export const getNotSelectedPersonas = createSelector(
  [getCurrentPersonaId, getPersonas],
  (currentPersonaId, personas) => {
    return filter(personas, (persona) => { return persona.id !== currentPersonaId } );
  }
);

export const getVisiblePersonas = createSelector(
  [getPersonas],
  (personas) => {
    return filter(personas, (persona) => { return !persona.hidden } );
  }
);

export const getVisibleNotSelectedPersonas = createSelector(
  [getNotSelectedPersonas, getVisiblePersonas],
  (notSelectedPersonas, visiblePersonas) => {
    return intersection(notSelectedPersonas, visiblePersonas);
  }
);

export const getCurrentDemo = createSelector(
  [getCurrentDemoId, getDemos],
  (currentDemoId, demos) => {
    return find(demos, { id: currentDemoId } );
  }
);

export const getAllSteps = createSelector(
  [getCurrentDemo],
  (currentDemo) => {
    return addIndexToArray(currentDemo.steps);
  }
);

export const getCurrentPersonaSteps = createSelector(
  [getAllSteps, getCurrentPersonaId],
  (allSteps, currentPersonaId) => {
    return filter(allSteps, { personaId: currentPersonaId } );
  }
);

export const getCurrentDemoStepsCount = createSelector(
  [getAllSteps],
  (allSteps) => {
    return allSteps.length;
  }
);

export const getCurrentStep = createSelector(
  [getAllSteps, getCurrentStepIndex],
  (allSteps, currentStepIndex) => {
    return allSteps[currentStepIndex];
  }
);

export const getCurrentUrl = createSelector(
  [getCurrentPersona],
  (currentPersona) => {
    return currentPersona.url;
  }
);

export const getUrls = createSelector(
  [getPersonas],
  (personas) => {
    return uniq(map(personas, 'url'));
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

export const getCurrentPersonaImageUrl = createSelector(
  [getCurrentPersona],
  (currentPersona) => {
    return currentPersona.avatar;
  }
);
export const getCurrentPersonaLabel = createSelector(
  [getCurrentPersona],
  (currentPersona) => {
    return currentPersona.label;
  }
);
export const getCurrentPersonaDescription = createSelector(
  [getCurrentPersona],
  (currentPersona) => {
    return currentPersona.description;
  }
);

export const getDemoOrdinatorList = createSelector(
  [getDemos, getDemoOrder],
  (demos, demoOrder) => {
    return map(demos, (demo) => {
      demo.included = includes(demoOrder, demo.id);
      return demo;
    });
  }
);

//--------------------------------------------------------------------------------------------------------------//
//----------------------------------- Control widget visual status----------------------------------------------//
//--------------------------------------------------------------------------------------------------------------//


export const getDisplayMode = state => state.controlWidget.displayMode;