

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

