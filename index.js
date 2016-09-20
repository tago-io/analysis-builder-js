#!/usr/bin/env node
'use strict';

const argv            = require('yargs').argv;
const path            = require('path');
const webpack         = require('webpack');
const ora             = require('ora');
const cli_folder      = path.join(__dirname, '../..');
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
};

if (!argv._[0] || argv._[0] === 'help') {
  return require('./help');
}

function local_nm(module) {
  return `${__dirname}/node_modules/${module}`;
}

function build() {
  const input_file = argv._[0];
  const output_file = argv._[1] || `${input_file}.tago.js`;

  const compiler = webpack({
    context: currenct_folder,
    entry: `./${input_file}`,
    target: 'node',
    module: {
      loaders: [{
        test: /\.js$/,
        loader: local_nm('babel-loader'),
      }, {
        test: /\.json$/,
        loader: local_nm('json-loader'),
      }],
    },
    output: {
      path: currenct_folder,
      filename: `./${output_file}`,
    },
    externals: externals,
  });

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
