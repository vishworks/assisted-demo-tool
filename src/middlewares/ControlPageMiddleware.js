import { includes } from 'lodash'

import { loadConfig } from '../state/config/actions.js'
import { LOAD_CONFIG } from '../state/config/types.js'
import { SET_DISPLAY_MODE } from '../state/ui/types.js'

import { setDisplayMode } from '../state/ui/actions.js'
import DisplayModeEnum from '../enums/DisplayMode.js'
import { getDisplayMode } from '../state/ui/selectors.js'

import { getCurrentPersonaId } from '../state/personas/selectors.js'
import { getCurrentDemoId, getCurrentStepIndex } from '../state/demos/selectors.js'

import { getConfig } from '../state/config/selectors.js'

const CONTROL_PAGE_NAME = 'ControlPage'; // CONTROL_PAGE_NAME is opened by DISPLAY_PAGE_NAME

const MessageType = Object.freeze({
  ACTION: 'FORWARD_ACTION',
  WINDOW_CLOSED: 'WINDOW_CLOSED',
  INIT_CONTROL_PAGE: 'INIT_CONTROL_PAGE'
});

const NOT_FORWARDABLE_ACTIONS = [
  SET_DISPLAY_MODE,
  LOAD_CONFIG
];

var controlPageWindow;

const ControlCenterMiddleware = store => {

  // handle other window's messages
  window.addEventListener('message', (ev) => {
    switch (ev.data.type) {
      case MessageType.INIT_CONTROL_PAGE:
        store.dispatch(setDisplayMode(DisplayModeEnum.CONTROL_PAGE));
        let { config, initialDemoId, initialStepIndex, initialPersonaId } = ev.data.payload;
        store.dispatch(loadConfig(config, initialDemoId, initialStepIndex, initialPersonaId));
        break;
      case MessageType.ACTION:
        store.dispatch(ev.data.payload.action);
        break;
      case MessageType.WINDOW_CLOSED:
        let isControlPage = getDisplayMode(store.getState()) === DisplayModeEnum.CONTROL_PAGE;
        if (isControlPage) {
          window.close();
        } else {
          store.dispatch(setDisplayMode(DisplayModeEnum.CONTROL_WIDGET));
        }
        break;
      default:
        break;
    }
  });

  // when the window is closing, it sends a message to the other window
  window.addEventListener('beforeunload', (ev) => {
    let isControlPage = getDisplayMode(store.getState()) === DisplayModeEnum.CONTROL_PAGE;
    let otherWindow = isControlPage ? window.opener : controlPageWindow;
    otherWindow.postMessage({ type: MessageType.WINDOW_CLOSED }, '*');
  });

  return next => action => {

    var displayMode = getDisplayMode(store.getState());
    var isControlPage = displayMode === DisplayModeEnum.CONTROL_PAGE,
      detachedMode = isControlPage || displayMode === DisplayModeEnum.DETACHED_PAGE;

    // when the user sets the display mode to "display page + control page"
    if (!detachedMode && action.type === SET_DISPLAY_MODE) {
      if (action.payload.displayMode === DisplayModeEnum.DETACHED_PAGE) {
        controlPageWindow = window.open(window.location.href, CONTROL_PAGE_NAME, 'width=' + (window.screen.availWidth || 1100) + ',height=' + (window.screen.availHeight || 800));
        controlPageWindow.addEventListener('load', () => {
          let state = store.getState();
          controlPageWindow.postMessage({
            type: MessageType.INIT_CONTROL_PAGE,
            payload: {
              config: getConfig(state),
              initialDemoId: getCurrentDemoId(state),
              initialStepIndex: getCurrentStepIndex(state),
              initialPersonaId: getCurrentPersonaId(state)
            }
          }, '*');
        });
      }
    }

    // if it's the control page, forward actions to the display page
    if (isControlPage && !includes(NOT_FORWARDABLE_ACTIONS, action.type)) {
      try {
        window.opener.postMessage({
          type: MessageType.ACTION,
          payload: {
            action: action
          }
        }, '*');
      } catch (e) {
        // probably thunk, do nothing
      }
    }


    return next(action);
  }
};



export default ControlCenterMiddleware;
