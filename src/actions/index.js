import { find, first, toInteger } from 'lodash'
import { setGlobalError } from '../state/ui/actions.js'
import { selectDemo, gotoStep } from '../state/demos/operations.js'
import { selectPersona } from '../state/personas/operations.js'
import { parseCurrentHash } from '../helpers/HashUtils.js'

export const TYPE = {
  LOAD_CONFIG: 'LOAD_CONFIG'
};


export const loadConfig = (data) => {
  return {
    type: TYPE.LOAD_CONFIG,
    payload: {
      config: data
    }
  };
};

// Thunk
export function asyncLoadConfig(configUrl) {

  return function (dispatch) {
    return setTimeout(() => {
      fetch(configUrl).then(
        response => {
          try {
            response.json().then(function (data) {

              // get it before dispatching loadconfig (it would override url hash with default values)
              let { demoId, stepNumber, personaId } = parseCurrentHash();

              dispatch(loadConfig(data));


              if (demoId && find(data.demos, { id: demoId })) {
                dispatch(selectDemo(demoId));
              }
              if (stepNumber) {
                dispatch(gotoStep(toInteger(stepNumber) - 1));
              }
              if (personaId && find(data.personas, { id: personaId })) {
                dispatch(selectPersona(personaId));
              }

            });
          } catch(er) {
            dispatch(setGlobalError('Error parsing configuration JSON at \'' + configUrl + '\': ' + er.message));
            console.error(er);
          }
        },
        (error) => {
          dispatch(setGlobalError('Failed to fetch configuration at \'' + configUrl + '\''));
        }
      );
    }, 500); // FIXME remove throttling
  };
}


