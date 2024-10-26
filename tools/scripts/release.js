const {
  releaseChangelog,
  releaseVersion,
  releasePublish,
} = require('nx/release');
const yargsBuilder = require('yargs');
const { hideBin } = require('yargs/helpers');

const yargs = yargsBuilder(hideBin(process.argv));

const release = async () => {
  const preid = process.env.RELEASE_PREID?.length
    ? process.env.RELEASE_PREID
    : undefined;
  const specifier = process.env.RELEASE_SPECIFIER?.length
    ? process.env.RELEASE_SPECIFIER
    : undefined;

  const options = await yargs
    .version(false) // don't use the default meaning of version in yargs
    .option('dryRun', {
      alias: 'd',
      description:
        'Whether or not to perform a dry-run of the release process, defaults to true',
      type: 'boolean',
      default: true,
    })
    .option('verbose', {
      description:
        'Whether or not to enable verbose logging, defaults to false',
      type: 'boolean',
      default: false,
    })
    .parseAsync();

  const { workspaceVersion, projectsVersionData } = await releaseVersion({
    specifier,
    dryRun: options.dryRun,
    verbose: options.verbose,
    preid,
  });

  await releaseChangelog({
    versionData: projectsVersionData,
    version: workspaceVersion,
    dryRun: options.dryRun,
    verbose: options.verbose,
  });

  process.exit();
};

release();
