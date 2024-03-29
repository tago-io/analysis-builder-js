#!/usr/bin/env node
import chalk from 'chalk';
import updateNotifier from 'update-notifier';
import externals from './externals.js';
import { program } from 'commander';
import { build as esbuild } from 'esbuild';
import { userInfo, hostname, platform } from 'os';
import { readFileSync, writeFileSync, existsSync } from 'fs';
import { DateTime } from 'luxon';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const packageJSON = JSON.parse(readFileSync(new URL('./package.json', import.meta.url)));
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

program
  .version(packageJSON.version)
  .argument('<input_file>', 'Original file to make build, can be a javascript or typescript file')
  .argument('[output_file]', '[optional] Destination name')
  .option('-F, --force', 'it will not ignore the modules that already exist on TagoIO context', false)
  .option('-rb, --removeBanner', 'Remove banner on output file', false)
  .option('-ob, --obfuscate', 'Make the output file hard to understand', false)
  .option('-w, --watch', 'Enabling watch mode on Analysis Build, it\'s listen for changes on the file system and to rebuild whenever a file changes', false)
  .option('--tsconfig', 'Generate a tsconfig.json file on current folder');

program.addHelpText('before', `TagoIO Builder V${packageJSON.version} (https://git.io/JJ8Si)\n`);

const options = program.parse(process.argv).opts();
const files = program.parse(process.argv).args;

const notifier = updateNotifier({ pkg: packageJSON });
notifier.notify({
  defer: false,
  isGlobal: true,
  boxenOptions: {
    padding: 1,
    margin: 1,
    align: 'center',
    borderColor: '#347AB7',
    borderStyle: 'bold',
  },
});

const currentFolder = process.cwd();

if (options.tsconfig) {
  const tsFile = readFileSync(`${__dirname}/tsconfig.json`, 'utf-8');
  writeFileSync(`${currentFolder}/tsconfig.json`, tsFile);
  process.exit(0);
}

const inputFile = String(files[0]);
const outputFile = files[1] || `${inputFile.replace(/.ts|.js/g, '')}.tago-io.js`;

const bannerMessage = `/*
 * TagoIO (https://tago.io/)
 * TagoIO Builder V${packageJSON.version} (https://git.io/JJ8Si)
 * -------------------
 * Generated by     :: ${userInfo().username ? userInfo().username : 'Unknown'}
 * Generated at     :: ${DateTime.utc().toFormat('ffff')}
 * Machine          :: ${hostname()} <${platform()}> - Node.js ${process.version}
 * Origin file      :: ${inputFile} <${inputFile.endsWith('.ts') ? 'TypeScript' : 'JavaScript'}>
 * Destination file :: ${outputFile}
 * -------------------
*/
`;

console.info(chalk.green(bannerMessage), '\n');

async function build() {
  /**
  * @type {esbuild.BuildOptions}
  */
  const buildConfig = {
    platform: 'node',
    target: 'node14',
    absWorkingDir: currentFolder,
    entryPoints: [`./${inputFile}`],
    bundle: true,
    outfile: outputFile,
    minify: options.obfuscate || false,
    external: externals(options.force)
  };

  if (options.watch) {
    buildConfig.watch = {
      onRebuild(error) {
        if (error) {
          console.info(chalk.redBright(`${DateTime.local().toFormat('tt')} - Error on build.`));
        } else {
          console.info(chalk.greenBright(`${DateTime.local().toFormat('tt')} - Rebuild with success.`));
        }
      },
    };
  }

  if (options.removeBanner === false) {
    buildConfig.banner = {
      js: bannerMessage,
    };
  }

  let tsconfigFile = `${currentFolder}/tsconfig.json`;
  if (!existsSync(tsconfigFile)) {
    tsconfigFile = `${__dirname}/tsconfig.json`;
    console.info('Using analysis-builder tsconfig.json\n');
  } else {
    console.info('Using custom tsconfig.json\n');
  }
  buildConfig.tsconfig = tsconfigFile;

  try {
    console.info(chalk.yellow('Building... -It may take a while-'));
    await esbuild(buildConfig);
    console.info(chalk.greenBright(`\nAnalysis file was saved at: ./${outputFile}\n`));
    if (options.watch) {
      console.info(chalk.bgMagenta.white('*** Watch Mode activated, looking for changes... (CTRL+C to exit) ***\n'));
    }
  } catch (error) {
    console.log(chalk.red(error));
    console.info(chalk.red('\n\nError on build, aborted.'));
  }
}

build();
