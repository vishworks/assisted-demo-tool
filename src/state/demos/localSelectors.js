
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

export const getCurrentStepIndex = localSelectors.getCurrentStepIndex;
export const getSteps = localSelectors.getSteps;
export const getAllSteps = localSelectors.getAllSteps;
export const getStepsCount = localSelectors.getStepsCount;
export const getCurrentStep = localSelectors.getCurrentStep;
export const getCurrentStepContent = localSelectors.getCurrentStepContent;
export const getCurrentStepBullets = localSelectors.getCurrentStepBullets;
export const getCurrentStepName = localSelectors.getCurrentStepName;
export const getIsFirstStep = localSelectors.getIsFirstStep;
export const getIsLastStep = localSelectors.getIsLastStep;
