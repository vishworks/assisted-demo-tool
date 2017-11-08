
import { default as TYPE } from './types.js'




const config = (state = {}, action = {}) => {
  switch (action.type) {

    case TYPE.LOAD_CONFIG:
      return Object.assign({}, state, action.payload.config);

    default:
      return state
  }
};

export default config;