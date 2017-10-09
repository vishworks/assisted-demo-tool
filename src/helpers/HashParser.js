

function parseHash(hash) {
  hash = hash || '';
  hash = decodeURIComponent(hash.substring(1)); // remove hash symbol
  let optsStr = hash.split('--');

  let opts = {};
  optsStr.forEach((opt) => {
    let match = opt.match(/^([^=]*)=(.*)/);
    if (match) {
      opts[match[1]] = match[2];
    } else {
      opts[opt] = true;
    }
  });

  return opts;
}

export default parseHash;