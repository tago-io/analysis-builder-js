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
    'date-fns': requireExternal('date-fns'),
    'date-fns-tz': requireExternal('date-fns'),
    'lora-packet': requireExternal('lora-packet'),
    dayjs: requireExternal('dayjs'),
    luxon: requireExternal('luxon'),
    tago: requireExternal('tago'),
    geolib: requireExternal('geolib'),
    moment: requireExternal('moment'),
    axios: requireExternal('axios'),
    lodash: requireExternal('lodash'),
  };
}

module.exports = externals;
