
import { get, overArgs, mapValues } from 'lodash'
import * as demoSelectors from './selectors.js'


// FIXME centralize this logic
const PATH = 'steps';
const createLocalSelectors = (selectors, path) => mapValues(selectors, func => overArgs(func, state => get(state, path)));


const localSelectors = createLocalSelectors(demoSelectors, PATH);

export default localSelectors;

export const getCurrentStepIndex = localSelectors.getCurrentStepIndex;
export const getSteps = localSelectors.getSteps;
export const getAllSteps = localSelectors.getAllSteps;
export const getStepsCount = localSelectors.getStepsCount;
export const getCurrentStep = localSelectors.getCurrentStep;
export const getNextStep = localSelectors.getNextStep;
export const getPrevStep = localSelectors.getPrevStep;
export const getCurrentStepContent = localSelectors.getCurrentStepContent;
export const getCurrentStepBullets = localSelectors.getCurrentStepBullets;
export const getCurrentStepName = localSelectors.getCurrentStepName;

