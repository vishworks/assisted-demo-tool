import { find, first, toInteger } from 'lodash'
import { setGlobalError } from '../ui/actions.js'
import { parseCurrentHash } from '../../helpers/HashUtils.js'
import { loadConfig } from './actions.js'


export function asyncLoadConfig(configUrl) {

  return function (dispatch) {
    return setTimeout(() => {
      fetch(configUrl).then(
          response => {
          try {
            response.json().then(function (data) {

              // select currently selected state after loadConfig
              let { demoId, stepNumber, personaId } = parseCurrentHash();
              let selectedDemoId, selectedStepIndex, selectedPersonaId;


              selectedDemoId = (demoId && find(data.demos, { id: demoId })) ?
                demoId :
                first(data.demos).id;

              selectedStepIndex = !!stepNumber ?
              toInteger(stepNumber) - 1 :
                0;

              selectedPersonaId = (personaId && find(data.personas, { id: personaId })) ?
                personaId :
                first(data.personas).id;



              dispatch(loadConfig(data, selectedDemoId, selectedStepIndex, selectedPersonaId));



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
