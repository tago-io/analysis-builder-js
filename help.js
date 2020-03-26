const help = `
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
`;

console.log(help);
