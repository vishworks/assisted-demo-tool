
import { TYPE } from '../actions'

const initialState = {
  currentPersona: 'pippo',
  currentUrl: 'http://example.com'
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case TYPE.CONTROL_WIDGET_MINIMIZE:
      return Object.assign({}, state, { status: 'minimized' });
    case TYPE.CONTROL_WIDGET_MAXIMIZE:
      return Object.assign({}, state, { status: 'expanded' });
    default:
      return state
  }
};

export default reducer;