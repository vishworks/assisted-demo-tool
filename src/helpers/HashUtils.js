import {
  join,
  map,
  sortBy,
  toPairs,
  merge,
  memoize,
  filter,
  isEmpty
} from 'lodash';

const PARAMS_SEPARATOR = '--';
const KEY_VALUE_SEPARATOR = '=';

export function getHashFromObject(props) {
  return join(
    map(sortBy(filter(toPairs(props), pair => !isEmpty(pair[1] + '')), 0), ar =>
      join(ar, KEY_VALUE_SEPARATOR)
    ),
    PARAMS_SEPARATOR
  );
}

export function updateHash(newHash) {
  if (window.history && window.history.pushState) {
    // don't trigger an hashchange event
    window.history.pushState(null, null, '#' + newHash);
  } else {
    window.location.hash = newHash;
  }
}

export function updateHashFromObject(props) {
  let current = parseHash(window.location.hash),
    merged = merge(current, props);
  updateHash(getHashFromObject(merged));
}

export const parseHash = memoize(hash => {
  hash = hash || '';
  hash = decodeURIComponent(hash.substring(1)); // remove hash symbol
  let optsStr = hash.split(PARAMS_SEPARATOR);

  let opts = {};
  optsStr.forEach(opt => {
    let index = opt.indexOf(KEY_VALUE_SEPARATOR);
    if (index !== -1) {
      let key = opt.substring(0, index);
      opts[key] = opt.substring(index + 1);
    } else {
      opts[opt] = true;
    }
  });
  return opts;
});

export const parseCurrentHash = () => {
  return parseHash(window.location.hash);
};
