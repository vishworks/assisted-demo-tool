
import { TYPE } from '../actions'

const initialState = {
  currentPersona: 'pippo',
  currentUrl: 'http://example.com'
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case TYPE.SELECT_PERSONA:
      return Object.assign({}, state, { currentPersona: action.payload.id });

    default:
      return state
  }
};

export default reducer;