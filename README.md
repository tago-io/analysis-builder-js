# TagoIO - Analysis Builder for JavaScript and TypeScript

> TagoIO provides easy connection of electronic devices with external data to driver smarter decisions using contextual analysis.

## Description

When you are programming, it can be useful to use other packages inside your code; or you may want to organize your project using require and sub-folders.

| what                  | where                       |
| --------------------- | --------------------------- |
| TagoIO website        | <https://tago.io>           |
| General documentation | <https://docs.tago.io>      |
| Forum / Community     | <https://community.tago.io> |

## Installation

```bash
npm install -g @tago-io/builder
```

## Quick Example

Build with custom output file:

```bash
analysis-builder myAnalysis.js myAnalysis.tago-io.js
```

Build without custom output file, he output will be `myAnalysis.tago-io.js`:

```bash
analysis-builder myAnalysis.js
```

Build without custom output file and using TypeScript, the output will be `myAnalysis.tago-io.js`:

```bash
analysis-builder myAnalysis.ts # for typescript
```

## Helper

```text
Usage: analysis-builder [options] <input_file> [output_file]

Arguments:
  input_file           Original file to make build, can be a javascript or typescript file
  output_file          [optional] Destination name

Options:
  -V, --version        output the version number
  --legacy             use legacy behavior - exclude modules that already exist on TagoIO context (default: false)
  --removeBanner       Remove banner on output file (default: false)
  --obfuscate          Make the output file hard to understand (default: false)
  -w, --watch          Enabling watch mode on Analysis Build, it's listen for changes on the file system and to rebuild whenever a file changes (default: false)
  --tsconfig           Generate a tsconfig.json file on current folder
  -h, --help           display help for command
```

## License

TagoIO Builder is released under the [Apache-2.0 License](https://github.com/tago-io/analysis-builder-js/blob/master/LICENSE.md).
