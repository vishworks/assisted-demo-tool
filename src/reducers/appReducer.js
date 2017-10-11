
import { merge, find, isNumber, isNaN } from 'lodash'

import { TYPE } from '../actions'

import { forEach, get } from 'lodash'

import validate from '../helpers/ConfigValidator.js'
import parseHash from '../helpers/HashParser.js'


const initialState = {
  config: null,
  current: {
    personaId: null,
    stepIndex: null,
    demoId: null,
    url: null
  },
  error: {
    message: ''
  }
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {

    case TYPE.LOAD_CONFIG:
      var valid = validate(action.payload.config);
      if (!valid) {
        let msg = '';
        forEach(validate.errors, (error) => {
          msg += ('config' + error.dataPath + ' ' + error.message + ':\n' + JSON.stringify(get(action.payload.config, error.dataPath.substring(1)), null, 2) + '\n\n');
        });
        return merge({}, initialState, {
          error: { message: msg }
        });
      }

      // if set in url
      let hashState = updateStateFromHash(action.payload.config, window.location.hash);

      let newState = {
          config: action.payload.config,
        };
      return merge({}, state, newState, hashState);

    case TYPE.UPDATE_STATE_FROM_HASH:
      return merge({}, state, updateStateFromHash(state.config, action.payload.hash));

    case TYPE.SET_CONFIG_ERROR:
      return merge({}, initialState, {
        error: { message: action.payload.errorMessage }
      });


    case TYPE.SELECT_PERSONA:
      return updateHashFromState(
        merge({}, state, { current: { personaId: action.payload.id } })
      );

    case TYPE.NEXT_STEP:
      if (state.current.stepIndex === getCurrentDemo(state).steps.length - 1) {
        return state;
      }
      return gotoStep(state, state.current.stepIndex + 1);

    case TYPE.PREV_STEP:
      if (state.current.stepIndex === 0) {
        return state;
      }
      return gotoStep(state, state.current.stepIndex - 1);

    case TYPE.GOTO_STEP:
      let stepIndex = action.payload.stepIndex;
      if (stepIndex < 0 || stepIndex >= getCurrentDemo(state).steps.length) {
        return state;
      }
      return gotoStep(state, stepIndex);

    case TYPE.UPDATE_STATE_FROM_URL:
      console.log(action);
      return state;

    default:
      return state
  }
};

function getCurrentDemo(state) {
  return find(state.config.demos, { id: state.current.demoId });
}
function gotoStep(state, stepIndex)  {
  let curDemo = getCurrentDemo(state),
    newStepIndex = stepIndex,
    newStep = curDemo.steps[newStepIndex],
    newPersonaId = newStep.personaId,
    newUrl = newStep.url;
  return updateHashFromState(
    merge({}, state, {
      current: {
        stepIndex: newStepIndex,
        personaId: newPersonaId,
        url: newUrl
      }
    })
  );
}


/**
 * Updates state based on the URL hash
 * @param {string} hash the URL hash fragment
 * @returns {object} the new state
 */
function updateStateFromHash(config, hash) {

  let opts = parseHash(hash),
    hashState = {};

  let selectedDemo = find(config.demos, { id: opts.demoId });
  if (!selectedDemo) {
    selectedDemo = get(config, 'demos.0');
  }
  hashState.demoId = selectedDemo.id;


  let stepNumber = parseInt(opts.stepNumber, 10);
  if (isNumber(stepNumber) && !isNaN(stepNumber) && stepNumber > 0 && stepNumber <= selectedDemo.steps.length) {
    hashState.stepIndex = stepNumber -1;
  } else  {
    hashState.stepIndex = 0;
  }
  hashState.url = selectedDemo.steps[hashState.stepIndex].url;

  // FIXME find among the demo's personas, not the global personas
  if (find(config.personas, { name: opts.personaId })) {
    hashState.personaId = opts.personaId;
  } else {
    hashState.personaId = selectedDemo.steps[hashState.stepIndex].personaId;
  }

  return updateHashFromState({
    current: hashState
  });
}

/**
 * Updates the URL hash (window.location.hash) based on the state object
 * @param state
 * @returns {object} the input state, unmodified (for chaining)
 */
function updateHashFromState(state) {
  window.location.hash = [
    'demoId=' + encodeURIComponent(state.current.demoId),
    'personaId=' + encodeURIComponent(state.current.personaId),
    'stepNumber=' + encodeURIComponent(state.current.stepIndex+1)
    ].join('--');

  return state;
}

export default reducer;