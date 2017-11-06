
import { get, overArgs, mapValues } from 'lodash'
import * as demoSelectors from './selectors.js'


// FIXME centralize this logic
const PATH = 'personas';
const createLocalSelectors = (selectors, path) => mapValues(selectors, func => overArgs(func, state => get(state, path)));


const localSelectors = createLocalSelectors(demoSelectors, PATH);

export default localSelectors;

export const getCurrentPersonaId = localSelectors.getCurrentPersonaId;
export const getPersonas = localSelectors.getPersonas;
export const getCurrentPersona = localSelectors.getCurrentPersona;
export const getNotSelectedPersonas = localSelectors.getNotSelectedPersonas;
export const getVisiblePersonas = localSelectors.getVisiblePersonas;
export const getVisibleNotSelectedPersonas = localSelectors.getVisibleNotSelectedPersonas;
export const getCurrentPersonaImageUrl = localSelectors.getCurrentPersonaImageUrl;
export const getCurrentPersonaLabel = localSelectors.getCurrentPersonaLabel;
export const getCurrentPersonaDescription = localSelectors.getCurrentPersonaDescription;
export const getCurrentUrl = localSelectors.getCurrentUrl;
export const getUrls = localSelectors.getUrls;
