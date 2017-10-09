
import { merge, first, find } from 'lodash'

import { TYPE } from '../actions'

import { forEach, get } from 'lodash'

import validate from '../helpers/ConfigValidator.js'


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

      let firstDemo = first(action.payload.config.demos),
        firstStep = first(firstDemo.steps),
        newState = {
          config: action.payload.config,
          current: {
            personaId: firstStep.personaId,
            stepIndex: 0,
            demoId: firstDemo.id,
            url: firstStep.url
          }
        };
      return merge({}, state, newState);

    case TYPE.SET_CONFIG_ERROR:
      return merge({}, initialState, {
        error: { message: action.payload.errorMessage }
      });


    case TYPE.SELECT_PERSONA:
      return merge({}, state, { current: { personaId: action.payload.id } });

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
  return merge({}, state, {
    current: {
      stepIndex: newStepIndex,
      personaId: newPersonaId,
      url: newUrl
    }
  });
}

export default reducer;