const help =
`usage: tago-builder [--options] <input file>
To see help text, you can run:

  tago-builder help
  tago-builder <file input>
  tago-builder <file input> <file output>
  tago-builder --force <file input> <file output>
  tago-builder --removeBanner <file input>
  tago-builder --fullCode <file input>

* --force, it will not ignore the modules that already exist on Tago context.
`;

console.log(help);
