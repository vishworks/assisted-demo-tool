
import { TYPE } from '../actions'

const initialState = {
  currentPersona: 'businessManager', // FIXME remove hardcoded, refactor as currentPersonaId
  currentUrl: 'http://example.com',
  currentDemoId: 'demoA',
  currentStepIndex: 0
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case TYPE.SELECT_PERSONA:
      return Object.assign({}, state, { currentPersona: action.payload.id });

    case TYPE.NEXT_STEP:
      return Object.assign({}, state, { currentStepIndex: ++state.currentStepIndex });

    case TYPE.PREV_STEP:
      return Object.assign({}, state, { currentStepIndex: --state.currentStepIndex });

    default:
      return state
  }
};

export default reducer;