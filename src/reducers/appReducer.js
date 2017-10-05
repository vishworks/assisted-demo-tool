
import { merge, first, find } from 'lodash'

import { TYPE } from '../actions'

import validate from '../helpers/ConfigValidator.js'


const initialState = {
  config: null,
  current: {
    personaId: null,
    stepIndex: null,
    demoId: null,
    url: null
  }
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {

    case TYPE.LOAD_CONFIG:
      var valid = validate(action.payload.config);
      if (!valid) {
        alert('Configuration error');
        console.error(validate.errors);
        // TODO human readable validation errors
        return;
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