
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
          config: omit(action.payload.config, 'personas')
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


    case TYPE.NEXT_STEP:
      return gotoStep(
        state,
        state.current.stepIndex + 1,
        action.meta.stepsCount
      );

    case TYPE.PREV_STEP:
      return gotoStep(
        state,
        state.current.stepIndex - 1,
        action.meta.stepsCount
      );

    case TYPE.GOTO_STEP:
      return gotoStep(
        state,
        action.payload.stepIndex,
        action.meta.stepsCount
      );

    case TYPE.POPUP_OPEN:
      return merge({}, state, { visual: { activePopup: action.payload.popupId } });

    case TYPE.POPUP_CLOSE_ALL:
      return merge({}, state, { visual: { activePopup: '' } });

    case TYPE.STEP_CONTENT_SHOW_BULLETS:
      return merge({}, state, { visual: { displayBullets: action.payload.show } });

    case TYPE.DEMO_EXCLUDE:
      let newDemos = map(state.config.demos, (demo) => {
        if (action.payload.demoId === demo.id) {
          demo.included = false;
        }
        return demo;
      });
      return merge({}, state, { config: { demos: newDemos } });

    case TYPE.DEMO_INCLUDE:
      let newDemos2 = map(state.config.demos, (demo) => {
        if (action.payload.demoId === demo.id) {
          demo.included = true;
        }
        return demo;
      });
      return merge({}, state, { config: { demos: newDemos2 } });

    case TYPE.DEMO_MOVE_TO_INDEX:
      let { newIndex, oldIndex } = action.payload;
      if (newIndex < 0 || newIndex >= state.config.demos.length) {
        return state;
      }
      let newDemos3 = cloneDeep(state.config.demos);
      let park = newDemos3[newIndex];
      newDemos3[newIndex] = newDemos3[oldIndex];
      newDemos3[oldIndex] = park;
      return merge({}, state, { config: { demos: newDemos3 } });


    case TYPE_DEMOS.DEMOS_SETTINGS_SELECT_DEMO:
      return gotoStep(state, 0);




    default:
      return state
  }
};

function getCurrentDemo(state) {
  return find(state.config.demos, { id: state.current.demoId });
}
function gotoStep(state, stepIndex, stepsCount)  {

  if (stepIndex < 0 || stepIndex >= stepsCount) {
    return state;
  }
  // FIXME send actions from middleware to do this
  let curDemo = getCurrentDemo(state),
    newStepIndex = stepIndex,
    newStep = curDemo.steps[newStepIndex],
    newPersonaId = newStep.personaId,
    newUrl = newStep.url;
  return merge({}, state, {
          current: {
            stepIndex: newStepIndex,
            personaId: newPersonaId,
            url: newUrl
          }
        });
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