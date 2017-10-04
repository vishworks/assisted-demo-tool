
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
      // FIXME find correctly first demo
      var valid = validate(action.payload.config);
      if (!valid) console.log(validate.errors); // FIXME react to validation errors

      let newState = {
        config: action.payload.config,
        current: {
          personaId: action.payload.config.demos[0].steps[0].personaId,
          stepIndex: 0,
          demoId: action.payload.config.demos[0].id,
          url: action.payload.config.demos[0].steps[0].url
        }
      };
      return Object.assign({}, state, newState);


    case TYPE.SELECT_PERSONA:
      return Object.assign({}, state, { current: { personaId: action.payload.id } });

    case TYPE.NEXT_STEP:

      // FIXME REFACTOR!!
      if (state.current.stepIndex === state.config.demos[0].steps.length - 1) {
        return state;
      }
      let newStepIndex = state.current.stepIndex + 1,
        newStep = state.config.demos[0].steps[newStepIndex], // FIXME please god forgive me if I ever forget to remove this
        newPersonaId = newStep.personaId,
        newUrl = newStep.url;
      return Object.assign({}, state, {
        current: {
          stepIndex: newStepIndex,
          personaId: newPersonaId,
          url: newUrl,
          demoId: state.current.demoId
        }
      });

    case TYPE.PREV_STEP:
      if (state.current.stepIndex === 0) {
        return state;
      }
      // FIXME REFACTOR!!
        newStepIndex = state.current.stepIndex - 1,
        newStep = state.config.demos[0].steps[newStepIndex], // FIXME please god forgive me if I ever forget to remove this
        newPersonaId = newStep.personaId,
        newUrl = newStep.url;
      return Object.assign({}, state, {
        current: {
          stepIndex: newStepIndex,
          personaId: newPersonaId,
          url: newUrl,
          demoId: state.current.demoId
        }
      });

    default:
      return state
  }
};

export default reducer;