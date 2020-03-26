[![npm version](https://badge.fury.io/js/tago-builder.svg?style=flat)](http://badge.fury.io/js/tago-builder)

# Description

TagoIO Builder Node.JS.

| what                  | where                    |
|-----------------------|--------------------------|
| Tago website          | https://tago.io           |
| SDK documentation     | https://sdk.js.tago.io    |
| General documentation | https://docs.tago.io      |
| Forum / Community     | https://community.tago.io |

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
  tago-builder --sourceMap <file input>
  tago-builder --obfuscate <file input>
  tago-builder --tsconfig

Notes:
### <file input> can be a javascript or typescript file.
### --force, it will not ignore the modules that already exist on TagoIO context.
### --tsconfig, generate a tsconfig.json file on current folder.
```

# License

TagoIO Builder is released under the [Apache-2.0 License](https://github.com/tago-io/tago-builder-js/blob/master/LICENSE.md).
