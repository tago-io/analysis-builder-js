function externals(force = false) {
  if (force) return undefined;

  return [
    'tago/analysis',
    'tago/device',
    'tago/account',
    'tago/services',
    'tago/utils',
    'moment-timezone',
    '@tago-io/sdk',
    'date-fns',
    'date-fns-tz',
    'lora-packet',
    'dayjs',
    'luxon',
    'tago',
    'geolib',
    'moment',
    'axios',
    'lodash',
  ];
}

module.exports = externals;
