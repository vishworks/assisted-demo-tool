

import { createSelector } from 'reselect'
import { find, filter, map, get, uniq, intersection, includes, memoize, overArgs, forEach } from 'lodash'




export const getDemos = state => state.demos;
export const getCurrentDemoId = state => state.currentDemoId;
export const getTempDemos = state => state.tempDemos;


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

export const getCurrentDemoStepsCount = createSelector(
  [getAllSteps],
  (allSteps) => {
    return allSteps.length;
  }
);



function addIndexToArray(array) {
  return map(array, (el, index) => {
    el.index = index;
    return el;
  });
}

