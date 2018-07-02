#!/usr/bin/env node
const argv            = require('yargs').argv;
const path            = require('path');
const webpack         = require('webpack');
const ora             = require('ora');
const os              = require('os');
const packageJSON     = require('./package.json');
const currenct_folder = process.cwd();
const spinner         = ora('Building... (It may take a few minutes)');

const tagoctx = (module) => `require("${module}")`;

const externals = argv.force ? {} : {
  'tago'            : tagoctx('tago'),
  'tago/analysis'   : tagoctx('tago/analysis'),
  'tago/device'     : tagoctx('tago/device'),
  'tago/account'    : tagoctx('tago/account'),
  'tago/services'   : tagoctx('tago/services'),
  'tago/utils'      : tagoctx('tago/utils'),
  'async'           : tagoctx('async'),
  'moment'          : tagoctx('moment'),
  'moment-timezone' : tagoctx('moment-timezone'),
  'crypto'          : tagoctx('crypto'),
  'co'              : tagoctx('co'),
  'lodash'          : tagoctx('lodash'),
  'underscore'      : tagoctx('lodash'),
  '_'               : tagoctx('lodash'),
  'b64'             : tagoctx('b64'),
  'pdfkit'          : tagoctx('pdfkit'),
};

if (!argv._[0] || argv._[0] === 'help') {
  return require('./help');
}

const bannerMessage = `@tago-builder
Tago (https://tago.io/)
Tago Builder V${packageJSON.version} (https://git.io/vhEW5)

Generated at: ${Date.now()} (${new Date()})
Machine     : ${os.hostname()} - ${os.platform()}
`;

function build() {
  const input_file = argv._[0];
  const output_file = argv._[1] || `${input_file}.tago.js`;

  const buildConfig = {
    mode: 'development',
    context: currenct_folder,
    entry: `./${input_file}`,
    target: 'node',
    module: {},
    output: {
      path: currenct_folder,
      filename: `./${output_file}`,
    },
    plugins: [],
    externals: externals,
  };

  if (!argv.removeBanner) {
    buildConfig.plugins.push(new webpack.BannerPlugin(bannerMessage));
  }

  if (argv.fullCode) {
    buildConfig.devtool = 'inline-cheap-source-map';
  }

  const compiler = webpack(buildConfig);

  spinner.start();
  compiler.run((err, stats) => {
    spinner.stop();
    if (stats.hasErrors()) {
      return console.log(stats.compilation.errors);
    }

    console.log(`Analysis created at: ./${output_file}`);
  });
}

build();
