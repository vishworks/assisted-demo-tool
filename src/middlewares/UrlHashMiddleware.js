import { reduce, isEqual, includes, toInteger, toString } from 'lodash'

import { parseHash } from '../helpers/HashUtils.js'
import { selectPersona } from '../state/personas/operations.js'
import { selectDemo, gotoStep } from '../state/demos/operations.js'


var oldHash = window.location.hash;

const diff = (a, b) => reduce(a, function(result, value, key) {
  return isEqual(toString(value), toString(b[key])) ?
    result : result.concat(key);
}, []);

const UrlHashMiddleware = store => {

  oldHash = window.location.hash;
  window.addEventListener('hashchange', () => {

    let oldHashObj = parseHash(oldHash),
      newHashObj = parseHash(window.location.hash);
    let delta = diff(oldHashObj, newHashObj);
    oldHash = window.location.hash;


    if (includes(delta, 'demoId')) {
      store.dispatch(selectDemo(newHashObj.demoId));
    }

    if (includes(delta, 'personaId')) {
      store.dispatch(selectPersona(newHashObj.personaId));
    }

    if (includes(delta, 'stepNumber')) {
      let stepIndex = toInteger(newHashObj.stepNumber) - 1;
      store.dispatch(gotoStep(stepIndex));
    }

  });

  return next => action => next(action);
};



export default UrlHashMiddleware;
