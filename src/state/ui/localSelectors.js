
import { get, overArgs, mapValues } from 'lodash'
import * as uiSelectors from './selectors.js'


// FIXME centralize this logic
const PATH = 'ui';
const createLocalSelectors = (selectors, path) => mapValues(selectors, func => overArgs(func, state => get(state, path)));

const localSelectors = createLocalSelectors(uiSelectors, PATH);

export default localSelectors;

export const getActivePopup = localSelectors.getActivePopup;
export const getDisplayMode = localSelectors.getDisplayMode;