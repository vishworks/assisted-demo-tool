
import { LOAD_CONFIG } from './types.js'




const config = (state = {}, action = {}) => {
  switch (action.type) {

    case LOAD_CONFIG:
      return Object.assign({}, state, action.payload.config);

    default:
      return state
  }
};

export default config;