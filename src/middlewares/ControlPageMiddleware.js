import { includes } from 'lodash'

import { TYPE, setDisplayMode, loadConfig } from '../actions'
import DisplayModeEnum from '../enums/DisplayMode.js'
import { getDisplayMode } from '../selectors'

const CONTROL_PAGE_NAME = 'ControlPage'; // CONTROL_PAGE_NAME is opened by DISPLAY_PAGE_NAME

const MessageType = Object.freeze({
  ACTION: 'FORWARD_ACTION',
  WINDOW_CLOSED: 'WINDOW_CLOSED',
  INIT_CONTROL_PAGE: 'INIT_CONTROL_PAGE'
});

const NOT_FORWARDABLE_ACTIONS = [
  TYPE.SET_DISPLAY_MODE,
  TYPE.LOAD_CONFIG
];

var controlPageWindow;

const ControlCenterMiddleware = store => {

  // handle other window's messages
  window.addEventListener('message', (ev) => {
    switch (ev.data.type) {
      case MessageType.INIT_CONTROL_PAGE:
        store.dispatch(setDisplayMode(DisplayModeEnum.CONTROL_PAGE));
        store.dispatch(loadConfig(ev.data.payload.config));
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
    if (!detachedMode && action.type === TYPE.SET_DISPLAY_MODE) {
      if (action.payload.displayMode === DisplayModeEnum.DETACHED_PAGE) {
        controlPageWindow = window.open(window.location.href, CONTROL_PAGE_NAME, 'width=1020,height=800' );
        controlPageWindow.addEventListener('load', () => {
          controlPageWindow.postMessage({
            type: MessageType.INIT_CONTROL_PAGE,
            payload: {
              config: store.getState().appReducer.config
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