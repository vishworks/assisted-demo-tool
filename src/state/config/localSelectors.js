
import { get, overArgs, mapValues } from 'lodash'
import * as demoSelectors from './selectors.js'


// FIXME centralize this logic
const PATH = 'config';
const createLocalSelectors = (selectors, path) => mapValues(selectors, func => overArgs(func, state => get(state, path)));


const localSelectors = createLocalSelectors(demoSelectors, PATH);

export default localSelectors;

export const getConfig = localSelectors.getConfig;
