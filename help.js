const help = `
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
`;

console.log(help);
