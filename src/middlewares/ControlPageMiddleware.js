
import { startsWith } from 'lodash'

import { TYPE, setDisplayMode } from '../actions'
import DisplayModeEnum from '../enums/DisplayMode.js'


const CONTROL_PAGE_NAME = 'ControlPage'; // CONTROL_PAGE_NAME is opened by DISPLAY_PAGE_NAME
const DISPLAY_PAGE_NAME = 'DisplayPage';

const MessageType = Object.freeze({
  ACTION: 'ACTION',
  WINDOW_CLOSED: 'WINDOW_CLOSED'
});

var controlPageWindow = null,
  displayPageWindow = null,
  detachedMode, windowRole, token = Date.now();




const messageHandler = (ev) => {
  console.log('message', ev.data);
  switch (ev.data.type) {
    case MessageType.ACTION:
      dispatch(ev.data.payload);
      break;
    case MessageType.WINDOW_CLOSED:
      dispatch(setDisplayMode(DisplayModeEnum.CONTROL_WIDGET_MINI));
      window.removeEventListener('message', messageHandler); // remove this event listener
      detachedMode = false;
      windowRole = DISPLAY_PAGE_NAME;
      console.info('Detached mode: deactivated', windowRole);
      break;
  }
};

const beforeUnloadHandler = (ev) => {
  ev.preventDefault();
  if (controlPageWindow) {
    if (controlPageWindow.name === window.name) {

      displayPageWindow.postMessage({
          type: MessageType.WINDOW_CLOSED
        },
        '*');
      controlPageWindow.postMessage({
          type: MessageType.WINDOW_CLOSED
        },
        '*');
    } else {
      alert('closing display!');
      controlPageWindow.postMessage({
          type: MessageType.WINDOW_CLOSED
        },
        '*');
      displayPageWindow.postMessage({
          type: MessageType.WINDOW_CLOSED
        },
        '*');
    }
  }
};


if (!window.opener && startsWith(window.name, CONTROL_PAGE_NAME)) {
  debugger;
}

if (window.opener && startsWith(window.name, CONTROL_PAGE_NAME)) {
  displayPageWindow = window.opener;
  controlPageWindow = window;
  window.addEventListener('beforeunload', beforeUnloadHandler);
  window.addEventListener('message', messageHandler);
  detachedMode = true;
  windowRole = CONTROL_PAGE_NAME;
  console.info('Detached mode: active', windowRole);
} else {
  window.name = DISPLAY_PAGE_NAME;
  detachedMode = false;
  console.info('Detached mode: inactive', windowRole);
  windowRole = DISPLAY_PAGE_NAME;
}

var dispatch;

const ControlPageMiddleware = store => {
  dispatch = store.dispatch.bind(store);
  return next => action => {

    // don't change the display mode from the control view
    if (action.type === TYPE.SET_DISPLAY_MODE) {
      return next(action);
    }

    try { // FIXME passing thunks does not work
      displayPageWindow.postMessage({
          type: 'ACTION',
          payload: action
        },
        '*');
    } catch (e) {}

    return next(action);
  }
};

const DisplayPageMiddleware = store => {

  dispatch = store.dispatch.bind(store);
  return next => action => {

    // when the user sets the display mode to "display page + control page"
    if (action.type === TYPE.SET_DISPLAY_MODE) {
      if (action.payload.displayMode === DisplayModeEnum.DETACHED_PAGE) {

        // if already in detached mode, do nothing
        if (detachedMode)  {
   //       return;
        }

        detachedMode = true;
        console.info('Detached mode: activated', windowRole);
        windowRole = DISPLAY_PAGE_NAME;

        // open the control page
        controlPageWindow = window.open(window.location.href, CONTROL_PAGE_NAME + '-' + token );
        controlPageWindow.addEventListener('load', () => {
          controlPageWindow.postMessage({
            type: MessageType.ACTION,
            payload: setDisplayMode(DisplayModeEnum.CONTROL_PAGE)
          }, '*');
        });

        // handle messages from control page
        window.addEventListener('message', messageHandler);
        window.addEventListener('beforeunload', beforeUnloadHandler);

      }
    }
    return next(action);
  }
};

const DetachedPageMiddleware = windowRole === CONTROL_PAGE_NAME ?
  ControlPageMiddleware :
  DisplayPageMiddleware;

export default DetachedPageMiddleware;
