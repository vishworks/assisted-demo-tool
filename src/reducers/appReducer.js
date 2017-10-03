
import { TYPE } from '../actions'

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
      // FIXME check config malformation

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

    default:
      return state
  }
};

export default reducer;