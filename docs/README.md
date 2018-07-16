
# Virgil technical docs

## Table of Contents

- [Introduction](#introduction)
- [Data model](#data-model)
- [Project structure](#project-structure)
- [Configuration validation](#configuration-validation)
- [Persistence](#persistence)
- [Hotlinking](#hotlinking)
- [Display modes](#display-modes)
- [Detached mode](#detached-mode)


### Introduction

This project was bootstrapped with [create-react-app](https://github.com/facebook/create-react-app). It's not ejected, so it can be easier to update.

The state manager is Redux, there are a couple of custom middlewares and subscriptors in place, and `redux-thunk` is used for asynchronous operations and side effects.

The styling is made with pure CSS, loaded via `css-loader` by the original [create-react-app](https://github.com/facebook/create-react-app) Webpack configuration.
The CSS files are located next to their Component JS file, and they share the same name. No specific convention is enforced (eg. BEM).


The code style is loosely enforced using [prettier](https://github.com/prettier/prettier). The only lint configuration is the original one from [create-react-app](https://github.com/facebook/create-react-app).

There are no unit tests at the moment.


### Data model

The main data entities in the project are:

- **config**: it's the configuration, reflected in JSON config file.
  - *personas*: a list of personas
  - *demos*: a list of demos
- **persona**: represents a generic user.
  - *id*: the unique persona id
  - *label*: persona's name or role
  - *shortDesc*: a short persona description
  - *longDesc*: a long persona description
  - *avatar*: the URL of the persona avatar image
  - *url*: the default webapp URL to be shown in the iframe when this persona is selected
  - *tabImg*: the URL of an image to be displayed
  - *hidden*: a boolean. If true, the persona will pop up only when it's the default persona for the current step
  - *organization*: a string. The name of a users company (not required)
- **demo**: represents a demo, a set of sequential steps with an estimated time to be presented. It has an id, a title, estimated time and a list of steps.
  - *id*: the demo unique id
  - *title*: the demo title
  - *estimatedTime*: the time estimated for this demo, expressed in minutes
  - *personas*: a list of (existent) persona ids, to be used for this demo
  - **steps**: a list of demo steps
    - *personaId*: the id of the default persona for this step
    - *title*: the step title
    - *presenterContent*: the HTML test to be shown in Presenter mode
    - *trainingContent*: the HTML test to be shown in Training mode
    - **highlights**: a list of objects describing the steps highlights
      - *title*: the highlight title
      - *text*: the highlight text




### Project structure

The source structure is the following:

```
    docs
    public
    src
    ├── enums
    ├── helpers
    ├── middlewares
    ├── state
    │   ├── [... domain directories ...]
    │   │   ├── actions.js
    │   │   ├── operations.js
    │   │   ├── reducer.js
    │   │   ├── selectors.js
    │   │   └── types.js
    │   └── rootReducer.js
    ├── subscriptions
    ├── ui
    │   └── [... domain directories ...]
    │       ├── components
    │       │   └── [... domain related components ...]
    │       └── containers
    │           └── [... domain related containers ...]

```

- **docs**: the project documentation
- **public**: `index.html`, and some internal demo-related assets (config JSON files, Persona pictures etc.)
- **src**: the project `.js` and `.css` files
  - **enums**: constants files
  - **helpers**: application-wide helpers taht don't belong to the state nor the ui (local storage, validation, parsing utilities etc)
  - **middlewares**: custom `redux` [middlewares](https://redux.js.org/advanced/middleware)
  - **state**: the application `redux` state
    - *domain directories*: directories which contains state for a specific domain of the application (e.g. personas, demos etc.). Each domain directory can contain:
      - **actions.js**: the synchronous [action creators](https://redux.js.org/basics/actions#action-creators)
      - **operations.js**: the [thunks](https://github.com/reduxjs/redux-thunk)
      - **reducer.js**: the [reducer](https://redux.js.org/basics/reducers) for this domain
      - **selectors.js**: the state [selectors](https://redux.js.org/recipes/computing-derived-data)
      - **types.js**: the `redux` action type constants
    - **rootReducer.js**: the root reducer used to create the `redux` store
  - **subscriptions**: [subscriptors](https://redux.js.org/api-reference/store#subscribe-listener) to the `redux` store.
  - **ui**: `react` components
    - *domain directories*: directories which contains `react` components related to a specific data domain. the **shared** directory contains generic components. Each domain directory can contain:
      - **components**: the `react` components which are **not** connected to the state. This includes also their `.css` files
      - **containers**: the `react` components which are connected to the state


### Configuration validation

Virgil works loading a configuration JSON provided via the URL parameter `configUrl`.

The configuration JSON is quite complex and needs to be validated before loading the initial state.
To validate the JSON, a [JSON Schema](http://json-schema.org/) validator is used, called [ajv](https://github.com/epoberezkin/ajv).

The JSON Schema needs to be updated every time there's a change in the configuration structure (e.g. adding / removing/ renaming a property).

The Schema definition is located at `src/helpers/ConfigValidator`.


### Persistence

There is some data defined by the user (e.g. notes, demos order, demos inclusion) that need to be stored locally, so that when the page is reloaded, they are still available.

To persist this data, Virgil uses the `persistState` function at `src/helpers/LocalStorageUtils`. The method will serialize and save part of the state in the `localStorage`.

When loading the page, the part of the state in the `localStorage` (if present) will be added to the Redux state.

The state is saved after each action, or set of actions (if they occur with less than 100ms one from another), via a Redux store subscription, at `src/subscriptions/PersistStateSubscription`.

The subscription is bound to the store at `src/index.js` via the `store.subscribe` method.


### Hotlinking

If you change the `stepNumber` parameter to another (existent) Step number, you can see the page rendering the new Step. Likewise, if you change the `personaId` parameter to an existent Persona id, or the `demoId` parameter to an existent Demo id, the change will be reflected in the rendered page.

This behaviour allows **hotlinking**, that's the ability to select a [Demo, Persona, Step] tuple via URL, so that the first page rendered after loading will show the required tuple. You can copy an URL and paste it in another browser, and you'll have the same Demo, Persona and Step already selected.

The code responsible to validate the URL parameters and select the correct data (or sensible fallbacks) is the `asyncLoadConfig` function at `src/state/config/operations` (for first loading) and `src/middlewares/UrlHashMiddleware` (for when the URL parameters are changed by hand).


On the other side, the current application state is always aligned with the URL: for example, if you press the NEXT button, you will notice the `stepNumber` parameter in the URL hash changes, reflecting the current step number.
The same happens when you change Persona, or go to another Demo.

The URL syncronization happens after each action via a Redux store subscription at `src/subscriptions/HashUpdateSubscription`.


### Display modes

The application has 4 display mode codes:
- `CONTROL_WIDGET`: the window has a column on the right which contains a control widget (persona selector, prev/next buttons, step content etc.), and the iframe is on the left side of the screen
- `CONTROL_WIDGET_MINI`: the iframe occupies the full window width, and a small floating persona selector is on the bottom-right corner on the screen
- `DETACHED_PAGE`: (used in *detached mode*) the window contains only the tabs and the presentation iframe
- `CONTROL_PAGE`: (used in *detached mode*) the window contains the control panel

When the application is in **detached mode**, there are two separate, communicating windows with 2 different display modes: `DETACHED_PAGE` and `CONTROL_PAGE`.
When the `CONTROL_PAGE` is closed, the `DETACHED_PAGE` window will switch to `CONTROL_WIDGET` display mode.


### Detached mode

When the application is in **detached** mode, the two browser tabs share the same state, same URL and same code.
One of them will have display mode = `DETACHED_PAGE`, the other will have display mode = `CONTROL_PAGE`.
They communicate forwarding `redux` Actions via `postMessage`.

When the DETACH button is clicked, the following happens:

1. The current tab display mode is set to `DETACHED_PAGE` via the `SET_DISPLAY_MODE` action.
2. The `SET_DISPLAY_MODE` action is intercepted by the `ControlPageMiddleware`, and here:
    1. a new tab with the current URL is opened using `window.open`, and a reference to the new `Window` object is stored. This is the **control page** window object. Now, the two tabs share the same URL,
    2. a `load` event listener is set on the newly opened window: when the new tab loading is complete, `message` with type `INIT_CONTROL_PAGE` will be sent (via `postMessage`) to the new window, sending the current state to initialize the control page.
3. In the `CONTROL_PAGE` tab, the `ControlPageMiddleware` has a `message` event listener. It receives the `message` with type `INIT_CONTROL_PAGE` sent by the `DETACHED_PAGE`, and:
    1. It dispatches `RESET_STATE`, setting its state = the state from the `DETACHED_PAGE`
    2. It sets its own display mode to `CONTROL_PAGE`
4. From now on, in both the tabs, every action intercepted by `ControlPageMiddleware` will be forwarded to the other window, unless it's a not-forwardable action, or it's an action that's been forwarded by the other window. The action is handled in the `message` listener: when a `message` with type `ACTION` is received, the action carried by the message will be dispatched.
5. When one of the windows is closed, a `message` with type `WINDOW_CLOSED` is sent to the other window:
    - if the `CONTROL_PAGE` is closed,the `DETACHED_PAGE` will set the display mode to `CONTROL_WIDGET`.
    - if the `DETACHED_PAGE` is closed, the `CONTROL_PAGE` will close as well
