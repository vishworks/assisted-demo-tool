
import { createSelector } from 'reselect'
import { find, filter, map, get } from 'lodash'


function addIndexToArray(array) {
  return map(array, (el, index) => {
    el.index = index;
    return el;
  });
}



export const getPersonas = state => get(state.appReducer.config, 'personas', null);
export const getDemos = state => get(state.appReducer.config, 'demos', null);
export const getCurrentStepIndex = state => state.appReducer.current.stepIndex;
export const getCurrentPersonaId = state => state.appReducer.current.personaId;
export const getCurrentDemoId = state => state.appReducer.current.demoId;

export const getControlWidgetStatus = state => state.controlWidget.status;

export const getCurrentPersona = createSelector(
  [getCurrentPersonaId, getPersonas],
  (currentPersonaId, personas) => {
    return find(personas, { name: currentPersonaId } );
  }
);

export const getNotSelectedPersonas = createSelector(
  [getCurrentPersonaId, getPersonas],
  (currentPersonaId, personas) => {
    return filter(personas, (persona) => { return persona.name !== currentPersonaId } );
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