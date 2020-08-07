const requireExternal = (module) => `require("${module}")`;

function externals(force = false) {
  if (force) return {};

  return {
    'tago/analysis': requireExternal('tago/analysis'),
    'tago/device': requireExternal('tago/device'),
    'tago/account': requireExternal('tago/account'),
    'tago/services': requireExternal('tago/services'),
    'tago/utils': requireExternal('tago/utils'),
    'moment-timezone': requireExternal('moment-timezone'),
    '@tago-io/sdk': requireExternal('@tago-io/sdk'),
    tago: requireExternal('tago'),
    geolib: requireExternal('geolib'),
    async: requireExternal('async'),
    moment: requireExternal('moment'),
    co: requireExternal('co'),
    lodash: requireExternal('lodash'),
    underscore: requireExternal('lodash'),
    _: requireExternal('lodash'),
  };
}

module.exports = externals;
