[![NPM](https://nodei.co/npm/tago-builder.png?downloads=true&downloadRank=true)](https://nodei.co/npm/tago-builder/) [![NPM](https://nodei.co/npm-dl/tago-builder.png?months=6&height=3)](https://nodei.co/npm/tago-builder/)

[![Dependency Status](https://david-dm.org/tago-io/tago-builder.svg)](https://david-dm.org/tago-io/tago-builder)
[![npm version](https://badge.fury.io/js/tago-builder.svg?style=flat)](http://badge.fury.io/js/tago-builder)

# Description

Tago Builder Node.JS.

| what                  | where                    |
|-----------------------|--------------------------|
| Tago website          | http://tago.io           |
| SDK documentation     | http://sdk.js.tago.io    |
| General documentation | http://docs.tago.io      |
| Forum / Community     | http://community.tago.io |

# Installation
```
$ npm install -g tago-builder
```

# Quick Example
## Simple build
``` bash
$ tago-builder myanalysis.js myanalysis.tago.js
or
$ tago-builder myanalysis.js
```

## Helper
```
usage: tago-builder [--options] <input file>
To see help text, you can run:

  tago-builder help
  tago-builder <file input>
  tago-builder <file input> <file output>
  tago-builder --force <file input> <file output>
  tago-builder --removeBanner <file input>
  tago-builder --fullCode <file input>

* --force, it will not ignore the modules that already exist on Tago context.
```

# License

Tago Builder is released under the [Apache-2.0 License](https://github.com/tago-io/tago-builder-js/blob/master/LICENSE.md).
