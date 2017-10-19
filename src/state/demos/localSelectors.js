
import { get, overArgs, mapValues } from 'lodash'
import * as demoSelectors from './selectors.js'


const createLocalSelectors = (selectors, path) => mapValues(selectors, func => overArgs(func, state => get(state, path)));
const localSelectors = createLocalSelectors(demoSelectors, 'demos');

export default localSelectors;


