import { releaseChangelog, releasePublish, releaseVersion } from 'nx/release';
import yargsBuilder from 'yargs';
import { hideBin } from 'yargs/helpers'

const yargs = yargsBuilder(hideBin(process.argv))

const release = async () => {
    const preid = process.env.RELEASE_PREID?.length ? process.env.RELEASE_PREID : undefined;
    const specifier = process.env.RELEASE_SPECIFIER?.length ? process.env.RELEASE_SPECIFIER : undefined;
    const tag = process.env.RELEASE_TAG?.length ? process.env.RELEASE_TAG : undefined;

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
  
    // The returned number value from releasePublish will be zero if all projects are published successfully, non-zero if not
    if (!options.dryRun) {
        const publishStatus = await releasePublish({
            dryRun: options.dryRun,
            verbose: options.verbose,
            tag,
        });

        const code = Math.max(...Object.values(publishStatus).map(({ code }) => code))

        process.exit(code);
    }

    process.exit();
}

release();