
import { merge, find, isNumber, isNaN, map, forEach, get, cloneDeep, omit } from 'lodash'

import { TYPE } from '../actions'
import TYPE_DEMOS from '../state/demos/types.js'

import validate from '../helpers/ConfigValidator.js'
import { parseHash } from '../helpers/HashUtils.js'


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
  },
  visual: {
    activePopup: '',
    displayBullets: false
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
          config: action.payload.config
        };
      newState.config.demos = map(newState.config.demos, (demo) => {
        demo.included = true;
        return demo;
      });
      return merge({}, state, newState, hashState);


    case TYPE.SET_CONFIG_ERROR:
      return merge({}, initialState, {
        error: { message: action.payload.errorMessage }
      });


    case TYPE.STEP_CONTENT_SHOW_BULLETS:
      return merge({}, state, { visual: { displayBullets: action.payload.show } });




    default:
      return state
  }
};

function getCurrentDemo(state) {
  return find(state.config.demos, { id: state.current.demoId });
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
  if (find(config.personas, { id: opts.personaId })) {
    hashState.personaId = opts.personaId;
  } else {
    hashState.personaId = selectedDemo.steps[hashState.stepIndex].personaId;
  }

  return { current: hashState };
}

export default reducer;