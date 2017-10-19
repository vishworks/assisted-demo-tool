
import { get, overArgs, mapValues } from 'lodash'
import * as demoSelectors from './selectors.js'


// FIXME centralize this logic
const PATH = 'demos';
const createLocalSelectors = (selectors, path) => mapValues(selectors, func => overArgs(func, state => get(state, path)));


const localSelectors = createLocalSelectors(demoSelectors, PATH);

export default localSelectors;

export const getDemos = localSelectors.getDemos;
export const getCurrentDemoId = localSelectors.getCurrentDemoId;
export const getTempDemos = localSelectors.getTempDemos;
export const getCurrentDemo = localSelectors.getCurrentDemo;
export const getAllSteps = localSelectors.getAllSteps;
export const getCurrentDemoStepsCount = localSelectors.getCurrentDemoStepsCount;