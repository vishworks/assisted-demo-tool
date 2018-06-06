import { find, toInteger, forEach, get } from 'lodash';
import { setGlobalError } from '../ui/actions.js';
import { parseCurrentHash } from '../../helpers/HashUtils.js';
import validateConfig from 'helpers/ConfigValidator.js';
import { loadConfig } from './actions.js';
import { getDemosConfigData } from 'state/demos/selectors.js';

const demoIsIncluded = (demosConfigData, demoId) =>
  !demosConfigData ||
  (demosConfigData[demoId] && demosConfigData[demoId].included);

export function asyncLoadConfig(configUrl) {
  return function(dispatch, getState) {
    // return setTimeout(() => {
    fetch(configUrl).then(
      response => {
        try {
          response.json().then(function(data) {
            if (!validateConfig(data)) {
              let errors = validateConfig.errors,
                errorMsg = 'Errors in configuration:\n\n';

              forEach(errors, err => {
                errorMsg +=
                  'config' +
                  err.dataPath +
                  ' ' +
                  err.message +
                  ' (found: ' +
                  JSON.stringify(get(data, err.dataPath.substring(1))) +
                  ')\n\n';
              });
              dispatch(setGlobalError(errorMsg));
              return;
            }

            // select currently selected state after loadConfig
            const { demoId, stepNumber, personaId } = parseCurrentHash();
            const demosConfigData = getDemosConfigData(getState());
            console.log(demosConfigData);

            // the selected demo:
            // - must exist in the demo list
            // - if a configuration is present, check if it's included. If not pick the first included demo
            const selectedDemo =
              (demoId &&
                demoIsIncluded(demosConfigData, demoId) &&
                find(data.demos, { id: demoId })) ||
              find(data.demos, demo =>
                demoIsIncluded(demosConfigData, demo.id)
              );

            const selectedDemoId = selectedDemo.id;

            const selectedStepIndex = !!stepNumber
              ? toInteger(stepNumber) - 1
              : 0;

            const selectedPersonaId =
              personaId && find(data.personas, { id: personaId })
                ? personaId
                : selectedDemo.steps[selectedStepIndex].personaId;

            dispatch(
              loadConfig(
                data,
                selectedDemoId,
                selectedStepIndex,
                selectedPersonaId
              )
            );
          });
        } catch (er) {
          dispatch(
            setGlobalError(
              "Error parsing configuration JSON at '" +
                configUrl +
                "': " +
                er.message
            )
          );
          console.error(er);
        }
      },
      error => {
        dispatch(
          setGlobalError("Failed to fetch configuration at '" + configUrl + "'")
        );
      }
    );
    // }, 500); // FIXME remove throttling
  };
}
