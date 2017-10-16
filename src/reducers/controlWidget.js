
import { TYPE } from '../actions'
import DisplayModeEnum from '../enums/DisplayMode.js'

const initialState = {
  displayMode: DisplayModeEnum.CONTROL_WIDGET_MINI
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case TYPE.SET_DISPLAY_MODE:
      return Object.assign({}, state, { displayMode: action.payload.displayMode });
    default:
      return state
  }
};

export default reducer;