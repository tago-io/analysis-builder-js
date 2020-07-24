# TagoIO - Analysis Builder for Javascript and Typescript
> TagoIO provides easy connection of electronic devices with external data to driver smarter decisions using contextual analysis.

## Description
When you are programming, it can be useful to use other packages inside your code; or you may want to organize your project using require and sub-folders.

| what                  | where                    |
|-----------------------|--------------------------|
| TagoIO website        | https://tago.io           |
| General documentation | https://docs.tago.io      |
| Forum / Community     | https://community.tago.io |

## Installation
```
$ npm install -g @tago-io/builder
```

## Quick Example
### Simple build
``` bash
$ analysis-builder myAnalysis.js myAnalysis.tago-io.js
or
$ analysis-builder myAnalysis.js
or
$ analysis-builder myAnalysis.ts # for typescript
```

## Helper
```
usage: analysis-builder [--options] <input file>
To see help text, you can run:

  analysis-builder help
  analysis-builder <file input>
  analysis-builder <file input> <file output>
  analysis-builder --force <file input> <file output>
  analysis-builder --removeBanner <file input>
  analysis-builder --sourceMap <file input>
  analysis-builder --obfuscate <file input>
  analysis-builder --tsconfig

Notes:
### <file input> can be a javascript or typescript file.
### --force, it will not ignore the modules that already exist on TagoIO context.
### --tsconfig, generate a tsconfig.json file on current folder.
```

## License

TagoIO Builder is released under the [Apache-2.0 License](https://github.com/tago-io/analysis-builder-js/blob/master/LICENSE.md).
